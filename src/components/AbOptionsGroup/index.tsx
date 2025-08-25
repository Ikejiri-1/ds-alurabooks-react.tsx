import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section<{ selected: boolean }>`
  width: 194px;
  height: 88px;
  background: ${props =>
    props.selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#fff'};
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-direction: column;
  border: 1px solid;
  border-color: ${props => (props.selected ? ' #002F52' : '#EB9B00')};
  border-radius: 8px;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${props => (props.selected ? ' #fff' : '#EB9B00')};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${props => (props.selected ? ' #fff' : '#EB9B00')};
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${props => (props.selected ? ' #fff' : 'rgba(0, 0, 0, 0.54);')};
    font-size: 12px;
    font-weight: 400;
  }
`;

export interface AbOptions {
  id: number;
  title: string;
  price: string;
  footer: string;
  selected: boolean;
}

export interface AbOptionsProps {
  options: AbOptions[];
  defaultValue?: AbOptions | null;
  onChange?: (option: AbOptions) => void;
}

function AbOptionGroup({ options, onChange, defaultValue }: AbOptionsProps) {
  const [select, setSelect] = useState<AbOptions | null>(defaultValue ?? null);

  function whenSelect(option: AbOptions): void {
    setSelect(option);
    if (onChange) {
      onChange(option);
    }
  }
  return (
    <>
      {options.map(option => (
        <StyledSection
          onClick={() => whenSelect(option)}
          key={option.id}
          selected={select?.id == option.id}
        >
          <header>{option.title}</header>
          <div>
            <strong>{option.price}</strong>
          </div>
          <footer>{option.footer}</footer>
        </StyledSection>
      ))}
    </>
  );
}

export { AbOptionGroup };
