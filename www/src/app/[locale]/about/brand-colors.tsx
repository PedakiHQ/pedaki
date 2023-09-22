import { Card } from '@pedaki/design/ui/card';
import { ColorPill } from '@pedaki/design/ui/color-pill';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@pedaki/design/ui/tooltip';
import { cn } from '@pedaki/design/utils';
import SectionTitle from '~/components/section/SectionTitle';
import { getScopedI18n } from '~/locales/server';
import React from 'react';

const BrandColors = async () => {
  const brandColorsT = await getScopedI18n('pages.about.brandColors');

  return (
    <section>
      <SectionTitle anchor="assets">{brandColorsT('title')}</SectionTitle>
      <p className="mb-8 text-secondary">
        {brandColorsT('paragraphs.description.1')}
        <br />
        {brandColorsT('paragraphs.description.2')}
      </p>
      <Card>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
          <TooltipProvider delayDuration={0}>
            <Color
              title={brandColorsT('colors.orange.title')}
              hex="#F76808"
              tooltip={brandColorsT('colors.orange.tooltip')}
            />
            <Color
              title={brandColorsT('colors.brownOrange.title')}
              hex="#E48844"
              tooltip={brandColorsT('colors.brownOrange.tooltip')}
            />
            <Color
              title={brandColorsT('colors.darkGreen.title')}
              hex="#4E867E"
              tooltip={brandColorsT('colors.darkGreen.tooltip')}
            />
            <Color
              title={brandColorsT('colors.lightGray.title')}
              hex="#F9F9F9"
              tooltip={brandColorsT('colors.lightGray.tooltip')}
            />
            <Color
              title={brandColorsT('colors.darkGray.title')}
              hex="#1A1A1A"
              tooltip={brandColorsT('colors.darkGray.tooltip')}
            />
          </TooltipProvider>
        </div>
      </Card>
    </section>
  );
};

const Color = ({
  title,
  hex,
  className,
  tooltip,
}: {
  title: string;
  hex: string;
  className?: string;
  descriptionClassName?: string;
  tooltip: string;
}) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <ColorPill color={hex} className="h-[1.5rem] min-h-[1.5rem] w-[1.5rem] min-w-[1.5rem]" />
      <Tooltip>
        <TooltipTrigger>
          <div className="text-left">
            <h4 className="mb-0.5 font-medium text-primary">{title}</h4>

            <div className="text-xs text-secondary">
              <p>{hex}</p>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs" side="top" align="center">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default BrandColors;
