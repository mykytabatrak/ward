import * as React from 'react';
import {
  Dialog as DialogPrimitive,
  DialogTrigger as DialogPrimitiveTrigger,
  DialogPortal as DialogPrimitivePortal,
  DialogOverlay as DialogPrimitiveOverlay,
  DialogContent as DialogPrimitiveContent,
  DialogHeader as DialogPrimitiveHeader,
  DialogTitle as DialogPrimitiveTitle,
  DialogBody as DialogPrimitiveBody,
  DialogDescription as DialogPrimitiveDescription,
  DialogActions as DialogPrimitiveActions,
  DialogClose as DialogPrimitiveClose,
} from '../primitive/dialog';

export type DialogProps = {
  trigger: React.ReactElement;
  asChild?: boolean;
  children?: React.ReactNode;
};

export function Dialog({ trigger, asChild, children }: DialogProps) {
  return (
    <DialogPrimitive>
      <DialogPrimitiveTrigger asChild>{trigger}</DialogPrimitiveTrigger>
      <DialogPrimitivePortal>
        <DialogPrimitiveOverlay>
          <DialogPrimitiveContent asChild={asChild}>
            {children}
          </DialogPrimitiveContent>
        </DialogPrimitiveOverlay>
      </DialogPrimitivePortal>
    </DialogPrimitive>
  );
}

export const DialogHeader = DialogPrimitiveHeader;

export const DialogTitle = DialogPrimitiveTitle;

export const DialogBody = DialogPrimitiveBody;

export const DialogDescription = DialogPrimitiveDescription;

export const DialogActions = DialogPrimitiveActions;

export const DialogClose = DialogPrimitiveClose;
