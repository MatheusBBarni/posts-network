import React from 'react';

import { Container, Input, Label, Textarea } from './styles';

export type TextFieldProps = {
  label: string
  rows?: number
  value: string
  placeHolder?: string
  type: 'input' | 'textarea'
  onChange: (value: string) => void
}

const TextField = ({
  type,
  rows,
  label,
  value,
  onChange,
  placeHolder
}: TextFieldProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      {type === 'input' && (
        <Input
          value={value}
          placeholder={placeHolder}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {type === 'textarea' && (
        <Textarea
          rows={rows}
          value={value}
          placeholder={placeHolder}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </Container>
  );
}

export default TextField;