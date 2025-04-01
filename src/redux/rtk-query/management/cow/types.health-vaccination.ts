import type { TStatusResponse } from '../../types';

// ----------------------------------------------------------------------

export type THealthBody = {
  cattleId: string;
  type: 'HEALTH' | 'VACCINATION';
  treatmentDate: string;
  veterinaryName?: string;
  healthCondition: string;
  symptom?: string;
  causeOfDeath?: string;
  treatment?: string;
  drugName?: string;
  dosage?: number;
  periodResidue?: string;
};

// ----------------------------------------------------------------------

export type TCreateEditHealthVaccinationBody = {
  id?: string;
  cattleId: string;
  type: 'HEALTH' | 'VACCINATION';

  // health
  treatmentDate?: string;
  veterinaryName?: string;
  healthCondition?: string;
  symptom?: string;
  causeOfDeath?: string;
  treatment?: string;
  drugName?: string;
  dosage?: number;
  periodResidue?: string;

  // vaccination
  vaccinationDate?: string;
  vaccineType?: string;
  remark?: string;
  vaccineId?: string;
  vaccineLotNo?: string;
  vaccineExpiryDate?: string;
};

// ----------------------------------------------------------------------
// GET HEALTH

export type TGetHealthBody = {
  cattleId: string;
  pageNo: number;
  pageSize: number;
  keyword?: string;
  treatmentDate?: string;
  health?: string;
};

export type TGetHealthResponse = TStatusResponse & {
  total: number;
  pageSize: number;
  pageNo: number;
  data: THealth[];
};

export type THealth = {
  id: string;
  cattleId: string;
  treatmentDate: string;
  veterinaryName: string;
  symptom: string;
  treatment: string;
  drugName: string;
  dosage: number;
  periodResidue: string;
  causeOfDeath: string;
  healthCondition: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

// ----------------------------------------------------------------------
// GET VACCINATION

export type TGetVaccinationBody = {
  cattleId: string;
  pageNo: number;
  pageSize: number;
  keyword?: string;
  vaccinationDate?: string;
  vaccinationType?: string;
};

export type TGetVaccinationResponse = TStatusResponse & {
  total: number;
  pageSize: number;
  pageNo: number;
  data: TVaccination[];
};

export type TVaccination = {
  id: string;
  cattleId: string;
  vaccinationDate: string;
  veterinaryName: string;
  vaccineType: string;
  remark: string;
  vaccineId: string;
  vaccineLotNo: string;
  vaccineExpiryDate: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

// ----------------------------------------------------------------------
// GET HEALTH & VACCINATION

export type TDeleteHealthVaccinationParams = {
  type: 'HEALTH' | 'VACCINATION';
  cattleId: string;
  id: string;
};
