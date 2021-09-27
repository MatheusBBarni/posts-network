import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInForm = styled.form`
  width: 500px;
  height: 220px;
  display: flex;
  flex-flow: wrap column;
  background-color: #ffffff;
  border: 1px solid #CCCCCC;
  padding: 28px 32px;
  padding-bottom: 0;
  
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box; 
  box-sizing: border-box;  
`;

export const SignInFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
