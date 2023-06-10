import * as React from 'react';
import {
  Image as ImagePrimitive,
  ImageProps as ImagePrimitiveProps,
} from '../primitive/image';
import { AnimatePresence, motion } from 'framer-motion';
import * as RUIDialog from '@radix-ui/react-dialog';
import { IconButton } from './icon-button';
import { Cross1Icon } from '@radix-ui/react-icons';

export type LightBoxImageHandle = HTMLImageElement;
export type LightBoxImageProps = ImagePrimitiveProps;

export const LightBoxImage = React.forwardRef<
  LightBoxImageHandle,
  LightBoxImageProps
>(function LightBoxImage(props, ref) {
  return (
    <RUIDialog.Root>
      <RUIDialog.Trigger asChild>
        <motion.div
          layoutId="id"
          style={{ borderRadius: 20 }}
          className="overflow-hidden"
        >
          <ImagePrimitive {...props} />
        </motion.div>
      </RUIDialog.Trigger>
      <AnimatePresence>
        <RUIDialog.Portal>
          <RUIDialog.Overlay className="fixed inset-0 grid place-items-center bg-blackA8 p-4">
            <RUIDialog.Content asChild>
              <motion.div
                layoutId="id"
                className="relative overflow-hidden outline-none"
                style={{ borderRadius: 20 }}
              >
                <ImagePrimitive {...props} />
                <RUIDialog.DialogClose asChild>
                  <IconButton className="absolute right-2 top-2">
                    <Cross1Icon />
                  </IconButton>
                </RUIDialog.DialogClose>
              </motion.div>
            </RUIDialog.Content>
          </RUIDialog.Overlay>
        </RUIDialog.Portal>
      </AnimatePresence>
    </RUIDialog.Root>
  );
});
