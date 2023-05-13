import * as React from 'react';
import * as RUIDialog from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { overlayClasses } from './classes';

/**
 * Dialog
 */

export const Dialog = RUIDialog.Dialog;

/**
 * DialogTrigger
 */

export const DialogTrigger = RUIDialog.Trigger;

/**
 * DialogPortal
 */

export const DialogPortal = RUIDialog.Portal;

/**
 * DialogOverlay
 */

export type DialogOverlayHandle = HTMLDivElement;
export type DialogOverlayProps = RUIDialog.DialogOverlayProps;

export const DialogOverlay = React.forwardRef<
  DialogOverlayHandle,
  DialogOverlayProps
>(function DialogOverlay({ className, ...props }, ref) {
  return (
    <RUIDialog.Overlay
      ref={ref}
      className={twMerge(
        'grid grid-cols-[minmax(280px,_560px)] grid-rows-[minmax(200px,_80%)] place-content-center place-items-center p-2',
        overlayClasses(),
        className
      )}
      {...props}
    />
  );
});

/**
 * DialogContent
 */

export type DialogContentHandle = HTMLDivElement;
export type DialogContentProps = RUIDialog.DialogContentProps;

export const DialogContent = React.forwardRef<
  DialogContentHandle,
  DialogContentProps
>(function DialogContent({ className, ...props }, ref) {
  return (
    <RUIDialog.Content
      ref={ref}
      className={twMerge(
        'grid max-h-full w-full grid-rows-[auto_minmax(0,_1fr)_auto] rounded-3xl border border-solid border-gray6 bg-gray1 shadow-lg outline-none',
        'data-[state="closed"]:animate-dialog-out data-[state="open"]:animate-dialog-in',
        className
      )}
      {...props}
    />
  );
});

/**
 * DialogHeader
 */

export type DialogHeaderHandle = HTMLDivElement;
export type DialogHeaderProps = React.ComponentPropsWithoutRef<'div'>;

export const DialogHeader = React.forwardRef<
  DialogHeaderHandle,
  DialogHeaderProps
>(function DialogHeader({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={twMerge(
        'flex h-16 items-center border-b border-solid border-gray6 px-4 sm:px-6',
        className
      )}
      {...props}
    />
  );
});

/**
 * DialogBody
 */

export type DialogBodyHandle = HTMLDivElement;
export type DialogBodyProps = React.ComponentPropsWithoutRef<'div'>;

export const DialogBody = React.forwardRef<DialogBodyHandle, DialogBodyProps>(
  function DialogBody({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={twMerge('overflow-y-auto px-4 py-4 sm:px-6', className)}
        {...props}
      />
    );
  }
);

/**
 * DialogActions
 */

export type DialogActionsHandle = HTMLDivElement;
export type DialogActionsProps = React.ComponentPropsWithoutRef<'div'>;

export const DialogActions = React.forwardRef<
  DialogActionsHandle,
  DialogActionsProps
>(function DialogActions({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={twMerge(
        'flex h-16 items-center justify-end gap-4 border-t border-solid border-gray6 px-4 sm:px-6',
        className
      )}
      {...props}
    />
  );
});

/**
 * DialogClose
 */

export const DialogClose = RUIDialog.Close;

/**
 * DialogTitle
 */

export type DialogTitleHandle = HTMLHeadingElement;
export type DialogTitleProps = RUIDialog.DialogTitleProps;

export const DialogTitle = React.forwardRef<
  DialogTitleHandle,
  DialogTitleProps
>(function DialogTitle({ className, ...props }, ref) {
  return (
    <RUIDialog.DialogTitle
      ref={ref}
      className={twMerge('text-xl', className)}
      {...props}
    />
  );
});

/**
 * DialogDescription
 */

export type DialogDescriptionHandle = HTMLParagraphElement;
export type DialogDescriptionProps = RUIDialog.DialogDescriptionProps;

export const DialogDescription = React.forwardRef<
  DialogDescriptionHandle,
  DialogDescriptionProps
>(function DialogDescription({ className, ...props }, ref) {
  return (
    <RUIDialog.Description
      ref={ref}
      className={twMerge('mb-4', className)}
      {...props}
    />
  );
});
