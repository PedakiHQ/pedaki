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
import React from 'react';

const BrandColors = () => {
  return (
    <section>
      <SectionTitle anchor="assets">Brand colors</SectionTitle>
      <p className="mb-8 text-secondary">
        Les couleurs de notre marque sont les suivantes, vous pouvez les voir en action sur notre
        site web.
        <br />
        Chaque couleur à plusieurs nuances, mais celles-ci sont les principales.
      </p>
      <Card>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
          <TooltipProvider delayDuration={0}>
            <Color title="Orange" hex="#F76808" tooltip="Couleur d'accentuation" />
            <Color
              title="Orange-brun"
              hex="#E48844"
              tooltip="Utilisé pour les ombres et effets où le orange est déjà présent"
            />
            <Color title="Vert foncé" hex="#4E867E" tooltip="Vert utilisé dans le logo" />
            <Color
              title="Gris clair"
              hex="#F9F9F9"
              tooltip="Gris utilisé pour mettre en avant les éléments comme celui-ci"
            />
            <Color title="Gris foncé" hex="#1A1A1A" tooltip="Couleur de texte principale" />
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
