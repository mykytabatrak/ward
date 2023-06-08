import * as React from 'react';
import {
  Image as ImagePrimitive,
  ImageProps as ImagePrimitiveProps,
} from '../primitive/image';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export type LightBoxImageHandle = HTMLImageElement;
export type LightBoxImageProps = ImagePrimitiveProps;

export const LightBoxImage = React.forwardRef<
  LightBoxImageHandle,
  LightBoxImageProps
>(function LightBoxImage(props, ref) {
  const id = React.useId();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <ImagePrimitive {...props} />
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={twMerge(
          'absolute inset-0',
          open && 'fixed grid place-items-center'
        )}
      >
        <motion.div
          layout
          onLayoutAnimationComplete={() => console.log('Complete')}
        >
          <ImagePrimitive {...props} />
        </motion.div>
      </div>
    </div>
  );
});
