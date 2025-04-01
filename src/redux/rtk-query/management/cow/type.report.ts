import type { Locales } from 'src/report/constant';

import type { TResponseGetCattleBreed } from '../../master/types';
import type { THealth, TVaccination } from './types.health-vaccination';
import type { TCowDetail, TCertificate, TTraceHistory } from './types.cow';

export type TReportList = {
  cow: TCowDetail | undefined;
  master: TResponseGetCattleBreed | undefined;
  health: THealth[];
  vaccine: TVaccination[];
  breed: string;
  chartBase64: string;
  trace: TTraceHistory[];
  traceHistoryBase64: string;
  locales: Locales;
};

export type TReportListFromQR = {
  master: TCertificate | undefined;
  locales: Locales;
  breed: string;
};

export type TValueList = {
  health: string[][];
  vaccine: string[][];
  trace: string[][];
};
