import { cn } from '@pedaki/design/utils';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

interface PageHeaderProps {
  title: string;
  description?: string;
  withPadding?: boolean;
  titleClassName?: string;
}

export const PageHeader = ({
  title,
  description,
  withPadding = true,
  titleClassName,
}: PageHeaderProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        withPadding && wrapperClassName,
      )}
    >
      <Balancer
        as="h1"
        className={cn('text-center text-5xl font-bold text-gray-900', titleClassName)}
      >
        {title}
      </Balancer>
      {description && description.length > 0 && (
        <div className="max-w-md md:max-w-xl">
          {/* z-[2] is required as we use a blur hack in PriceTable */}
          <Balancer
            as="h2"
            className="relative z-[2] text-center text-base leading-7 text-secondary md:text-lg"
          >
            {description}
          </Balancer>
        </div>
      )}
    </div>
  );
};

export const wrapperClassName = 'mx-4 mt-12';
