// ---------------------------------- Get order main ------------------------------------

export type TParamsCowPen = {
  farmId: string;
  pageNo: number;
  pageSize: number;
  keyword?: string;
  status?: string;
  penType?: string[];
};

export type TCowPenResponse = {
  pageNo: number;
  pageSize: number;
  total: number;
  data: TSubDataCowPen[];
};

export type TSubDataCowPen = {
  id: string;
  farmId: string;
  penType: string;
  penNumber: string;
  capacity: number;
  name: string;
  wa: number;
  latitude: number;
  longitude: number;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

// ---------------------------------- Get Cow pen details ------------------------------------

export type TCowpenDetailResponse = {
  Id: string;
  farmId: string;
  penType: string;
  penNumber: string;
  capacity: number;
  name: string;
  wa: number;
  latitude: number;
  longitude: number;
  status: string;
  fileAttachments: TSubFileAttachments[];
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type TSubFileAttachments = {
  id: string;
  url: string;
  contentType: string;
  description: null;
};

// ---------------------------------- Create cow pen body ------------------------------------

export type TCreateCowPenBody = {
  farmId: string;
  penType: string;
  penNumber: string;
  capacity: number;
  name: string;
  wa: number;
  latitude: number;
  longitude: number;
};

// ---------------------------------- Edit cow pen body ------------------------------------

export type TUpdateCowPenBody = TCreateCowPenBody & {
  id: string;
};
