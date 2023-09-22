import { Card } from '@pedaki/design/ui/card';
import SectionTitle from '~/components/section/SectionTitle';
import React from 'react';

const Fonts = () => {
  return (
    <section>
      <SectionTitle anchor="assets">Fonts</SectionTitle>
      <p className="mb-8 text-secondary">
        Les polices utilisées sur notre site web sont les suivantes.
      </p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
        <Font
          title="OpenSans"
          fontVar="--font-sans"
          description="Police utilisée sur la majorité du site"
          content="Somebody once told me\n
The world is gonna roll me\n
I ain't the sharpest tool in the shed"
        />
        <Font
          title="FiraCode"
          fontVar="--font-mono"
          description="Police utilisée pour les éléments de code"
          content="She was looking kind of dumb\n
With her finger and her thumb\n
In the shape of an 'L' on her forehead"
        />
      </div>
    </section>
  );
};

const Font = ({
  title,
  description,
  fontVar,
  content,
}: {
  title: string;
  description: string;
  fontVar: string;
  content: string;
}) => {
  return (
    <Card className="p-4">
      <div className="mb-2">
        <h4 className="text-lg font-medium text-primary">{title}</h4>
        <p className="text-xs text-secondary">{description}</p>
      </div>
      <p style={{ fontFamily: `var(${fontVar})` }}>
        {content.split('\\n').map(line => (
          <React.Fragment key={line}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </Card>
  );
};

export default Fonts;
