import type { TStatusResponse } from '../../types';

// ----------------------------------------------------------------------
// CREATE

export type TCreateBuyerBody = {
  companyName: string;
  compRegistrationId: string;
  country: string;
  countryCode: string;
  address: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  whatsapp: string;
  wechat: string;
  lineId: string;
};

export type TCreateBuyerResponse = TStatusResponse & {
  id: string;
};

// ----------------------------------------------------------------------
// UPDATE

export type TUpdateBuyerBody = {
  id: string;
  companyName: string;
  compRegistrationId: string;
  country: string;
  countryCode: string;
  address: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  whatsapp: string;
  wechat: string;
  lineId: string;
};

// ----------------------------------------------------------------------
// GET

export type TFileAttachment = {
  id: string;
  url: string;
  contentType: string;
};

export type TBuyer = {
  id: string;
  buyerCode: string;
  companyName: string;
  compRegistrationId: string;
  country: string;
  address: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  whatsapps: string;
  wechat: string;
  lineId: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  fileAttachments: TFileAttachment[];
};

export type TGetBuyerParams = {
  pageNo: number;
  pageSize: number;
  keyword?: string;
};

export type TGetBuyerResponse = TStatusResponse & {
  pageNo: number;
  pageSize: number;
  total: number;
  data: TBuyer[];
};

// ----------------------------------------------------------------------
// GET BY ID

export type TGetBuyerByIdParams = {
  id: string;
};

export type TGetBuyerByIdResponse = TStatusResponse & TBuyer;

// ----------------------------------------------------------------------
// DELETE

export type TDeleteBuyerParams = {
  id: string;
};

export type TDeleteBuyerResponse = TStatusResponse & {
  data: string;
};

// ----------------------------------------------------------------------
// UPLOAD ATTACHMENTS BUYERS

type TFileDetail = {
  description: string;
};

// export type TUploadAttachmentsBuyerBody = {
//   buyerId: string;
//   files: FormData;
//   detail?: TFileDetail[];
// };

export type TUploadAttachmentsBuyerBody = FormData;

export type TUploadAttachmentsBuyerResponse = TStatusResponse & {
  buyerId: string;
  files: File | null;
  filesDetail: TFileDetail[];
};

// ----------------------------------------------------------------------
// UPLOAD ATTACHMENTS BUYERS

export type TDownloadExcelBuyer = {
  ids?: string[];
  language: string;
};
