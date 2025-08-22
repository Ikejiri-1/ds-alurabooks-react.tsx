import React from 'react';
import styled, { css } from 'styled-components';

export interface AbButtonProps {
  text?: string;
  styleType?: 'primary' | 'secondary';
  onCLick?: () => void;
}

const StyledButton = styled.button<AbButtonProps>`
  background: ${(props: AbButtonProps) =>
    props.styleType === 'primary' ? '#eb9b00' : '#fff'};
  color: ${(props: AbButtonProps) =>
    props.styleType === 'primary' ? '#fff' : '#eb9b00'}
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  font-size: 20px;
  cursor: pointer;
  color: ${(props: AbButtonProps) =>
    props.styleType === 'primary'
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
  styleType = 'primary',
  onCLick,
}: AbButtonProps) {
  return (
    <StyledButton onClick={onCLick} styleType={styleType}>
      {text}
    </StyledButton>
  );
}
