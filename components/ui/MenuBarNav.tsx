"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "ARSENAL",
    href: "/arsenal",
    description:
      "Arsenal",
  },
  {
    title: "CHELSEA",
    href: "/chelsea",
    description:
      "Chelsea",
  },
  {
    title: "LIVERPOOL",
    href: "/liverpool",
    description:
      "Liverpool",
  },
  {
    title: "MAN CITY",
    href: "/mancity",
    description: "Manchester city",
  },
  {
    title: "MAN UNITED",
    href: "/manunited",
    description:
      "Manchester united",
  },
  {
    title: "TOTTENHAM",
    href: "/tottenham",
    description:
      "Tottenham",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm lg:text-base">BIG SIX</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full bg-background gap-1 p-2 md:grid-cols-1 lg:w-[150px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-xs font-medium leading-none lg:text-xs">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
