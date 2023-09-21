import { Button } from '@pedaki/design/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@pedaki/design/ui/dropdown-menu';
import { IconChevronDown, IconTranslation } from '@pedaki/design/ui/icons';
import { LocaleItem } from '~/components/footer/LanguageSelector/LocaleItem';
import { locales } from '~/config/locales';
import React from 'react';

const LanguageSelector = () => {
  // TODO: use the active locale from the i18n context
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="outline">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <IconTranslation className="h-4 w-4" />
              <span>Change language</span>
            </div>
            <div className="relative top-[1px] ml-1 w-max transition duration-100 group-data-[state=open]:rotate-180">
              <IconChevronDown className="h-4 w-4" />
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="top">
        {locales.map(locale => {
          return <LocaleItem locale={locale} key={locale.code} />;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
