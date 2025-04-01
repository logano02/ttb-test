import type { TStatusResponse } from '../../types';

// ----------------------------------------------------------------------
//  GET COW

export type TCow = {
  id: string;
  tracerId: string;
  farmId: string;
  penId: string;
  cattleTypeId: string;
  cattleBreedIds: string[];
  traceabilityId: string;
  castrationStatus: string;
  pregnantStatus: string;
  nid: string;
  gender: string;
  birthdate: string;
  weight: number;
  tracerTag: string;
  vaccine: string[];
  status: string;
  latestTraceabilityStatus: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type TGetCowResponse = TStatusResponse & {
  total: number;
  pageSize: number;
  pageNo: number;
  data: TCow[];
};

export type TGetCowBody = {
  pageNo: number;
  pageSize: number;
  keyword?: string;
  keywords?: string[];
  farmId?: string;
  penId?: string;
  traceabilityId?: string;
  Ids?: string[];
  fromAgeYear?: number;
  fromAgeMonth?: number;
  toAgeYear?: number;
  toAgeMonth?: number;
  fromWeight?: number;
  toWeight?: number;
  cattleBreedIds?: string[];
  cattleTypeIds?: string[];
  gender?: string;
  pregnantStatus?: string;
  castrationStatus?: string;
  color?: string[];
  ear?: string[];
  horn?: string[];
  status?: string[];
  vaccine?: string[];
  isSourcing?: boolean;
  isTracing?: boolean;
};

// ----------------------------------------------------------------------
// CREATE COW

export type TCreateEditCowBody = {
  id?: string;
  farmId: string;
  penId: string;
  cattleTypeId: string;
  cattleBreedIds: string[];
  nid: string;
  gender: string;
  castrationStatus: string;
  pregnantStatus: string;
  birthdate: string;
  passportNo: string;
  color: string;
  ear: string;
  horn: string;
  weight: number;
  dateWeight: string;
  tracerTag: string;
  earTag: string[];
  breedSire: string[];
  breedDam: string[];
  breedPgs: string[];
  breedPgd: string[];
  breedMgs: string[];
  breedMgd: string[];
  countryCode?: string;
  health?: THealth[];
  vacination?: TVacination[];
};

export type THealth = {
  treatmentDate: string;
  veterinaryName: string;
  healthCondition: string;
  symptom: string;
  causeOfDeath: string;
  treatment: string;
  drugName: string;
  dosage: number;
  periodResidue: string;
};

export type TVacination = {
  vaccinationDate: string | Date;
  veterinaryName: string;
  vaccineType: string;
  remark: string;
  vaccineId: string;
  vaccineLotNo: string;
  vaccineExpiryDate: string | Date;
};

export type TCreateCowResponse = TStatusResponse & {
  id: string;
};

// ----------------------------------------------------------------------
// GET STATUSES COW

export type TStatuses = {
  status: string;
  count: number;
};

export type TStatusesResponse = TStatusResponse & {
  totalCount: number;
  statuses: TStatuses[];
};

type TCertObject = {
  id: string;
  name: string;
};

// ----------------------------------------------------------------------
// GET COW DETAIL

export type TCowDetail = {
  id: string;
  tracerId: string;
  farmId: string;
  penId: string;
  cattleTypeId: string;
  cattleBreedIds: string[];
  nid: string;
  gender: string;
  castrationStatus: string;
  pregnantStatus: string;
  birthdate: string;
  passportNo: string;
  color: string;
  ear: string;
  horn: string;
  weight: number;
  dateWeight: string;
  tracerTag: string;
  earTag: string[];
  breedSire: string[];
  breedDam: string[];
  breedPgs: string[];
  breedPgd: string[];
  breedMgs: string[];
  breedMgd: string[];
  isSourcing: boolean;
  isTracing: boolean;
  farmTracerId: string;
  farmName: string;
  penName: string;
  fileAttachments: TFileAttachments[];
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  countryCode: string;
};

export type TFileAttachments = {
  id: string;
  url: string;
  contentType: string;
  description: string;
};

// ----------------------------------------------------------------------
// GET COW DETAIL

export type TDeleteCowParams = {
  farmId: string;
  penId: string;
  cattleId: string;
};

// ----------------------------------------------------------------------
//  BULK UPLOAD

export type TBulkCreateCowResponse = {
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
  farmId: string;
  penId: string;
  cattleTypeId: string;
  cattleBreedIds: string[];
  nid: string;
  gender: string;
  castrationStatus: string;
  pregnantStatus: string;
  birthdate: string;
  passportNo: string;
  color: string;
  ear: string;
  horn: string;
  weight: number;
  dateWeight: string;
  tracerTag: string;
  breedSire: string[];
  breedDam: string[];
  breedPgs: string[];
  breedPgd: string[];
  breedMgs: string[];
  breedMgd: string[];
  countryCode: string;
  healthTreatmentDate: string;
  healthVeterinaryName: string;
  healthHealthCondition: string;
  healthSymptom: string;
  healthCauseOfDeath: string;
  healthTreatment: string;
  healthDrugName: string;
  healthDosage: number;
  healthPeriodResidue: string;
  vacinationVaccinationDate: string;
  vacinationVeterinaryName: string;
  vacinationVaccineType: string;
  vacinationRemark: string;
  vacinationVaccineId: string;
  vacinationVaccineLotNo: string;
  vacinationVaccineExpiryDate: string;
  row: number;
  errorStatus: number[];
  errorDetails: TSubBulkErrorDetailResponse[];
};

export type TSubBulkErrorDetailResponse = {
  message: string;
  excelPosition: string;
};

// =========================== Count Cattle Cow ===========================

type CowStatus = {
  farmId: string;
  isTracing: boolean;
  penId: string;
  traceabilityId: string;
  isTraceabilityUpdate: boolean;
};

export type TCowStatusCowBody = Partial<CowStatus>;

// ----------------------------------------------------------------------
// GET COW DETAIL

export type TGetTraceHistoryBody = {
  cattleId: string;
  pageNo: number;
  pageSize: number;
  keyword?: string;
  status?: string;
  shipmentDate?: string;
  estimatedArrivalDate?: string;
};

export type TGetTraceHistoryResponse = TStatusResponse & {
  total: number;
  pageSize: number;
  pageNo: number;
  data: TTraceHistory[];
};

export type TTraceHistory = {
  documentNo: string;
  reason: string;
  originProvince: string;
  totalAnimal: number;
  originFarmId: string;
  originPenId: string;
  originFarmName: string;
  originPenName: string;
  destinationFarmId: string;
  destinationPenId: string;
  destinationFarmName: string;
  destinationPenName: string;
  specificDestinationName: string;
  destinationProvince: string;
  shipmentDate: string;
  estimatedArrivalDate: string;
  destinationType: string;
  vehicleType: string;
  vehicleRegistration: string;
  transportCompanyName: string;
  driverTitle: string;
  driverFirstName: string;
  driverMiddleName: string;
  driverLastName: string;
  contactTitle: string;
  contactFirstName: string;
  contactMiddleName: string;
  contactLastName: string;
  contactPhone: string;
  isContractSameDriver: boolean;
  status: string;
};

// ----------------------------------------------------------------------
// EXPORT EXCEL

export type TExportExcelCowBody = {
  language: string;
  ids?: string[];
};

// GET CERTIFICATE
export type TCertificate = {
  id: string;
  cattleBreeds: TCertObject[];
  gender: string;
  birthdate: string;
  breedDam: TCertObject[];
  breedSire: TCertObject[];
  color: string;
  horn: string;
  height: string;
  weight: number;
  dateWeight: string;
  tracerTag: string;
  tracerId: string;
  earTag: string[];
  countryCode: string;
  status: string;
  fileAttachments?: TFileAttachments[];
  movements?: {
    shipmentDate: string;
    documentNo: string;
    reason: string;
    destinationFarmName?: string;
    destinationPenName?: string;
    specificDestinationName?: string;
    vehicleRegistration: string;
  }[];
  vaccines?: {
    vaccinationDate?: string;
    veterinaryName?: string;
    vaccineType?: string;
    vaccineId?: string;
    vaccineLotNo?: string;
    vaccineExpiryDate?: string;
  }[];
  treatmentDate?: string;
  causeOfDeath?: string;
};
