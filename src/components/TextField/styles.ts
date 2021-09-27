import styled, { css } from 'styled-components';

const TextFieldCss = css`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #777777;
  padding: 6px 11px;
  color: #000000;

  ::placeholder {
    color: #cccccc;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-family: var(--font);
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 13px;
`;

export const Input = styled.input`
  ${TextFieldCss};
`;

export const Textarea = styled.textarea`
  ${TextFieldCss};
`;
