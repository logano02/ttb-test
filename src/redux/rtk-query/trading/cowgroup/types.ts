// =========================== Body get cow List b ===========================

export type TCowGroupListBody = {
  orderRequestId: string;
  farmId: string;

  keyword?: string;
  keywords?: string[];
};

// =========================== Cow List Response ===========================

export type TCowGroupListResponse = {
  data: TSubDataResponse[];
};

export type TSubDataResponse = {
  id: string;
  tracerId: string;
  cattleTypeId: string;
  cattleBreedIds: string[];
  nid: string;
  gender: string;
  birthdate: string;
  weight: number;
  tracerTag: string;
  castrationStatus: string;
  pregnantStatus: string;
  vaccine: unknown[];
  status: string;
};

// =========================== Create cow group in order ===========================

export type TCreateCowGroupBody = {
  orderRequestId: string;
  farmSourcingId: string;
  cattleids: string[];
};

// =========================== Body get farmsourcing ===========================

export type TBodyDataSourcingCowGroup = {
  farmSourcingId: string;
  pageNo?: number;
  pageSize?: number;
  keyword?: string;
  keywords?: string[];
};

export type TCowGroupSourcing = {
  pageNo: number;
  pageSize: number;
  total: number;
  data: TSubGroupSourcing[];
};

export type TSubGroupSourcing = {
  Id: string;
  orderId: string;
  orderRequestId: string;
  farmSourcingId: string;
  cattleId: string;
  farmId: string;
  tracerId: string;
  penId: string;
  cattleBreedId: string[];
  cattleTypeIds: string;
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
  vaccine: any[];
  earTag: any[];
  isSourcing: boolean;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;

  traceabilityId: string;
  status: string;
  latestTraceabilityStatus: string;
};

// =========================== Get response statuses ===========================

export type TStatusesCowgroup = {
  totalCount: number;
  statuses: TSubStatus[];
};

export type TSubStatus = {
  status: string;
  count: number;
};
