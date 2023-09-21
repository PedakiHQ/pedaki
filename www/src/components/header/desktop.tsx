'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@pedaki/design/ui/navigation-menu';
import { cn } from '@pedaki/design/utils';
import { navigation } from '~/config/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Desktop = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation.map(item => {
          const isActive =
            pathname === item.href ||
            (item.children?.some(subitem => subitem.href === pathname) ?? false);
          if (item.children) {
            return (
              <NavigationMenuItem key={item.name}>
                <>
                  <NavigationMenuTrigger className="bg-white font-medium" data-active={isActive}>
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                      {item.children.map(subitem => {
                        const isChildrenActive = pathname === subitem.href;

                        return (
                          <ListItem
                            href={subitem.href}
                            title={subitem.name}
                            key={subitem.name}
                            data-active={isChildrenActive}
                          >
                            {subitem.description}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                href={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  'data-[active=true]:text-accent-foreground',
                )}
                data-active={isActive}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href!}
            className={cn(
              'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-secondary/50 focus:bg-secondary focus:text-secondary data-[active=true]:bg-secondary/50',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none group-hover:text-orange">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';

export default Desktop;
