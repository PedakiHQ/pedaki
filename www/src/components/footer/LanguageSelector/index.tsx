import { Button } from '@pedaki/design/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@pedaki/design/ui/dropdown-menu';
import { IconChevronDown, IconTranslation } from '@pedaki/design/ui/icons';
import { LocaleItem } from '~/components/footer/LanguageSelector/LocaleItem';
import { locales } from '~/config/locales';
import { getScopedI18n } from '~/locales/server';
import React from 'react';

const LanguageSelector = async () => {
  const languageT = await getScopedI18n('components.footer.language');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="outline" aria-label={languageT('change')}>
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <IconTranslation className="h-4 w-4" />
              <span className="hidden md:inline">{languageT('change')}</span>
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
