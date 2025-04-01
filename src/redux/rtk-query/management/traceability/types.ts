// =========================== Create Traceability ===========================

export type TCreateTraceabilityBody = {
  reason: string;
  documentNo: string;
  originFarmId: string;
  originPenId: string;
  destinationFarmId?: string | null;
  destinationPenId?: string | null;
  specificDestinationName?: string | null;
  destinationProvince?: string | null;
  shipmentDate: string;
  estimatedArrivalDate: string;
  destinationType: string;
  vehicleType: string;
  vehicleRegistration: string;
  transportCompanyName: string;
  driverTitle: string;
  driverFirstName: string;
  driverMiddleName?: string | null;
  driverLastName: string;
  contactTitle?: string | null;
  contactFirstName?: string | null;
  contactMiddleName?: string | null;
  contactLastName?: string | null;
  contactPhone: string;
  isContractSameDriver: boolean;
  cattleIds: string[];
};

// =========================== Body get traceability  ===========================

export type TGetTraceabilityBody = {
  pageNo: number;
  pageSize: number;

  keyword?: string;
  reason?: string[];
  shipmentDate?: string;
  estimatedArrivalDate?: string;
  vehicleType?: string[];
  originProvince?: string[];
  destinationProvince?: string[];
  status?: string[];
  penId?: string;
};

// =========================== Response status bar main pages ===========================

export type TStatusBarResponse = {
  totalCount: number;
  statuses: TSubStatus[];
};

export type TSubStatus = {
  status: string;
  count: number;
};

// =========================== Response get traceability list ===========================

export type TListTraceabilityResponse = {
  pageNo: number;
  pageSize: number;
  total: number;
  data: TSubTraceability[];
};

export type TSubTraceability = {
  id: string;
  documentNo: string;
  reason: string;
  totalAnimal: number;
  originFarmId: string;
  originFarmName: string;
  originPenId: string;
  originPenName: string;
  originProvince: string;
  destinationFarmId?: string;
  destinationFarmName?: string;
  destinationPenId?: string;
  destinationPenName?: string;
  specificDestinationName?: string;
  destinationProvince: string;
  vehicleType: string;
  vehicleRegistration: string;
  transportCompanyName: string;
  driverFirstName: string;
  driverMiddleName: string | null;
  driverLastName: string;
  contactFirstName: string;
  contactMiddleName: string | null;
  contactLastName: string;
  contactPhone: string;
  isContractSameDriver: boolean;
  shipmentDate: string;
  estimatedArrivalDate: string;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

// =========================== Response get tracability detail ===========================

export type TTracabilityDetailResponse = {
  id: string;
  reason: string;
  documentNo: string;
  totalAnimal: number;
  originFarmId: string;
  originPenId: string;
  destinationFarmId: string | null;
  destinationPenId: string | null;
  specificDestinationName: string;
  destinationProvince: string;
  shipmentDate: string;
  estimatedArrivalDate: string;
  destinationType: '' | 'FARM_PEN' | 'MEDICAL_FACILITY' | 'TRANSPORT_TERMINAL' | 'OTHER';
  status: string;
  vehicle: TSubVehicle[];
  cattleIds: string[];
  statuses: TSubStatusDetail[];
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;

  originFarmName: string;
  originProvince: string;
  originPenName: string;

  destinationFarmName: string;
  destinationPenName: string;
};

export type TSubVehicle = {
  id: string;
  traceabilityId: string;
  vehicleType: string;
  vehicleRegistration: string;
  transportCompanyName: string;
  driverTitle: string;
  driverFirstName: string;
  driverMiddleName: string | null;
  driverLastName: string;
  contactTitle: string;
  contactFirstName: string;
  contactMiddleName: string | null;
  contactLastName: string;
  contactPhone: string;
  isContractSameDriver: boolean;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type TSubStatusDetail = {
  status: string;
  createdAt: string;
};

// =========================== Body edit tracability ===========================

export type TEditTraceabilityBody = {
  id: string;
  reason: string;
  documentNo: string;
  originFarmId: string;
  originPenId: string;
  destinationFarmId: string | null;
  destinationPenId: string | null;
  specificDestinationName: string | null;
  destinationProvince: string | null;
  shipmentDate: string;
  estimatedArrivalDate: string;
  destinationType: string;
  vehicle: TSubEditVehicle;
  cattleIds: string[];
};

export type TSubEditVehicle = {
  id: string;
  vehicleType: string;
  vehicleRegistration: string;
  transportCompanyName: string;
  driverTitle: string;
  driverFirstName: string;
  driverMiddleName: string | null;
  driverLastName: string;
  contactTitle: string | null;
  contactFirstName: string | null;
  contactMiddleName: string | null;
  contactLastName: string | null;
  contactPhone: string | null;
  isContractSameDriver: boolean;
};

// =========================== Body change status traceability ===========================

export type TChangeStatusBody = {
  traceabilityId: string;
  status: string;
};

// =========================== Body add vehicle  ===========================

export type GeneralVehicleTypes = {
  vehicleType: string;
  vehicleRegistration: string;
  transportCompanyName: string;
  driverTitle: string;
  driverFirstName: string;
  driverMiddleName: string | null;
  driverLastName: string;
  contactTitle: string | null;
  contactFirstName: string | null;
  contactMiddleName: string | null;
  contactLastName: string | null;
  contactPhone: string;
  isContractSameDriver: boolean;
};

export type TAddVehicleBody = GeneralVehicleTypes & {
  traceabilityId: string;
};

export type TEditVehicleBody = GeneralVehicleTypes & {
  id: string;
};

// =========================== Body cow dead during sent ===========================

export type TCowDeadBody = {
  traceabilityId: string;
  cattleIds: string[];
};

// =========================== Count Cattle Trace ===========================

type CowStatus = {
  farmId: string;
  isTracing: boolean;
  penId: string;
  traceabilityId: string;
  isTraceabilityUpdate: boolean;
};

export type TCowStatusBody = Partial<CowStatus>;

// =========================== Body post export excel  ===========================

export type TExportExcelTraceabilityBody = {
  language: string;
  ids?: string[];
};
