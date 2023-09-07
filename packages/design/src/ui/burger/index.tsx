import React from 'react';
import { cn } from '../../utils';
import classes from './burger.module.scss';

export interface BurgerProps {
  onClick?: () => void;
  active?: boolean;
  title?: string;
}

export const Burger = ({ onClick, active, title }: BurgerProps) => {
  return (
    <button
      role="button"
      className={classes.root}
      title={title ?? 'Open navigation'}
      onClick={onClick}
    >
      <div className={cn(classes.burger, active && classes.active)} />
    </button>
  );
};
