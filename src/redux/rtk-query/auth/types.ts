import type { TStatusResponse } from '../types';

// ----------------------------------------------------------------------
// login

export type ILogin = {
  role: string;
  accessToken: string;
  refreshToken: string;
};

export type ILoginBody = {
  password: string;
  citizenIdEncrypted: string;
};

export type ILoginResponse = TStatusResponse & {
  adminId: string;
  expiredAt: string;
  accessToken: string;
};

// ----------------------------------------------------------------------
// get admin by Id

export type IGetAdminByIdResponse = TStatusResponse & {
  id: string;
  email: string;
  maskingCitizenId: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  picUrl: string;
  permissions: string[];
  roleId: string;
};
