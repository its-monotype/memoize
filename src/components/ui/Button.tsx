import { cn } from '~/lib/utils';
import { forwardRef } from 'react';

export type ButtonProps = React.ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={cn(
        'rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Button.displayName = 'Button';
