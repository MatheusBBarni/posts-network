import styled, { css } from 'styled-components';

type ButtonProps = {
  variant: 'normal' | 'inside_out'
}

const buttonModifier = {
  normal: css`
    background-color: #000000;
    color: #ffffff;
    font-weight: 700;
  `,
  inside_out: css`
    background-color: #ffffff;
    color: #000000;
    font-weight: 400;
    border: 1px solid #000000;
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => css`
    width: 111px;
    height: 33px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--font);
    font-size: 16px;

    ${buttonModifier[variant]};

    :hover {
      transform: scale(1.01);
    }
  `}
`;
