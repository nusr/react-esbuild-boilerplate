export type ThemeType = 'dark' | 'light';

export type LanguageType = 'en' | 'zh';

export interface OptionItem {
  value: string | number;
  label: string;
  disabled: boolean;
}