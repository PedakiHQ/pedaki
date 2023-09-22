import { cn } from '@pedaki/design/utils';
import SectionTitle from '~/components/section/SectionTitle';
import { getScopedI18n } from '~/locales/server';
import Image from 'next/image';
import React from 'react';

const Assets = async () => {
  const assetsT = await getScopedI18n('pages.about.assets');

  return (
    <section>
      <SectionTitle anchor="assets">{assetsT('title')}</SectionTitle>
      <p className="mb-8 text-secondary">{assetsT('paragraphs.assetsAvailable')}</p>
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AssetImage
          className="dark bg-primary"
          title={assetsT('images.logoDark.title')}
          alt={assetsT('images.logoDark.alt')}
          image="https://pedaki.fr/logo-dark.svg"
        />
        <AssetImage
          className="bg-secondary"
          title={assetsT('images.logoLight.title')}
          alt={assetsT('images.logoLight.alt')}
          image="https://pedaki.fr/logo-light.svg"
        />
        <AssetImage
          className="bg-secondary"
          title={assetsT('images.logo.title')}
          alt={assetsT('images.logo.alt')}
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
