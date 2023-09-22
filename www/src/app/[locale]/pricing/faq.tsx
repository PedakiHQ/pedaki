import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@pedaki/design/ui/accordion';
import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import Link from 'next/link';
import React from 'react';

const elements = [
  {
    name: 'Remboursements ?',
    description: 'Description 1',
  },
  {
    name: 'Moyens de paiement ?',
    description: 'Description 2',
  },
  {
    name: 'Sauvegarde des données ?',
    description: 'Description 3',
  },
  {
    name: "Et si j'arrête de payer ?",
    description: 'Description 4',
  },
];

const Faq = () => {
  return (
    <section className="container grid grid-cols-1 gap-8 pt-16 md:grid-cols-[1fr_2fr]" id="faq">
      {/* TODO: add patten somewhere */}
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">FAQ</h2>
        <p className="text-sm text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus fugiat
          provident quae ullam voluptates?
        </p>
        <Link href="/support">
          <Button variant="outline" className="font-semibold">
            <span>Contacte-nous</span>
            <AnimatedChevronRight />
          </Button>
        </Link>
      </div>
      <Accordion type="single" collapsible>
        {elements.map(element => (
          <AccordionItem value={element.name} className="border-transparent" key={element.name}>
            <AccordionTrigger>{element.name}</AccordionTrigger>
            <AccordionContent>{element.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
