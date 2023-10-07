/* c8 ignore start */

'use client';

import { toast } from 'sonner';
import type { ToastT } from 'sonner';
import { randomId } from './random.ts';

type NotificationBase = Omit<ToastT, 'id'>;

interface WrapWithLoadingProps<T, B extends boolean> {
  loadingProps?: NotificationBase | null;
  successProps?: ((data: T) => NotificationBase) | NotificationBase | null;
  errorProps?: ((error: Error) => NotificationBase) | NotificationBase | null;
  throwOnError?: B;
}

export const wrapWithLoading = async <T, B extends boolean>(
  promise: () => Promise<T> | T,
  { loadingProps, successProps, errorProps, throwOnError }: WrapWithLoadingProps<T, B>,
): Promise<B extends true ? T : T | null> => {
  const id = randomId();

  if (loadingProps) {
    toast.loading(loadingProps.title, {
      id,
      ...loadingProps,
    });
  }

  try {
    const result = await promise();

    if (successProps) {
      let notificationProps: NotificationBase;
      if (typeof successProps === 'function') {
        notificationProps = successProps(result);
      } else {
        notificationProps = successProps;
      }

      toast.message(notificationProps.title, {
        id,
        type: 'success',
        duration: 4000,
        ...notificationProps,
      });

      return result;
    }
  } catch (error) {
    if (errorProps) {
      let notificationProps: NotificationBase;
      if (typeof errorProps === 'function') {
        notificationProps = errorProps(error as Error);
      } else {
        notificationProps = errorProps;
      }

      toast.message(notificationProps.title, {
        id,
        type: 'error',
        duration: 4000,
        ...notificationProps,
      });
    }

    if (throwOnError) {
      throw error;
    }

    // @ts-expect-error: happy compiler
    return null;
  }

  // @ts-expect-error: happy compiler
  return null;
};
