import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbFieldText, FieldTextProps } from '../src';

export default {
  title: 'componentes/AbFieldText',
  component: AbFieldText,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbFieldText>;

const Template: ComponentStory<typeof AbFieldText> = args => (
  <AbFieldText {...args} />
);

export const AbFieldTextComponent = Template.bind({});
AbFieldTextComponent.args = {
  label: 'Uma label interessante',
  placeholder: 'Insira seu melhor Email',
} as FieldTextProps;
