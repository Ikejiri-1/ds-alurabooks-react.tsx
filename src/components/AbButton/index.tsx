import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #eb9b00;
  color: #fff;
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #b87900;
    border: 2px solid #b87900;
  }
`;
export function AbButton() {
  return <StyledButton>Clique aqui!</StyledButton>;
}
