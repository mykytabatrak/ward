import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { focusableClasses, popoverClasses } from './classes';

/**
 * DropdownMenu classes
 */

const dropdownMenuContentClasses = cva([
  popoverClasses(),
  'rounded-lg border border-solid border-gray6 bg-gray2 p-1 shadow-lg',
]);

const dropdownMenuEntryClasses = cva('flex items-center px-4');

const dropdownMenuItemClasses = cva([
  focusableClasses(),
  dropdownMenuEntryClasses(),
  'rounded-md h-8 active:bg-gray5 data-[highlighted]:bg-gray4',
]);

const adornmentPadding = cva('relative pl-6');

const adornmentClasses = cva('absolute left-1');

/**
 * DropdownMenuContent context
 */

const DropdownMenuContentContext = React.createContext<{
  hasIcon: boolean;
  setHasIcon: (value: boolean) => void;
} | null>(null);

function useDropdownMenuContentContext() {
  const context = React.useContext(DropdownMenuContentContext);

  if (context === null) {
    throw Error(
      'Children specific <DropdownMenuContent /> should only be rendered inside it.'
    );
  }

  return context;
}

/**
 * DropdownMenu
 */

export const DropdownMenu = DropdownMenuPrimitive.Root;

/**
 * DropdownMenuTrigger
 */

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/**
 * DropdownMenuPortal
 */

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

/**
 * DropdownMenuContent
 */

export type DropdownMenuContentHandle = HTMLDivElement;
export type DropdownMenuContentProps = DropdownMenuPrimitive.MenuContentProps;

export const DropdownMenuContent = React.forwardRef<
  DropdownMenuContentHandle,
  DropdownMenuContentProps
>(function DropdownMenuContent({ className, ...props }, ref) {
  const [hasIcon, setHasIcon] = React.useState(false);

  return (
    <DropdownMenuContentContext.Provider value={{ hasIcon, setHasIcon }}>
      <DropdownMenuPrimitive.Content
        ref={ref}
        className={twMerge(dropdownMenuContentClasses(), className)}
        sideOffset={8}
        collisionPadding={8}
        {...props}
      />
    </DropdownMenuContentContext.Provider>
  );
});

/**
 * DropdownMenuArrow
 */

export type DropdownMenuArrowHandle = SVGSVGElement;
export type DropdownMenuArrowProps = DropdownMenuPrimitive.MenuArrowProps;

export const DropdownMenuArrow = React.forwardRef<
  DropdownMenuArrowHandle,
  DropdownMenuArrowProps
>(function DropdownMenuArrow({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Arrow
      ref={ref}
      className={twMerge('fill-gray2', className)}
      {...props}
    />
  );
});

/**
 * DropdownMenuItem
 */

export type DropdownMenuItemHandle = HTMLDivElement;
export type DropdownMenuItemProps = DropdownMenuPrimitive.MenuItemProps;

export const DropdownMenuItem = React.forwardRef<
  DropdownMenuItemHandle,
  DropdownMenuItemProps
>(function DropdownMenuItem({ className, ...props }, ref) {
  const context = useDropdownMenuContentContext();

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={twMerge(
        dropdownMenuItemClasses(),
        context.hasIcon && adornmentPadding(),
        className
      )}
      {...props}
    />
  );
});

/**
 * DropdownMenuItemIcon
 */

export type DropdownMenuItemIconHandle = HTMLDivElement;
export type DropdownMenuItemIconProps = React.ComponentPropsWithoutRef<'div'>;

export const DropdownMenuItemIcon = React.forwardRef<
  DropdownMenuItemIconHandle,
  DropdownMenuItemIconProps
>(function DropdownMenuItemIcon({ className, ...props }, ref) {
  const context = useDropdownMenuContentContext();

  React.useEffect(() => {
    if (!context.hasIcon) {
      context.setHasIcon(true);
    }
  });

  return (
    <div
      ref={ref}
      className={twMerge(adornmentClasses(), className)}
      {...props}
    />
  );
});

/**
 * DropdownMenuGroup
 */

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

/**
 * DropdownMenuLabel
 */

export type DropdownMenuLabelHandle = HTMLDivElement;
export type DropdownMenuLabelProps = DropdownMenuPrimitive.MenuLabelProps;

