'use client';

import * as React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import {
  ImageProps as ImagePrimitiveProps,
  imageClasses as imagePrimitiveClasses,
} from '../primitive/image';

/**
 * Gallery
 */

export type GalleryHandle = HTMLDivElement;
export type GalleryProps = React.ComponentPropsWithoutRef<'div'> & {
  images: ImagePrimitiveProps[];
};

export const Gallery = React.forwardRef<GalleryHandle, GalleryProps>(
  function Gallery({ images, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={twMerge(
          'grid aspect-[3/2] grid-cols-2 grid-rows-2 gap-2',
          className
        )}
        {...props}
      >
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={twMerge(
              imagePrimitiveClasses(),
              'relative overflow-hidden'
            )}
          >
            <Image src={image.src} alt="" fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    );
  }
);
