import * as React from 'react';
import NextImage from 'next/image';
import { twMerge } from 'tailwind-merge';

export type ImageHandle = HTMLImageElement;
export type ImageProps = React.ComponentPropsWithoutRef<typeof NextImage>;

export const Image = React.forwardRef<ImageHandle, ImageProps>(function Image(
  { className, ...props },
  ref
) {
  return <NextImage ref={ref} className={twMerge('', className)} {...props} />;
});
