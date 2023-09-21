import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-8 flex w-full justify-center gap-4">
      <Link href="https://github.com/pedakihq/pedaki" prefetch={false} target="_blank">
        <Button variant="outline" className="font-semibold">
          <span>Rejoindre la communauté</span>
          <AnimatedChevronRight />
        </Button>
      </Link>
      {/*  TODO update self-host link*/}
      <Link href="https://docs.pedaki.fr/resources/self-host" prefetch={false} target="_blank">
        <Button variant="transparent" className="font-semibold">
          <span>Voir comment self-host</span>
          <AnimatedChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
