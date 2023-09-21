import React from 'react';
import Balancer from 'react-wrap-balancer';

const Header = () => {
  /* TODO: faire un composant pour les header de section, je les ai repris 4 fois */

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="max-w-lg md:max-w-2xl">
        <Balancer as="h2" className="text-4xl font-bold lg:text-5xl" id="open-source">
          Rejoignez notre communauté open source
        </Balancer>
      </div>
      <div className="max-w-lg md:max-w-4xl">
        <Balancer as="p" className="text-secondary">
          Tout notre code est open source, vous pouvez le consulter sur notre et y contribuer
          gratuitement.
        </Balancer>
      </div>
    </div>
  );
};

export default Header;
