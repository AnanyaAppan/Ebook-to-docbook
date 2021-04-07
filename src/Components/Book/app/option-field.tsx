import * as React from 'react';
import { Input } from '@material-ui/core';
import { OptionFieldProps } from './types';
import { StyledOptionField, Spacer, StyledIcon } from './styled-components';

function convertLabelToValue(str: string) {
  return str.toLowerCase().replace(/ /g, '_');
}

export function OptionField({
  label,
  onChange,
  onEnter,
  remove,
  isDropdown,
  onDropdownClick,
  options
}: OptionFieldProps) {
  return (
    <StyledOptionField>
      <Input
        placeholder="New option"
        style={{ fontSize: '14px', display: 'block' }}
        onChange={(e) =>
          onChange({
            value: convertLabelToValue(e.target.value),
            label: e.target.value,
            options
          })
        }
        onKeyUp={(e) => e.key === 'Enter' && onEnter()}
        value={label}
      />
      <Spacer />
      <StyledIcon onClick={remove}>delete</StyledIcon>
      {isDropdown && (
        <StyledIcon onClick={label.length ? onDropdownClick : () => null}>
          chevron_right
        </StyledIcon>
      )}
    </StyledOptionField>
  );
}
