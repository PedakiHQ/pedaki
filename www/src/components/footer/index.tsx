import LanguageSelector from '~/components/footer/LanguageSelector';
import Status from '~/components/footer/Status';
import Logo from '~/components/header/logo';
import { StyledLink } from '~/components/StyledLink';
import React from 'react';

const Footer = () => {
  return (
    <footer className="container border-t pt-8">
      <div className="flex flex-row items-center justify-between gap-2 pb-4">
        <div className="flex flex-col gap-4">
          <Logo />
          <div className="">
            <p className="font-semibold">Lorem ipsum dolor sit amet.</p>
            <p className="text-sm font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, esse.
            </p>
          </div>
        </div>
        <div>
          <LanguageSelector />
        </div>
      </div>
      <div className="border-t py-4 text-xs text-secondary">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-col gap-3.5 text-sm md:flex-row md:items-center">
            <StyledLink href="/legal/terms-of-service" prefetch={false} variant="subtle_secondary">
              Terms
            </StyledLink>
            <StyledLink href="/legal/privacy-policy" prefetch={false} variant="subtle_secondary">
              Privacy
            </StyledLink>
            <StyledLink href="/about" prefetch={false} variant="subtle_secondary">
              Company
            </StyledLink>
            <Status />
          </div>
          <div className="flex flex-row items-center gap-2">
            <span>© 2023</span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
