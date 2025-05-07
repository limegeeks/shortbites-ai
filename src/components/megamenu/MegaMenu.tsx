

import * as React from "react"
import Link from "next/link"
import { decode } from "he";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export interface WPMenuItem {
  id: number;
  title: {
    rendered: string;
  };
  status: string;
  url: string;
  attr_title: string;
  description: string;
  type: string;
  type_label: string;
  object: string;
  object_id: number;
  parent: number;
  menu_order: number;
  target: string;
  classes: string[];
  xfn: string[];
  invalid: boolean;
  meta: {
    inline_featured_image: boolean;
    _monsterinsights_skip_tracking: boolean;
    _monsterinsights_sitenote_active: boolean;
    _monsterinsights_sitenote_note: string;
    _monsterinsights_sitenote_category: number;
  };
  menus: number;
  _links: {
    self: {
      href: string;
      targetHints?: {
        allow: string[];
      };
    }[];
    collection: {
      href: string;
    }[];
    about: {
      href: string;
    }[];
    'wp:term'?: {
      taxonomy: string;
      embeddable: boolean;
      href: string;
    }[];
    'wp:menu-item-object'?: {
      post_type?: string;
      taxonomy?: string;
      embeddable: boolean;
      href: string;
    }[];
    curies: {
      name: string;
      href: string;
      templated: boolean;
    }[];
  };
  children?: WPMenuItem[];
}



export default function MegaMenu(props : any) {

    const { items } = props;
console.log("menu items in megamenu are", items);

  return (



    <NavigationMenu>
      <NavigationMenuList>
        {items?.map((item: WPMenuItem) => {
            console.log("item is", item);
            
            if(item.children && item.children.length > 0) { 



                return (
                    <NavigationMenuItem className="lg:relative hidden  lg:block group" key={item.id}>
                    <Link href={item.url} legacyBehavior passHref>
                        <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        { decode( item.title.rendered )}
                        </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                        <ul className="grid  w-lg gap-3 p-4 md:w-md lg:w-dvh md:grid-cols-2 ">
                        {item.children?.map((child: WPMenuItem) => (
                            <ListItem
                            key={child.id}
                            title={decode(child.title.rendered)}
                            href={child.url}
                            >
                            {child.description}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                )
            } else {

                    return (
        <NavigationMenuItem key={item.id}>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             {decode(item.title.rendered)}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
                    )

            }

            return (
          <NavigationMenuItem key={item.id}>
            <Link href={item.url} legacyBehavior passHref>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                { decode( item.title.rendered )}
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="grid w-lg gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.children?.map((child: WPMenuItem) => (
                  <ListItem
                    key={child.id}
                    title={decode(child.title.rendered)}
                    href={child.url}
                  >
                    {child.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) 
            
            } )} 


      
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


//   <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     {/* <Icons.logo className="h-6 w-6" /> */}
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components that you can copy and
//                       paste into your apps. Accessible. Customizable. Open
//                       Source.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-lg gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>