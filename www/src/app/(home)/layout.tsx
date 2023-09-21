import CallToActionBottom from '~/app/(home)/cta-bottom';
import type { ReactNode } from 'react';
import React from 'react';

export default function HomeLayout(props: { children: ReactNode; roadmap: ReactNode }) {
  return (
    <>
      {props.children}
      {props.roadmap}
      <CallToActionBottom />
    </>
  );
}
