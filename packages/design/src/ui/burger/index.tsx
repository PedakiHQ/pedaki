import { cn } from '~/utils';
import React from 'react';
import classes from './burger.module.scss';

export interface BurgerProps {
  onClick?: () => void;
  active?: boolean;
  title?: string;
  className?: string;
}

export const Burger = ({ onClick, active, title, className }: BurgerProps) => {
  return (
    <button
      role="button"
      className={cn(classes.root, className)}
      title={title ?? 'Open navigation'}
      onClick={onClick}
    >
      <div className={cn(classes.burger, active && classes.active)} />
    </button>
  );
};
