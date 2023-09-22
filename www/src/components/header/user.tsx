'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@pedaki/design/ui/avatar';
import { Button } from '@pedaki/design/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@pedaki/design/ui/dropdown-menu';
import { Skeleton } from '@pedaki/design/ui/skeleton';
import { useScopedI18n } from '~/locales/client';
import type { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { env } from '../../env.mjs';
import { SignOutItem } from './signout-item';

// TODO: RSC makes the page cache not work
//  See the UserWithProvider below, but with this there is a flicker
//  https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering
// headers(): Using these in a Server Component will opt the whole route into dynamic rendering at request time.

const User = () => {
  const { data: session, status } = useSession();
  console.log({
    session,
    status,
  });

  if (status === 'authenticated') {
    return <Authenticated session={session} />;
  }
  return <Guest />;
};

const UserWithProvider = () => {
  // We don't need to refetch the session as it's only used to
  // display the username and avatar
  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      <User />
    </SessionProvider>
  );
};

const Guest = () => {
  const headerT = useScopedI18n('components.header');

  return (
    <Link href="/login" prefetch={false}>
      <Button variant="outline" className="font-semibold">
        {headerT('auth.login')}
      </Button>
    </Link>
  );
};

const Authenticated = ({ session }: { session: Session }) => {
  const headerT = useScopedI18n('components.header');

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="outline-none focus:outline-none"
          aria-label="Open profile dropdown"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={session.user.image}
              className="my-auto"
              alt={`Your avatar, ${session.user.name}`}
            />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <a href={env.NEXT_PUBLIC_APP_URL}>
            <DropdownMenuItem> {headerT('user.dashboard')}</DropdownMenuItem>
          </a>
          <DropdownMenuItem>{headerT('user.profile')}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <SignOutItem />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserWithProvider;
