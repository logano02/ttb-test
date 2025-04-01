import type { StatusCodeError } from 'src/utils/status-text-error';

export type TStatusResponse = {
  code: string;
  message: string;
  error: string | null;
};

export type TErrorDataResponse = {
  code: StatusCodeError;
  message: string;
  description: string;
};
