import type { OptionItem } from '@/types';
import { BaseStore } from './base';

export const arrayStore = new BaseStore<OptionItem[]>([
  { value: '1', label: 'test1', disabled: false },
  { value: '2', label: 'test2', disabled: false },
]);
