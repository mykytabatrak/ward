import * as React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { focusableClasses } from './classes';

/**
 * Button classes
 */

const buttonClasses = cva([
  'inline-flex h-10 items-center rounded-md align-middle',
  'bg-gray3 text-gray12 hover:bg-gray4 active:bg-gray5',
]);

/**
 * Button
 */

export type ButtonHandle = HTMLButtonElement;
export type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const Button = React.forwardRef<ButtonHandle, ButtonProps>(
  function Button({ className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={twMerge(buttonClasses(), focusableClasses(), className)}
        {...props}
      />
    );
  }
);