export const DropdownMenuLabel = React.forwardRef<
  DropdownMenuLabelHandle,
  DropdownMenuLabelProps
>(function DropdownMenuLabel({ className, ...props }, ref) {
  const context = useDropdownMenuContentContext();

  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={twMerge(
        dropdownMenuEntryClasses(),
        context.hasIcon && adornmentPadding(),
        'h-6 text-sm text-gray11',
        className
      )}
      {...props}
    />
  );
});

/**
 * DropdownMenuCheckboxItem
 */

export const DropdownMenuCheckboxItem = DropdownMenuPrimitive.CheckboxItem;

/**
 * DropdownMenuRadioGroup
 */

export const DropdownMenuRadioGroup =
  DropdownMenuPrimitive.DropdownMenuRadioGroup;

/**
 * DropdownMenuRadioItem
 */

export type DropdownMenuRadioItemHandle = HTMLDivElement;
export type DropdownMenuRadioItemProps =
  DropdownMenuPrimitive.MenuRadioItemProps;

export const DropdownMenuRadioItem = React.forwardRef<
  DropdownMenuRadioItemHandle,
  DropdownMenuRadioItemProps
>(function DropdownMenuRadioItem({ className, ...props }, ref) {
  const context = useDropdownMenuContentContext();

  React.useEffect(() => {
    if (!context.hasIcon) {
      context.setHasIcon(true);
    }
  });

  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={twMerge(
        dropdownMenuItemClasses(),
        adornmentPadding(),
        className
      )}
      {...props}
    />
  );
});

/**
 * DropdownMenuItemIndicator
 */

export type DropdownMenuItemIndicatorHandle = HTMLSpanElement;
export type DropdownMenuItemIndicatorProps =
  DropdownMenuPrimitive.MenuItemIndicatorProps;

export const DropdownMenuItemIndicator = React.forwardRef<
  DropdownMenuItemIconHandle,
  DropdownMenuItemIconProps
>(function DropdownMenuItemIndicator({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.ItemIndicator
      ref={ref}
      className={twMerge(adornmentClasses(), className)}
      {...props}
    />
  );
});

/**
 * DropdownMenuSeparator
 */

export type DropdownMenuSeparatorHandle = HTMLDivElement;
export type DropdownMenuSeparatorProps =
  DropdownMenuPrimitive.MenuSeparatorProps;

export const DropdownMenuSeparator = React.forwardRef<
  DropdownMenuSeparatorHandle,
  DropdownMenuSeparatorProps
>(function DropdownMenuSeparator({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={twMerge(
        '-mx-1 my-1 border-b border-solid border-gray6',
        className
      )}
      {...props}
    />
  );
});

/**
 * DropdownMenuSub
 */

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

/**
 * DropdownMenuSubTrigger
 */

export type DropdownMenuSubTriggerHandle = HTMLDivElement;
export type DropdownMenuSubTriggerProps =
  DropdownMenuPrimitive.MenuSubTriggerProps;

export const DropdownMenuSubTrigger = React.forwardRef<
  DropdownMenuSubTriggerHandle,
  DropdownMenuSubTriggerProps
>(function DropdownMenuSubTrigger({ className, ...props }, ref) {
  const context = useDropdownMenuContentContext();
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={twMerge(
        dropdownMenuItemClasses(),
        context.hasIcon && adornmentPadding(),
        className
      )}
      {...props}
    />
  );
});

/**
 * DropdownMenuSubContent
 */

export type DropdownMenuSubContentHandle = HTMLDivElement;
export type DropdownMenuSubContentProps =
  DropdownMenuPrimitive.MenuSubContentProps;

export const DropdownMenuSubContent = React.forwardRef<
  DropdownMenuSubContentHandle,
  DropdownMenuSubContentProps
>(function DropdownMenuSubContent({ className, ...props }, ref) {
  const [hasIcon, setHasIcon] = React.useState(false);
  return (
    <DropdownMenuContentContext.Provider value={{ hasIcon, setHasIcon }}>
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={twMerge(dropdownMenuContentClasses(), className)}
        {...props}
      />
    </DropdownMenuContentContext.Provider>
  );
});
