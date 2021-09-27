import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #ffffff;
  flex-flow: wrap;
  margin-bottom: 45px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 24px 30px;
  background: #000000;
  display: flex;
  justify-content: space-between;
`;

export const ActionWrapper = styled.div`
  display: flex;
  svg {
    :first-child {
      margin-right: 25px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 23px 30px;
  display: flex;
  flex-flow: column;
  border: 1px solid #999999;
  border-top: none;
  p {
    font-family: var(--font);
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    margin-top: 18px;
    line-height: 21px;
    white-space: pre-wrap;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: var(--font);
  font-size: 18px;
  color: #777777;
  label {
    font-weight: 700;
  }
  span {
    font-weight: 400;
  }
`;