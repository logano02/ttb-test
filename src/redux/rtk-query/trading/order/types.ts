// ---------------------------------- Get order main ------------------------------------

export type TOrderBody = {
  pageNo: number;
  pageSize: number;

  keyword?: string;
  status?: string;
  buyerId?: string;
  deliveryFromDate?: string;
  deliveryToDate?: string;
  cattleTypeIds?: string[];
  cattleBreedIds?: string[];
  requestAmount?: RequestAmount[];
  ages?: Age[];
  weight?: Weight[];
  gender?: string;
  castrationStatus?: string;
  pregnantStatus?: string;
  totalPrices?: TotalPrice[];
  quarantineDay?: number[];
  destinationCountryCode?: string[];
};

export type RequestAmount = {
  from: number;
  to: number;
};

export type Age = {
  from: number;
  to: number;
};

export type Weight = {
  from: number;
  to: number;
};

export type TotalPrice = {
  from: number;
  to: number;
};

// =================================================================================

export type TOrderDataResponse = {
  pageNo: number;
  pageSize: number;
  total: number;
  data: TDataDetailList[];
};

export type TDataDetailList = {
  id: string;
  orderCode: string;
  buyerCompanyName: string;
  receivedAmount: number;
  requestAmount: number;
  deliveryFromDate: string;
  deliveryToDate: string;
  status: string;
  statusId: string;
  destinationCountry: string;
  destinationCountryCode: string;
};

// ---------------------------------- Get order details ------------------------------------

export type TOrderDetailResponse = {
  id: string;
  orderCode: string;
  buyer: TSubBuyer;
  remark: string;
  quarantineDay: number;
  totalPrice: number;
  deliveryFromDate: string;
  deliveryToDate: string;
  deliveryType: string;
  originAddress: string;
  destinationAddress: string;
  destinationCountry: string;
  destinationCountryCode: string;
  totalReceivedAmount: number;
  totalRequestAmount: number;
  status: string;
  statusId: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  orderRequest: TSubOrderRequest[];
  fileAttachments: TSubFileAttachment[];
};

export type TSubBuyer = {
  code: string;
  companyName: string;
  registerDate: string;
};

export type TSubOrderRequest = {
  id: string;
  orderId: string;
  cattleBreed: CattleBreed;
  cattleTypes: CattleType[];
  gender: string;
  pregnantStatus: string;
  requestAmount: number;
  receivedAmount: number;
  deficitAmount: number;
  toAge: number;
  fromAge: number;
  toWeight: number;
  fromWeight: number;
  castrationStatus: string;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type CattleBreed = {
  id: string;
  name: string;
  shortName: string;
  remark: any;
};

export type CattleType = {
  id: string;
  name: string;
};

export type TSubFileAttachment = {
  id: string;
  url: string;
  contentType: string;
};

// ---------------------------------- Get status bar ------------------------------------

export type TStatusBarResponse = {
  total_count: number;
  statuses: TStatus[];
};

export type TStatusBarParams = {
  buyerId?: string;
};

export type TStatus = {
  status: string;
  count: number;
};

// ---------------------------------- Get order detail for edit ------------------------------------

export type TEditOrderDetail = {
  id: string;
  orderCode: string;
  buyer: Buyer;
  remark: string;
  totalPrice: number;
  deliveryFromDate: string;
  deliveryToDate: string;
  deliveryType: string;
  originAddress: string;
  destinationAddress: string;
  destinationCountry: string;
  destinationCountryCode: string;
  totalReceivedAmount: number;
  totalRequestAmount: number;
  status: string;
  statusId: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  orderRequest: TEditOrderRequest[];
  fileAttachments: TEditFileAttachment[];
};

export type Buyer = {
  code: string;
  companyName: string;
  registerDate: string;
};

export type TEditOrderRequest = {
  id: string;
  orderId: string;
  cattleBreed: TEditCattleBreed;
  cattleTypes: TEditCattleType[];
  requestAmount: number;
  receivedAmount: number;
  deficitAmount: number;
  toAge: number;
  fromAge: number;
  toWeight: number;
  fromWeight: number;
  castrationStatus: string;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export type TEditCattleBreed = {
  id: string;
  name: string;
  shortName: string;
  remark: any;
};

export type TEditCattleType = {
  id: string;
  name: string;
};

export type TEditFileAttachment = {
  id: string;
  url: string;
  contentType: string;
};

// ---------------------------------- Body Edit Order ------------------------------------
export type TEditOrderDetailBody = {
  id: string;
  remark: string;
  deliveryFromDate: string;
  deliveryToDate: string;
  deliveryType: string;
  quarantineDay: number;
  totalPrice: number;
  originAddress: string;
  destinationAddress: string;
  orderRequest: TSubOrderRequestBody[];
};

export type TSubOrderRequestBody = {
  id: string;
  cattleBreedId: string;
  cattleTypeIds: string[];
  requestAmount: number;
  fromAgeYear: number;
  fromAgeMonth: number;
  toAgeYear: number;
  toAgeMonth: number;
  fromWeight: number;
  toWeight: number;
  castrationStatus: string;
  gender: string;
  pregnantStatus: string;
};

// ---------------------------------- Download Excel ------------------------------------

export type TDownloadExcelOrder = Omit<TOrderBody, 'pageNo' | 'pageSize'> & {
  ids?: string[];
  language: string;
};
