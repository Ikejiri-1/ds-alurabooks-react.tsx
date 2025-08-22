import React from 'react';
import styled, { css } from 'styled-components';

export interface AbButtonProps {
  text?: string;
  styletype?: 'primary' | 'secondary';
  onClick?: () => void;
}

const StyledButton = styled.button<AbButtonProps>`
  background: ${(props: AbButtonProps) =>
    props.styletype === 'primary' ? '#eb9b00' : '#fff'};
  color: ${(props: AbButtonProps) =>
    props.styletype === 'primary' ? '#fff' : '#eb9b00'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  ${(props: AbButtonProps) =>
    props.styletype === 'primary'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color #b87900;
          }
        `}
`;
export function AbButton({
  text,
  styletype = 'primary',
  onClick,
}: AbButtonProps) {
  return (
    <StyledButton onClick={onClick} styletype={styletype}>
      {text}
    </StyledButton>
  );
}
