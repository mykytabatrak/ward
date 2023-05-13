import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  Button as ButtonPrimitive,
  ButtonHandle as ButtonPrimitiveHandle,
  ButtonProps as ButtonPrimitiveProps,
} from '../primitive/button';

export type IconButtonHandle = ButtonPrimitiveHandle;
export type IconButtonProps = ButtonPrimitiveProps;

export const IconButton = React.forwardRef<IconButtonHandle, IconButtonProps>(
  function IconButton({ className, ...props }, ref) {
    return (
      <ButtonPrimitive
        ref={ref}
        className={twMerge('w-10 justify-center', className)}
        {...props}
      />
    );
  }
);
