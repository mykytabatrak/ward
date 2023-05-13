import * as React from 'react';
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuTrigger as DropdownMenuPrimitiveTrigger,
  DropdownMenuPortal as DropdownMenuPrimitivePortal,
  DropdownMenuContent as DropdownMenuPrimitiveContent,
  DropdownMenuArrow as DropdownMenuPrimitiveArrow,
  DropdownMenuItem as DropdownMenuPrimitiveItem,
  DropdownMenuItemIcon as DropdownMenuPrimitiveItemIcon,
  DropdownMenuGroup as DropdownMenuPrimitiveGroup,
  DropdownMenuLabel as DropdownMenuPrimitiveLabel,
  DropdownMenuCheckboxItem as DropdownMenuPrimitiveCheckboxItem,
  DropdownMenuRadioGroup as DropdownMenuPrimitiveRadioGroup,
  DropdownMenuRadioItem as DropdownMenuPrimitiveRadioItem,
  DropdownMenuItemIndicator as DropdownMenuPrimitiveItemIndicator,
  DropdownMenuSeparator as DropdownMenuPrimitiveSeparator,
  DropdownMenuSub as DropdownMenuPrimitiveSub,
  DropdownMenuSubTrigger as DropdownMenuPrimitiveSubTrigger,
  DropdownMenuSubContent as DropdownMenuPrimitiveSubContent,
} from '../primitive/dropdown-menu';

export type DropdownMenuProps = {
  trigger: React.ReactElement;
  asChild?: boolean;
  children?: React.ReactNode;
};

export function DropdownMenu({
  trigger,
  asChild,
  children,
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive>
      <DropdownMenuPrimitiveTrigger asChild>
        {trigger}
      </DropdownMenuPrimitiveTrigger>
      <DropdownMenuPrimitivePortal>
        <DropdownMenuPrimitiveContent asChild={asChild}>
          {children}
        </DropdownMenuPrimitiveContent>
      </DropdownMenuPrimitivePortal>
    </DropdownMenuPrimitive>
  );
}

export const DropdownMenuArrow = DropdownMenuPrimitiveArrow;

export const DropdownMenuItem = DropdownMenuPrimitiveItem;

export const DropdownMenuItemIcon = DropdownMenuPrimitiveItemIcon;

export const DropdownMenuGroup = DropdownMenuPrimitiveGroup;

export const DropdownMenuLabel = DropdownMenuPrimitiveLabel;

export const DropdownMenuCheckboxItem = DropdownMenuPrimitiveCheckboxItem;

export const DropdownMenuRadioGroup = DropdownMenuPrimitiveRadioGroup;

export const DropdownMenuRadioItem = DropdownMenuPrimitiveRadioItem;

export const DropdownMenuItemIndicator = DropdownMenuPrimitiveItemIndicator;

export const DropdownMenuSeparator = DropdownMenuPrimitiveSeparator;

export const DropdownMenuSub = DropdownMenuPrimitiveSub;

export const DropdownMenuSubTrigger = DropdownMenuPrimitiveSubTrigger;

export const DropdownMenuSubContent = DropdownMenuPrimitiveSubContent;
