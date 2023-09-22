import { cn } from '@pedaki/design/utils';
import SectionTitle from '~/components/section/SectionTitle';
import Image from 'next/image';
import React from 'react';

const Assets = () => {
  return (
    <section>
      <SectionTitle anchor="assets">Assets</SectionTitle>
      <p className="mb-8 text-secondary">
        Tous nos assets sont à votre disposition, la seule chose que nous vous demandons est de nous
        citer si vous les utilisez, et de ne pas les modifier.
      </p>
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AssetImage
          className="dark bg-primary"
          title="Logo"
          alt="Le logo de Pedaki"
          image="https://pedaki.fr/logo-dark.svg"
        />
        <AssetImage
          className="bg-secondary"
          title="Logo"
          alt="Le logo de Pedaki"
          image="https://pedaki.fr/logo-light.svg"
        />
        <AssetImage
          className="bg-secondary"
          title="Logo"
          alt="Icon"
          image="https://pedaki.fr/logo.png"
        />
      </div>
    </section>
  );
};

const AssetCard = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        'group relative flex h-[300px] flex-col items-center justify-center rounded-lg border p-8 text-left',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

const AssetImage = ({
  alt,
  image,
  className,
}: {
  title: string;
  alt: string;
  image: string;
  className?: string;
}) => {
  return (
    <AssetCard className={cn(className, 'select-none')}>
      <Image
        src={image}
        alt={alt}
        fill
        style={{ objectFit: 'contain' }}
        className="p-8"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </AssetCard>
  );
};

export default Assets;
