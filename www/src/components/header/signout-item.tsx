'use client';

import { DropdownMenuItem } from '@pedaki/design/ui/dropdown-menu';
import { useScopedI18n } from '~/locales/client';
import { signOut } from 'next-auth/react';
import React from 'react';
import { toast } from 'sonner';

export const SignOutItem = () => {
  const headerT = useScopedI18n('components.header');

  const onSignOut = async () => {
    console.log('signout');
    await signOut({ callbackUrl: '/' }).then(() => {
      toast.success(headerT('toast.logoutSuccess'));
    });
  };

  return (
    <DropdownMenuItem className="text-red-500" onClick={onSignOut}>
      {headerT('auth.logout')}
    </DropdownMenuItem>
  );
};
