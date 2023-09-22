import { Badge } from '@pedaki/design/ui/badge';
import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import { PageHeader } from '~/components/PageHeader';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-12">
        <Badges />
        <PageHeader
          title="Le futur de la gestion scolaire"
          description="Toutes les fonctionnalités pour gérer votre établissement, dans une seule application."
          withPadding={false}
          titleClassName="md:text-6xl max-w-screen-md"
        />
        <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row md:mt-8">
          <Link href="https://app.pedaki.fr">
            <Button variant="outline" className="font-semibold">
              <span>Découvrir le projet</span>
              <AnimatedChevronRight />
            </Button>
          </Link>
          <Link href="https://demo.pedaki.fr">
            <Button variant="transparent" className="font-semibold">
              <span>Ouvrir la démo</span>
              <AnimatedChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Badges = () => {
  return (
    <div className="flex justify-center gap-4">
      <Badge variant="outline" className="bg-white">
        Ouverture prévue en 2024
      </Badge>
    </div>
  );
};

export default Hero;
