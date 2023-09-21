import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC<{
  width?: number;
  height?: number;
}> = ({ width = 120, height = 36 }) => {
  return (
    <Link className="flex select-none items-center hover:opacity-75" href="/">
      <Image
        src="/logo-light.svg"
        alt="Pedaki"
        height={height}
        width={width}
        className="inline dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Pedaki"
        height={height}
        width={width}
        className="hidden dark:inline"
      />
    </Link>
  );
};

export default Logo;
