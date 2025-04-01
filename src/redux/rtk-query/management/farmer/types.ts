import type { TStatusResponse } from '../../types';

// ----------------------------------------------------------------------
// GET FARMER

export type TFarmerBody = {
  pageNo: number;
  pageSize: number;

  keyword?: string;
  ids?: string[];
  farmerType?: string[];
  provinces?: string[];
  membershipStartYear?: string[];
  farmType?: string[];
  farmRanges?: FarmRange[];
  cattleRanges?: CattleRange[];
  penType?: string[];
};

export type FarmRange = {
  min: number;
  max: number;
};

export type CattleRange = {
  min: number;
  max: number;
};

export type TFarmer = {
  id: string;
  tracerId: string;
  farmerType: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  companyName: string;
  addressProvince: string;
  contactAddressProvince: string;
  profileUrl: string;
  profileContentType: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type TFarmerResponse = TStatusResponse & {
  pageNo: number;
  pageSize: number;
  total: number;
  data: TFarmer[];
};

// ----------------------------------------------------------------------
// CREATE & EDIT FARMER

export type TCreateEditFarmerBody = {
  id?: string;
  farmerType: string;
  tin?: string;
  tinEncrypted?: string;
  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  companyName?: string;
  gender?: string;
  birthDate?: string;
  educationDegree?: string;
  occupation?: string;
  secondOccupation?: string;
  phoneNumber?: string;
  mobileNumber: string;
  email?: string;
  lineId: string;

  addressLine1: string;
  addressSubDistrict: string;
  addressDistrict: string;
  addressProvince: string;
  addressZipCode: string;

  contactAddressLine1?: string;
  contactAddressSubDistrict?: string;
  contactAddressDistrict?: string;
  contactAddressProvince?: string;
  contactAddressZipCode?: string;
};

export type TCreateFarmerResponse = TStatusResponse & {
  id: string;
};

// ----------------------------------------------------------------------
// DELETE FARMER

export type TDeleteFarmerParams = {
  id: string;
};

// ----------------------------------------------------------------------
// GET DETAIL FARMER

export type TFarmerDetailResponse = {
  id: string;
  tracerId: string;
  farmerType: 'PERSON' | 'COMPANY' | 'COOPERATIVE';
  firstName: string;
  middleName: string;
  lastName: string;
  companyName: string;
  gender: string;
  birthdate: string;
  tin: string;
  educationDegree: string;
  occupation: string;
  secondOccupation: string;
  phoneNumber: string;
  mobileNumber: string;
  email: string;
  lineId: string;
  addressLine1: string;
  addressSubdistrict: string;
  addressDistrict: string;
  addressProvince: string;
  addressZipcode: string;
  contactAddressLine1: string;
  contactAddressSubdistrict: string;
  contactAddressDistrict: string;
  contactAddressProvince: string;
  contactAddressZipcode: string;
  sameAsHomeRegistration: boolean;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  title: string;
  fileAttachments: TSubFileAttachments[];
};

export type TSubFileAttachments = {
  id: string;
  url: string;
  contentType: string;
  key: null;
  description: 'NORMAL' | 'PROFILE' | 'IDC' | 'CRR' | 'CBR' | 'TAX';
};

// ----------------------------------------------------------------------
// UPLOAD ATTACHMENTS

export type TUploadAttachmentsBody = {
  detail?: {
    isP: string;
    description: string;
  };
  uploadType: string;
  farmerId: string;
  idc?: string;
  encryptedKey?: string;
};

// ----------------------------------------------------------------------
// CREATE & EDIT FARMER

export type TBulkUploadFileResponse = {
  stagedId: string;
  totalCount: number;
  statuses: TSubStatus[];
  data: TSubDataResponse[];
};

export type TSubStatus = {
  status: string;
  count: number;
};

export type TSubDataResponse = {
  farmerType: string;
  tin: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  companyName: string;
  gender: string;
  birthDate: string;
  educationDegree: string;
  occupation: string;
  secondOccupation: string;
  phoneNumber: string;
  mobileNumber: string;
  email: string;
  lineId: string;
  addressLine1: string;
  addressSubDistrict: string;
  addressDistrict: string;
  addressProvince: string;
  addressZipCode: string;
  contactAddressLine1: string;
  contactAddressSubDistrict: string;
  contactAddressDistrict: string;
  contactAddressProvince: string;
  contactAddressZipCode: string;
  status: number[];
  rows: number;
  errorDetails: TSubErrorDetails[];
};

export type TSubErrorDetails = {
  message: string;
  excelPosition: string;
};
