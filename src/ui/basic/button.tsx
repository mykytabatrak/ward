import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  Button as ButtonPrimitive,
  ButtonHandle as ButtonPrimitiveHandle,
  ButtonProps as ButtonPrimitiveProps,
} from '../primitive/button';

export type ButtonHandle = ButtonPrimitiveHandle;
export type ButtonProps = ButtonPrimitiveProps;

export const Button = React.forwardRef<ButtonHandle, ButtonProps>(
  function Button({ className, ...props }, ref) {
    return (
      <ButtonPrimitive
        ref={ref}
        className={twMerge('px-4', className)}
        {...props}
      />
    );
  }
);
