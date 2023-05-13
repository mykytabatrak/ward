import * as React from 'react';
import * as FormPrimitive from '@radix-ui/react-form';
import { twMerge } from 'tailwind-merge';
import { focusableClasses } from './classes';

/**
 * Form
 */

export const Form = FormPrimitive.Form;

/**
 * FormFieldSet
 */

export type FormFieldSetHandle = HTMLFieldSetElement;
export type FormFieldSetProps = React.ComponentPropsWithoutRef<'fieldset'>;

export const FormFieldSet = React.forwardRef<
  FormFieldSetHandle,
  FormFieldSetProps
>(function FormFieldSet({ className, ...props }, ref) {
  return (
    <fieldset
      ref={ref}
      className={twMerge('space-y-2', className)}
      {...props}
    />
  );
});

/**
 * FormField
 */

export type FormFieldHandle = HTMLDivElement;
export type FormFieldProps = FormPrimitive.FormFieldProps;

export const FormField = React.forwardRef<FormFieldHandle, FormFieldProps>(
  function FormField({ className, ...props }, ref) {
    return (
      <FormPrimitive.Field
        ref={ref}
        className={twMerge('grid', className)}
        {...props}
      />
    );
  }
);

/**
 * FormLabel
 */

export type FormLabelHandle = HTMLLabelElement;
export type FormLabelProps = FormPrimitive.FormLabelProps;

export const FormLabel = React.forwardRef<FormLabelHandle, FormLabelProps>(
  function FormLabel({ className, ...props }, ref) {
    return (
      <FormPrimitive.FormLabel
        ref={ref}
        className={twMerge('text-sm/6', className)}
        {...props}
      />
    );
  }
);

/**
 * FormControl
 */

export const FormControl = FormPrimitive.Control;

/**
 * FormMessage
 */

export type FormMessageHandle = HTMLSpanElement;
export type FormMessageProps = FormPrimitive.FormMessageProps;

export const FormMessage = React.forwardRef<
  FormMessageHandle,
  FormMessageProps
>(function FormMessage({ className, ...props }, ref) {
  return (
    <FormPrimitive.FormMessage
      ref={ref}
      className={twMerge('text-xs text-red11', className)}
      {...props}
    />
  );
});

/**
 * FormTitle
 */

export type FormTitleHandle = HTMLDivElement;
export type FormTitleProps = React.ComponentPropsWithoutRef<'div'>;

export const FormTitle = React.forwardRef<FormTitleHandle, FormTitleProps>(
  function FormTitle({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={twMerge('flex items-baseline justify-between', className)}
        {...props}
      />
    );
  }
);

/**
 * FormValidityState
 */

export const FormValidityState = FormPrimitive.ValidityState;

/**
 * FormSubmit
 */

export const FormSubmit = FormPrimitive.Submit;

/**
 * FormInput
 */

export type FormInputHandle = HTMLInputElement;
export type FormInputProps = React.ComponentPropsWithoutRef<'input'>;

export const FormInput = React.forwardRef<FormInputHandle, FormInputProps>(
  function FormInput({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={twMerge(
          'box-border rounded-md border border-solid border-gray7 bg-gray3 px-2 text-base/8 hover:border-gray8',
          focusableClasses(),
          className
        )}
        {...props}
      />
    );
  }
);
