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

export type DialogProps = {
  trigger: React.ReactElement;
  title: React.ReactNode;
  description: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

export function Dialog({
  trigger,
  title,
  description,
  actions,
  children,
}: DialogProps) {
  return (
    <DialogBasicRoot trigger={trigger}>
      <DialogBasicHeader>
        <DialogBasicTitle>{title}</DialogBasicTitle>
      </DialogBasicHeader>
      <DialogBasicBody>
        <DialogBasicDescription>{description}</DialogBasicDescription>
        {children}
      </DialogBasicBody>
      <DialogBasicActions>
        <DialogBasicClose asChild>
          <ButtonBasic>Cancel</ButtonBasic>
        </DialogBasicClose>
        {actions}
      </DialogBasicActions>
    </DialogBasicRoot>
  );
}
