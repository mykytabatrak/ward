'use client';

import { Button } from '@/ui/basic/button';
import { FormDialog } from '@/ui/composed/form-dialog';
import {
  FormField,
  FormLabel,
  FormTitle,
  FormControl,
  FormMessage,
  FormInput,
  FormSubmit,
} from '@/ui/primitive/form';

export function SignInDialog({ children }: { children: React.ReactElement }) {
  return (
    <FormDialog
      trigger={children}
      title="Sign In"
      description="Sign in into your existing account."
    >
      <FormField name="email">
        <FormTitle>
          <FormLabel>Email</FormLabel>
          <FormMessage match="valueMissing">This field is required</FormMessage>
        </FormTitle>
        <FormControl asChild>
          <FormInput type="email" required />
        </FormControl>
      </FormField>
      <FormField name="password">
        <FormTitle>
          <FormLabel>Password</FormLabel>
          <FormMessage match="valueMissing">This field is required</FormMessage>
        </FormTitle>
        <FormControl asChild>
          <FormInput type="password" required />
        </FormControl>
      </FormField>
    </FormDialog>
  );
}
