'use client';

import { toast } from 'sonner';
import type { ToastT } from 'sonner';
import { randomId } from './random';

interface NotificationBase extends Omit<ToastT, 'id'> {
  // @internal
  id?: number | string;
}

interface WrapWithLoadingProps<T> {
  loadingProps: NotificationBase;
  successProps: ((data: T) => NotificationBase) | NotificationBase;
  errorProps: ((error: Error & { message: string }) => NotificationBase) | NotificationBase;
  throwOnError?: boolean;
}

export const wrapWithLoading = async <T>(
  promise: () => Promise<T> | T,
  { loadingProps, successProps, errorProps, throwOnError = true }: WrapWithLoadingProps<T>,
) => {
  const id = randomId();

  toast.loading(loadingProps.title, {
    id,
    ...loadingProps,
  });

  try {
    const result = await promise();

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
  } catch (error) {
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

    if (throwOnError) {
      throw error;
    }
  }
};
