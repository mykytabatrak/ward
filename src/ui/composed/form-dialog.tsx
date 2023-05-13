import {
  Form as FormPrimitive,
  FormFieldSet as FormPrimitiveFieldSet,
  FormSubmit as FormPrimitiveSubmit,
} from '@/ui/primitive/form';
import {
  Dialog as DialogBasicRoot,
  DialogHeader as DialogBasicHeader,
  DialogTitle as DialogBasicTitle,
  DialogBody as DialogBasicBody,
  DialogDescription as DialogBasicDescription,
  DialogActions as DialogBasicActions,
  DialogClose as DialogBasicClose,
} from '../basic/dialog';
import { Button as ButtonBasic } from '../basic/button';

export type FormDialogProps = {
  trigger: React.ReactElement;
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
};

export function FormDialog({
  trigger,
  title,
  description,
  children,
}: FormDialogProps) {
  return (
    <DialogBasicRoot trigger={trigger} asChild>
      <FormPrimitive>
        <DialogBasicHeader>
          <DialogBasicTitle>{title}</DialogBasicTitle>
        </DialogBasicHeader>
        <DialogBasicBody>
          <DialogBasicDescription>{description}</DialogBasicDescription>
          <FormPrimitiveFieldSet>{children}</FormPrimitiveFieldSet>
        </DialogBasicBody>
        <DialogBasicActions>
          <DialogBasicClose asChild>
            <ButtonBasic>Cancel</ButtonBasic>
          </DialogBasicClose>
          <FormPrimitiveSubmit asChild>
            <ButtonBasic>Submit</ButtonBasic>
          </FormPrimitiveSubmit>
        </DialogBasicActions>
      </FormPrimitive>
    </DialogBasicRoot>
  );
}
