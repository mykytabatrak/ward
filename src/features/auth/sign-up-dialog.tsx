'use client';

import { Button } from '@/ui/basic/button';
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogDescription,
  DialogActions,
  DialogClose,
} from '@/ui/basic/dialog';
import { FormDialog } from '@/ui/composed/form-dialog';
import {
  Form,
  FormField,
  FormLabel,
  FormTitle,
  FormControl,
  FormMessage,
  FormInput,
  FormSubmit,
  FormFieldSet,
} from '@/ui/primitive/form';

export function SignUpDialog({ children }: { children: React.ReactElement }) {
  return (
    <FormDialog
      trigger={children}
      title="Sign Up"
      description="Sign up with a new account."
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
      <FormField name="handle">
        <FormTitle>
          <FormLabel>Handle</FormLabel>
          <FormMessage match="valueMissing">This field is required</FormMessage>
        </FormTitle>
        <FormControl asChild>
          <FormInput type="text" required />
        </FormControl>
      </FormField>
      <FormField name="name">
        <FormTitle>
          <FormLabel>Name</FormLabel>
          <FormMessage match="valueMissing">This field is required</FormMessage>
        </FormTitle>
        <FormControl asChild>
          <FormInput type="text" required />
        </FormControl>
      </FormField>
    </FormDialog>
  );
}
