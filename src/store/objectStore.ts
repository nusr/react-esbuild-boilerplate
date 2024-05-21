import { BaseStore } from './base';

export type CellStoreType = {
  row: number;
  col: number;
  rowCount: number;
  colCount: number;
};

const cellData: CellStoreType = {
  row: 0,
  col: 0,
  rowCount: 0,
  colCount: 0,
};

export const objectStore = new BaseStore<CellStoreType>(cellData);
