import type { TStatusResponse } from "../types";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export type TCreateConfirmBody = {
  name: string;
  lastname: string;
  idCard: string;
  accountNo: string;
  file: File;
};

export type TGetConfirmResponse = TStatusResponse & {
  name: string;
  lastname: string;
  idCard: string;
  accountNo: string;
  file: File;
};
