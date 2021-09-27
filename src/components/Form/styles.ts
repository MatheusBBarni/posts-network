import styled from 'styled-components';

type FormContainerProps = {
  width?: string;
}

export const FormContainer = styled.form<FormContainerProps>`
  width: ${({ width }) => width || '500px'};
  min-height: 220px;
  display: flex;
  flex-flow: wrap column;
  background-color: #ffffff;
  border: 1px solid #CCCCCC;
  padding: 28px 32px;
  
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box; 
  box-sizing: border-box;  
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
