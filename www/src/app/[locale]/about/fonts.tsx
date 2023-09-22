import { Card } from '@pedaki/design/ui/card';
import SectionTitle from '~/components/section/SectionTitle';
import { getScopedI18n } from '~/locales/server';
import React from 'react';

const Fonts = async () => {
  const fontsT = await getScopedI18n('pages.about.fonts');

  return (
    <section>
      <SectionTitle anchor="assets">{fontsT('title')}</SectionTitle>
      <p className="mb-8 text-secondary">{fontsT('paragraphs.description')}</p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
        <Font
          title="OpenSans"
          fontFamily="var(--font-sans)"
          description={fontsT('fonts.openSans.description')}
          content={fontsT('fonts.openSans.content')}
        />
        <Font
          title="FiraCode"
          fontFamily="var(--font-mono)"
          description={fontsT('fonts.firaCode.description')}
          content={fontsT('fonts.firaCode.content')}
        />
      </div>
    </section>
  );
};

const Font = ({
  title,
  description,
  fontFamily,
  content,
}: {
  title: string;
  description: string;
  fontFamily: string;
  content: string;
}) => {
  return (
    <Card className="p-4">
      <div className="mb-2">
        <h4 className="text-lg font-medium text-primary">{title}</h4>
        <p className="text-xs text-secondary">{description}</p>
      </div>
      <p style={{ fontFamily }}>
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
