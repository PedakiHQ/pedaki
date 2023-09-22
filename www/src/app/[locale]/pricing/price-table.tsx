import { Card } from '@pedaki/design/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@pedaki/design/ui/tooltip';
import Link from 'next/link';
import React from 'react';

interface Feature {
  title: string;
  tooltip?: string;
  selfHost: string;
  scaler: React.ReactNode;
}

const table1 = [
  {
    title: 'Bidule1',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: 'inclus',
  },
  {
    title: 'Bidule2',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: 'inclus',
  },
  {
    title: 'Bidule3',
    selfHost: 'toi même',
    scaler: 'inclus',
  },
  {
    title: 'Bidule4',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: 'inclus',
  },
  {
    title: 'Bidule5',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: (
      <div>
        <span>inclus</span>
        <p>
          <span className="text-xs text-orange">+ 20e pour plus gros</span>
        </p>
      </div>
    ),
  },
] as Feature[];

const PriceTable = () => {
  return (
    <div>
      <h2 className="sr-only">Comparatif</h2>
      <div className="sticky top-12 z-[1] w-full pb-4 pt-8">
        <div className="absolute inset-0 z-[1] -mt-12 backdrop-blur"></div>
        <div className="container relative z-[20] flex text-base">
          <div className="w-0 sm:w-[24%]"></div>
          <div className="w-[50%] text-left font-semibold sm:w-[38%]">
            <span>Self-Host</span>
            <div>
              <span className="text-3xl">Gratuit</span>
            </div>
            {/*TOOD update self-host url */}
            <Link
              href="https://docs.pedaki.fr/resources/self-host"
              className="text-xs text-orange hover:underline"
            >
              Comment ça marche ?
            </Link>
          </div>
          <div className="w-[50%] text-left font-semibold sm:w-[38%]">
            <span>Scaler</span>
            <div>
              <span className="text-3xl">20e</span>
              <span className="pl-1 text-xs text-orange">/mois</span>
            </div>
            <span className="text-xs text-orange">Paiement à l&apos;année</span>
          </div>
        </div>
      </div>
      <div className="container relative">
        <FeatureTable features={table1} title="Features" id="features" />
        <FeatureTable features={table1} title="Sécurité" id="security" />
        <FeatureTable features={table1} title="Jsp" id="aaaaaa" />
      </div>
    </div>
  );
};

const FeatureTable = ({
  features,
  title,
  id,
}: {
  features: Feature[];
  title: string;
  id: string;
}) => {
  return (
    <section>
      <a href={`#${id}`} className="sticky top-44 z-0 mb-1 w-full border-b pb-1 backdrop-blur">
        <h3 className="scroll-mt-[180px] text-xl font-bold" id={id}>
          {title}
        </h3>
      </a>

      <div className="mb-4 w-full pb-12 text-base">
        <Card className="my-2 bg-secondary" withShadow={false}>
          {features.map(feature => (
            <div
              className="flex flex-col items-center border-b text-sm transition last:border-transparent sm:flex-row"
              key={feature.title}
            >
              <div className="w-[24%] min-w-[120px] py-4 pl-4 text-left">
                {feature.tooltip ? (
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger className="text-muted">
                        <span className="border-b border-dotted border-secondary font-semibold">
                          {feature.title}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent align="center" side="right">
                        <p className="max-w-sm">{feature.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <span className="text-secondary">{feature.title}</span>
                )}
              </div>
              <div className="flex flex-1 items-center pb-2 sm:pb-0">
                <div className="w-[50%] min-w-[180px] px-1.5 text-center sm:text-left">
                  {feature.selfHost}
                </div>
                <div className="w-[50%] min-w-[180px] px-1.5 text-center sm:text-left">
                  {feature.scaler}
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default PriceTable;
