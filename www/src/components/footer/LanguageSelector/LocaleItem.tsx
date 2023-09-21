'use client';

import { DropdownMenuItem, DropdownMenuLabel } from '@pedaki/design/ui/dropdown-menu';
import type { IconType } from '@pedaki/design/ui/icons';
import { IconFlagFR, IconFlagGB } from '@pedaki/design/ui/icons';
import type { LocaleCode, locales } from '~/config/locales';
import React from 'react';

const LocaleIcon: Record<LocaleCode, IconType> = {
  fr: IconFlagFR,
  en: IconFlagGB,
};

export const LocaleItem = ({ locale }: { locale: (typeof locales)[number] }) => {
  const activeLocale = 'fr';
  const isActive = locale.code === activeLocale;
  const Icon = LocaleIcon[locale.code];

  return (
    <DropdownMenuItem
      disabled={isActive}
      key={locale.code}
      className="flex items-center space-x-2"
      onClick={() => alert('TODO: change locale to ' + locale.code)}
    >
      <Icon className="h-6 w-6 rounded-lg" />
      <DropdownMenuLabel>{locale.name}</DropdownMenuLabel>
    </DropdownMenuItem>
  );
};
