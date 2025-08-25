import styled from 'styled-components';
import React from 'react';
import { AbButton } from '../AbButton';

const TagsSection = styled.div`
  background: linear gradient(to right, #210374ff, #3761a0ff);
`;
const TagsList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Tags() {
  const list = [
    'Android',
    'OO',
    'Marketing Digital',
    'Agile',
    'Startups',
    'HTML & CSS',
    'Java',
    'Python',
  ];
  return (
    <TagsSection>
      <TagsList>
        {list.map(tag => (
          <li>
            <AbButton styletype="primary" text={tag} />
          </li>
        ))}
      </TagsList>
    </TagsSection>
  );
}

export default Tags;
