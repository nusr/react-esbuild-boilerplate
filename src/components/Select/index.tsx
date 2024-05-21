import React, {
  CSSProperties,
  FunctionComponent,
  memo,
  useCallback,
} from 'react';
import { classnames } from '@/util';
import { OptionItem } from '@/types';
import styles from './index.module.css';

export interface SelectProps {
  value?: string | number;
  defaultValue?: string | number;
  data: Array<string | number | OptionItem>;
  getItemStyle?: (value: string | number) => CSSProperties;
  onChange: (value: string | number) => void;
  title?: string;
  className?: string;
  testId?: string;
}

export const Select: FunctionComponent<SelectProps> = memo((props) => {
  const {
    data,
    value: activeValue,
    className,
    onChange,
    getItemStyle,
    title,
    defaultValue,
    testId,
  } = props;
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value);
    },
    [],
  );

  return (
    <select
      onChange={handleChange}
      value={activeValue}
      defaultValue={defaultValue}
      name="select"
      className={classnames(styles.selectList, className)}
      title={title}
      data-testid={testId}
    >
      {data.map((item) => {
        const value = typeof item === 'object' ? item.value : item;
        const label = typeof item === 'object' ? item.label : item;
        const disabled = typeof item === 'object' ? item.disabled : false;
        let itemStyle = undefined;
        if (typeof getItemStyle === 'function') {
          itemStyle = getItemStyle(value);
        }
        return (
          <option
            key={value}
            value={value}
            disabled={!!disabled}
            className={classnames(styles.selectItem, {
              [styles['disabled']]: disabled,
            })}
            style={itemStyle}
          >
            {label}
          </option>
        );
      })}
    </select>
  );
});
Select.displayName = 'Select';
