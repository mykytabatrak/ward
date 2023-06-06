'use client';

import * as React from 'react';
import { z } from 'zod';
import {
  HamburgerMenuIcon,
  EnterIcon,
  Pencil2Icon,
  DotFilledIcon,
} from '@radix-ui/react-icons';
import { IconButton } from '@/ui/basic/icon-button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
  DropdownMenuSeparator,
} from '@/ui/basic/dropdown-menu';
import { ColorScheme, ColorSchemeCookieKey } from '../color-scheme/models';
import { SignInDialog } from '../auth/sign-in-dialog';
import { SignUpDialog } from '../auth/sign-up-dialog';

export function UserDropdownMenu({
  colorScheme: defaultColorScheme,
}: {
  colorScheme: z.infer<typeof ColorScheme>;
}) {
  const [colorScheme, setColorScheme] = React.useState(
    () => defaultColorScheme
  );

  React.useEffect(() => {
    document.cookie = `${ColorSchemeCookieKey}=${colorScheme}`;
    document.documentElement.dataset.colorScheme = colorScheme;
  }, [colorScheme]);

  return (
    <DropdownMenu
      trigger={
        <IconButton>
          <HamburgerMenuIcon />
        </IconButton>
      }
    >
      <AuthenticationGroup />
      <DropdownMenuSeparator />
      <ColorSchemeGroup value={colorScheme} onChange={setColorScheme} />
    </DropdownMenu>
  );
}

function AuthenticationGroup() {
  function onSelect(event: Event) {
    event.preventDefault();
  }

  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel>Authenticate</DropdownMenuLabel>
      <SignInDialog>
        <DropdownMenuItem disabled onSelect={onSelect}>
          <DropdownMenuItemIcon>
            <EnterIcon />
          </DropdownMenuItemIcon>
          Sign In
        </DropdownMenuItem>
      </SignInDialog>
      <SignUpDialog>
        <DropdownMenuItem disabled onSelect={onSelect}>
          <DropdownMenuItemIcon>
            <Pencil2Icon />
          </DropdownMenuItemIcon>
          Sign Up
        </DropdownMenuItem>
      </SignUpDialog>
    </DropdownMenuGroup>
  );
}

function ColorSchemeGroup({
  value,
  onChange: setValue,
}: {
  value: z.infer<typeof ColorScheme>;
  onChange: (value: z.infer<typeof ColorScheme>) => void;
}) {
  function createOnSelect(value: z.infer<typeof ColorScheme>) {
    return function onSelect(event: Event) {
      event.preventDefault();
      setValue(value);
    };
  }

  return (
    <DropdownMenuRadioGroup value={value}>
      <DropdownMenuLabel>Select Color Scheme</DropdownMenuLabel>
      <DropdownMenuRadioItem
        value={ColorScheme.enum.system}
        onSelect={createOnSelect('system')}
      >
        <DropdownMenuItemIndicator>
          <DotFilledIcon />
        </DropdownMenuItemIndicator>
        System
      </DropdownMenuRadioItem>
      <DropdownMenuRadioItem
        value={ColorScheme.enum.light}
        onSelect={createOnSelect('light')}
      >
        <DropdownMenuItemIndicator>
          <DotFilledIcon />
        </DropdownMenuItemIndicator>
        Light
      </DropdownMenuRadioItem>
      <DropdownMenuRadioItem
        value={ColorScheme.enum.dark}
        onSelect={createOnSelect('dark')}
      >
        <DropdownMenuItemIndicator>
          <DotFilledIcon />
        </DropdownMenuItemIndicator>
        Dark
      </DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  );
}
