import { cva } from 'class-variance-authority';

export const focusableClasses = cva(
  'outline-none outline-offset-2 ring-gray8 focus-visible:ring-2'
);

export const popoverClasses = cva([
  'data-[state="open"]:data-[side="top"]:animate-popover-in-top',
  'data-[state="open"]:data-[side="right"]:animate-popover-in-right',
  'data-[state="open"]:data-[side="bottom"]:animate-popover-in-bottom',
  'data-[state="open"]:data-[side="left"]:animate-popover-in-left',
  'data-[state="closed"]:data-[side="top"]:animate-popover-out-top',
  'data-[state="closed"]:data-[side="right"]:animate-popover-out-right',
  'data-[state="closed"]:data-[side="bottom"]:animate-popover-out-bottom',
  'data-[state="closed"]:data-[side="left"]:animate-popover-out-left',
]);

export const overlayClasses = cva([
  'fixed inset-0 bg-blackA8',
  'data-[state="open"]:animate-overlay-in data-[state="closed"]:animate-overlay-out',
]);
