export type TResponseGetCattleBreed = {
  breeds: TBreed[];
  types: Type[];
};

export type TBreed = {
  id: string;
  nameTh: string;
  nameEn: string;
  shortName: string;
  remark: any;
};

export type Type = {
  id: string;
  nameTh: string;
  nameEn: string;
};

// ----------------------------------------------------------------------
