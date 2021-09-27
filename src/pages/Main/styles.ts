import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  max-width: 100%;
  width: 800px;
  display: flex;
  background-color: #ffffff;
  flex-flow: wrap;
  margin: 40px 0;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 27px 32px;
  background: #000000;
`;

export const Content = styled.div`
  width: 100%;
  padding: 44px 38px;
`;

export const PostsWrapper = styled.div`
  width: 100%;
  margin-top: 35px;
`;

export const UserTip = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: var(--font);
  font-weight: 700;
  svg {
    margin-left: 10px;
  }
`;
