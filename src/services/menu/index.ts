export async function getMainMenu() {
  const res = await fetch("https://app.shortbites.ai/api/menu/", {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  
  try {
     return res.json();
  } catch (error) {
     console.error("Error fetching menu:", error);
     throw new Error("Failed to fetch menu");
  }

}
