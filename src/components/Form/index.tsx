import React, { FormEvent } from 'react';
import { Button } from '../Button';
import Title from '../Title';

import { FormContainer, FormFooter } from './styles';

export type FormProps = {
  width?: string;
  title: string;
  buttonText: string;
  buttonDisabled?: boolean;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({
  width,
  title,
  onSubmit,
  buttonText,
  buttonDisabled,
  children
}) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <FormContainer onSubmit={handleSubmit} width={width}>
      <Title marginBottom="30px">{title}</Title>
      {children}
      <FormFooter>
        <Button variant="normal" type="submit" disabled={buttonDisabled}>
          {buttonText}
        </Button>
      </FormFooter>
    </FormContainer>
  );
}

export default Form;