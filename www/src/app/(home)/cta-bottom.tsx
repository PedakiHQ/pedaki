import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import Link from 'next/link';
import React from 'react';

const CallToActionBottom = () => {
  return (
    <div className="border-t bg-secondary py-16">
      <div className="container">
        <div>
          <h2 className="text-4xl font-bold lg:text-5xl" id="open-source">
            Un outil essentiel <br className="hidden md:block" />
            pour toutes les écoles.
          </h2>
          <p className="py-8 text-base text-secondary md:text-lg">
            Dites adieu aux feuilles de papier et aux tableurs Excel{' '}
            <br className="hidden md:block" />
            et bonjour à un outil simple qui se concentre sur ce qui compte vraiment.
          </p>
        </div>
        <div>
          <Link href="https://docs.pedaki.fr">
            <Button size="lg" variant="orange" className="font-semibold">
              <span>Créer mon compte</span>
              <AnimatedChevronRight className="text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBottom;
