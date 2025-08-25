// stories/Card.stories.tsx

import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Card from '../src/components/Card';

export default {
  title: 'componentes/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent = () => {
  return <Card></Card>;
};
