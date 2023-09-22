import { Avatar, AvatarFallback, AvatarImage } from '@pedaki/design/ui/avatar';
import { Button } from '@pedaki/design/ui/button';
import { Skeleton } from '@pedaki/design/ui/skeleton';
import SectionTitle from '~/components/section/SectionTitle';
import { StyledLink } from '~/components/StyledLink';
import { env } from '~/env.mjs';
import { getScopedI18n } from '~/locales/server';
import Link from 'next/link';
import React from 'react';

const AboutUs = async () => {
  const aboutUsT = await getScopedI18n('pages.about.aboutUs');

  return (
    <section>
      <SectionTitle anchor="about-us">{aboutUsT('title')}</SectionTitle>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-2 text-secondary">
            <p>
              {aboutUsT('paragraphs.projectStartedFor.1')}{' '}
              <StyledLink
                href="https://www.mewo.fr/?ref=pedaki"
                className="text-primary"
                decoration="underline"
              >
                Mewo
              </StyledLink>{' '}
              {aboutUsT('paragraphs.projectStartedFor.2')}
            </p>
            <p>{aboutUsT('paragraphs.learnMore')}</p>
          </div>
          <Link href={`${env.NEXT_PUBLIC_DOCS_URL}/news/introduction`} prefetch={false}>
            <Button>{aboutUsT('viewArticles')}</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Student
            image="https://avatars.githubusercontent.com/u/17593209?s=128&v=4"
            description={aboutUsT('students.vahor.description')}
            href="https://github.com/Vahor"
            name="Nathan David"
          />
          <Student
            image="https://avatars.githubusercontent.com/u/27494805?s=128&v=4"
            description={aboutUsT('students.avan0x.description')}
            href="https://github.com/AvaN0x"
            name="Clément Ricatte"
          />
          <Student
            image="https://avatars.githubusercontent.com/u/91695247?s=128&v=4"
            description={aboutUsT('students.alexpiquard.description')}
            href="https://github.com/AlexPiquard"
            name="Alex Piquard"
          />
        </div>
      </div>
    </section>
  );
};

const Student = ({
  name,
  description,
  image,
  href,
}: {
  name: string;
  description: string;
  image: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="h-[128px] w-[128px]">
        <AvatarImage src={image} alt={`Photo de ${name}`} width={128} height={128} />
        <AvatarFallback>
          <Skeleton />
        </AvatarFallback>
      </Avatar>
      <div className="mt-4 text-center">
        <StyledLink href={href} prefetch={false} variant="subtle_secondary">
          <p className="text-lg font-medium">{name}</p>
        </StyledLink>
        <p className="text-sm text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default AboutUs;
