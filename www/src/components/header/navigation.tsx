import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import User from './user';

const Navigation = () => {
  return (
    <>
      {/*Desktop navigation*/}
      <div className="hidden md:flex">
        <Desktop />
      </div>

      <div className="flex items-center gap-4 md:ml-8">
        <User />
        <Mobile />
      </div>
    </>
  );
};

export default Navigation;
