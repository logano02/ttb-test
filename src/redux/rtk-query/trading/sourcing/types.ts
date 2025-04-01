// ---------------------------------- Get farmsourcing detail ----------------------------------

export type TFarmSourcingResponse = {
  orderId: string;
  orderRequestId: string;
  data: TSubFarmSourcing[];
};

export type TSubFarmSourcing = {
  farmId: string;
  farmTracerId: string;
  farmName: string;
  addressProvince: string;
  total: number;
};

// ---------------------------------- Get farmsourcing detail ----------------------------------

export type TDetailFarmSourcing = {
  totalCount: number;
  statuses: TSubStatus[];
  data: TSubDataFarmSourcing[];
};

export type TSubDataFarmSourcing = {
  Id: string;
  orderId: string;
  orderRequestId: string;
  farmId: string;
  farmIdentification: string;
  name: string;
  addressProvince: string;
  farmAmount: number;
  amount: number;
  status: 'SUPPLY' | 'DONE';
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type TSubStatus = {
  status: string;
  count: number;
};

// ---------------------------------- Create farmsourcing ----------------------------------

export type TBodyCreateFarmSourcing = {
  orderRequestId: string;
  data: TSubCreateFarmSourcing[];
};

export type TSubCreateFarmSourcing = {
  farmId: string;
  amount: number;
};

// ---------------------------------- Edit farmsourcing ----------------------------------

export type TBodyUpdateFarmSourcing = {
  orderRequestId: string;
  data: TSubUpdateFarmSourcing[];
};

export type TSubUpdateFarmSourcing = TSubCreateFarmSourcing & {
  id: string;
};
