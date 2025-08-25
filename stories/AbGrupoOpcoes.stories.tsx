import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbOptionGroup, AbOptionsProps } from '../src';

export default {
  title: 'Components/AbOptionGroup',
  component: AbOptionGroup,
} as ComponentMeta<typeof AbOptionGroup>;

const Template: ComponentStory<typeof AbOptionGroup> = args => (
  <AbOptionGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      price: 'R$ 19,90',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Impresso',
      price: 'R$ 19,90',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'Impresso + E-book',
      price: 'R$ 19,90',
      footer: '.pdf, .epub, .mob',
    },
  ],
} as AbOptionsProps;
