'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map(({ link, childNavItems }, i) => (
          <NavigationMenuItem key={i}>
            {childNavItems && childNavItems.length > 0 ? (
              <>
                <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-4 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {childNavItems.map(({ link: childLink, grandchildNavItems }, j) => (
                      <li className="row-span-3" key={j}>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                          <CMSLink {...childLink} />
                        </NavigationMenuLink>
                        {grandchildNavItems && grandchildNavItems.length > 0 && (
                          <ul className="grid gap-4 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            {grandchildNavItems.map(({ link: grandchildLink }, k) => (
                              <li className="row-span-3" key={k}>
                                <NavigationMenuLink
                                  asChild
                                  className={navigationMenuTriggerStyle()}
                                >
                                  <CMSLink {...grandchildLink} />
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <CMSLink {...link} />
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
        {/* <NavigationMenuItem>
          <NavigationMenuLink href="/search" className="flex items-center gap-1 px-3 py-2">
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 text-primary stroke-black dark:stroke-white" />
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
