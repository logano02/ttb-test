import type { TStatusResponse } from '../../types';

// ----------------------------------------------------------------------
// GET FARM

export type TFarm = {
  id: string;
  tracerId: string;
  farmIdentification: string;
  farmType: string;
  maxCows: number;
  totalPen: number;
  name: string;
  standard: string;
  farmerOwnerName: string;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  addressProvince: string;
};

export type TFarmResponse = TStatusResponse & {
  total: number;
  pageSize: number;
  pageNo: number;
  data: TFarm[];
};

export type TFarmBody = {
  pageNo: number;
  pageSize: number;

  ids?: string[];
  provinces?: string[];
  keyword?: string;
  ref1?: string[];
  farmerIds?: string[];
  ownerType?: string[];
  cattleRanges?: CattleRange[];
  cattleCountRanges?: CattleCountRange[];
  farmType?: string[];
  penType?: string[];
  penRanges?: PenRange[];
  authorizedType?: string[];
  standard?: string[];
  status?: string[];
};

export type CattleRange = {
  min: number;
  max: number;
};

export type CattleCountRange = {
  min: number;
  max: number;
};

export type PenRange = {
  min: number;
  max: number;
};

// ----------------------------------------------------------------------
// GET STATUSES FARM

export type TStatuses = {
  status: string;
  count: number;
};

export type TStatusesResponse = TStatusResponse & {
  totalCount: number;
  statuses: TStatuses[];
};

export type TStatusesParams = {
  ref1?: string;
};

// ----------------------------------------------------------------------
// CREATE FARM

export type TCreateFarmResponse = TStatusResponse & {
  id: string;
};

export type TCreateFarmBody = {
  farmIdentification: string;
  farmType: string;
  maxCows: number;
  name: string;
  standard: string;
  ref1: string;
  status: string;
  rai: number;
  ngan: number;
  wa: number;
  addressLine1: string;
  addressSubDistrict: string;
  addressDistrict: string;
  addressProvince: string;
  addressZipCode: string;
  isOwnerRefFarmer: boolean;
  owner: TOwner;
  authorized: TAuthorized[];
  veterinary: TVeterinary[] | null;
};

export type TOwner = {
  farmerId?: string | null;
  ownerType?: 'PERSON' | 'COMPANY' | 'COOPERATIVE';
  tin?: string;
  tinEncrypted?: string;
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  companyName?: string;
  gender?: string;
  birthDate?: string;
  educationDegree?: string;
  occupation?: string;
  secondOccupation?: string;
  phoneNumber?: string;
  mobileNumber?: string;
  email?: string;
  lineId?: string;
  addressLine1?: string;
  addressSubDistrict?: string;
  addressDistrict?: string;
  addressProvince?: string;
  addressZipCode?: string;
  contactAddressLine1?: string;
  contactAddressSubDistrict?: string;
  contactAddressDistrict?: string;
  contactAddressProvince?: string;
  contactAddressZipCode?: string;
};

export type TAuthorized = {
  authorizedType: string;
  authorizedSecondType?: string;
  licenseId: string;
  expireDate: string;
};

export type TVeterinary = {
  name: string;
  licenseId: string;
};

// ----------------------------------------------------------------------
// FARM DETAILS

export type TFarmDetailResponse = {
  id: string;
  tracerId: string;
  farmIdentification: string;
  farmType: string;
  maxCows: number;
  name: string;
  standard: string;
  ref1: string;
  status: string;
  rai: number;
  ngan: number;
  wa: number;
  addressLine1: string;
  addressSubdistrict: string;
  addressDistrict: string;
  addressProvince: string;
  addressZipcode: string;
  isOwnerRefFarmer: boolean;
  owner: TSubOwner;
  authrized: TSubAuthrized[];
  veterinary: TSubVeterinary[];
  fileAttachments: TFileAttachments[];
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type TFileAttachments = {
  id: string;
  url: string;
  contentType: string;
  key: string;
  description: string;
};

export type TSubOwner = {
  farmerId: string;
  ownerType: string;
  title: string;
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
};

export type TSubAuthrized = {
  id: string;
  authorizedType: string;
  authorizedSecondType: string;
  licenseId: string;
  expireDate: string;
};

export type TSubVeterinary = {
  id: string;
  name: string;
  licenseId: string;
};

// ----------------------------------------------------------------------
// DELETE FARM

export type TDeleteFarmParams = {
  id: string;
};

// ----------------------------------------------------------------------
// UPDATE FARM

export type TUpdateFarmBody = TCreateFarmBody & {
  id: string;
};

// ----------------------------------------------------------------------
// UPDATE FARM

export type TBulkCreateFarmResponse = {
  stagedId: string;
  totalCount: number;
  statuses: TSubBulkStatusResponse[];
  data: TSubBulkDataResponse[];
};

export type TSubBulkStatusResponse = {
  status: string;
  count: number;
};

export type TSubBulkDataResponse = {
  farmIdentification: string;
  farmType: string;
  maxCows: number;
  name: string;
  standard: string;
  status: string;
  rai: number;
  ngan: number;
  wa: number;
  addressLine1: string;
  addressSubDistrict: string;
  addressDistrict: string;
  addressProvince: string;
  addressZipCode: string;
  isOwnerRefFarmer: boolean;
  tracerId: string;
  ownerType: string;
  owner: TSubBulkOwnerResponse;
  authorizedType: string;
  authorizedSecondType: any;
  authorizedLicenseId: string;
  authorizedExpireDate: string;
  veterinaryName: any;
  veterinaryLicenseId: any;
  rows: number;
  errorStatus: number[];
  errorDetails: TSubBulkErrorDetailResponse[];
};

export type TSubBulkOwnerResponse = {
  farmerId: string;
  tin: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  companyName?: string;
  gender?: string;
  birthdate?: string;
  educationDegree: any;
  occupation?: string;
  secondOccupation: any;
  phoneNumber?: string;
  mobileNumber?: string;
  email: string;
  lineId: string;
  addressLine1: string;
  addressSubdistrict: string;
  addressDistrict: string;
  addressProvince: string;
  addressZipCode: string;
  contactAddressLine1: string;
  contactAddressSubdistrict: string;
  contactAddressDistrict: string;
  contactAddressProvince: string;
  contactAddressZipcode: string;
};

export type TSubBulkErrorDetailResponse = {
  message: string;
  excelPosition: string;
};
