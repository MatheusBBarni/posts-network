import styled, { css } from 'styled-components';

type TitleProps = {
  color?: string
  marginBottom?: string
}

const Title = styled.h1<TitleProps>`
  ${({ color = '#000000', marginBottom = '0px' }) => css`
    color: ${color};
    font-family: var(--font);
    font-weight: 700;
    font-size: 22px;
    margin-bottom: ${marginBottom};
  `}
`;

export default Title;
