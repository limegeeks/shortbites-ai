// app/api/menus/route.js

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace with your actual WordPress site URL
    const wordpressUrl = 'https://www.shortbites.ai/wp-json/wp/v2/menu-items';
    const menuSlug = 'your-menu-slug'; // Replace with the slug of your menu

    // Replace these with your WordPress username and Application Password
    const username = 'sb_publisher1';
    const applicationPassword = 'vmDe xRy7 M9dS HIXc Unyz fWmX';

    // Encode the username and application password in base64
    const authHeader = 'Basic ' + Buffer.from(`${username}:${applicationPassword}`).toString('base64');

    // Fetch the menu data from WordPress
    const response = await fetch(`${wordpressUrl}?context=view&menus=288`, {
      headers: {
        'Authorization': authHeader,
      },
    });

    // Handle response
    if (!response.ok) {
      console.log("Response not OK:", response.status, response.statusText);
      
      throw new Error(response.status + ' ' + response.statusText); 
    }

    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      return NextResponse.json({ message: 'Menu data not found.' }, { status: 404 });
    }

    // Format the menu into a nested structure
    const nestedMenu = buildMenuTree(data);

    // Return the formatted nested menu as JSON
    return NextResponse.json(nestedMenu);
  } catch (error) {
    console.error('Error fetching menu:', error);
    return NextResponse.json({ message: 'Failed to fetch menu data.' }, { status: 500 });
  }
}

// Recursive function to build a nested menu tree
function buildMenuTree(items) {
  const map = {};
  const roots = [];

  items.forEach((item) => {
    map[item.id] = { ...item, children: [] };

    if (item.parent === 0) {
      roots.push(map[item.id]);
    } else {
      if (map[item.parent]) {
        map[item.parent].children.push(map[item.id]);
      }
    }
  });

  return roots;
}
