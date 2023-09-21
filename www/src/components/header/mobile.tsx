'use client';

import { useMediaQuery, useOnClickOutside, useScrollLock } from '@pedaki/common/hooks';
import { Burger } from '@pedaki/design/ui/burger';
import { Button } from '@pedaki/design/ui/button';
import { ScrollArea } from '@pedaki/design/ui/scroll-area';
import { cn } from '@pedaki/design/utils';
import { Portal } from '@radix-ui/react-portal';
import { navigation } from '~/config/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Mobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const headerRef = React.useRef<HTMLElement | null>(null);
  useEffect(() => {
    // A bit of a hack, but I want to avoid using useRef directly on the header
    headerRef.current = document.getElementById('header')!;
  }, []);

  useScrollLock(!isLargeScreen && mobileOpen);
  useOnClickOutside(headerRef, closeMobile);

  return (
    <div className="md:hidden">
      {/* Mobile burger */}
      <Burger
        onClick={() => setMobileOpen(!mobileOpen)}
        active={mobileOpen}
        className="text-primary"
      />
      <PortalNav mobileOpen={mobileOpen} closeMobile={closeMobile} />
    </div>
  );
};

const PortalNav = ({
  mobileOpen,
  closeMobile,
}: {
  mobileOpen: boolean;
  closeMobile: () => void;
}) => {
  // FIXME: isClient is a trick to avoid SSR (bug with Portal)

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Portal
      asChild
      container={typeof document !== 'undefined' ? document.getElementById('mobile-target') : null}
    >
      {/* Mobile navigation */}
      <nav
        className={cn(
          'relative flex h-0 overflow-hidden transition-all duration-500 ease-in-out md:h-0',
          mobileOpen ? 'h-[min(60vh,400px)]' : 'h-0',
        )}
      >
        <div className="mt-2 w-full border-t pt-2">
          <ScrollArea className="flex h-full w-full flex-col gap-2 overflow-auto">
            <ul className="mr-16">
              {navigation.map(item => {
                if (item.children) {
                  return (
                    <li key={item.name} className="mt-6 first:mt-0">
                      <div className="mb-3.5 font-semibold text-primary">{item.name}</div>
                      <ul className="ml-4 flex flex-col gap-2">
                        {item.children.map(subitem => (
                          <li key={subitem.name}>
                            <Button
                              asChild
                              variant="transparent"
                              rounded="full"
                              className="flex h-min justify-start p-0 font-semibold text-secondary"
                              onClick={closeMobile}
                            >
                              <Link href={subitem.href}>{subitem.name}</Link>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return null;
              })}
            </ul>
          </ScrollArea>
        </div>
      </nav>
    </Portal>
  );
};

export default Mobile;
