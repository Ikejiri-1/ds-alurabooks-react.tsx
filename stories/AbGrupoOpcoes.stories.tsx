import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbGrupoOpcoes } from '../src';

export default {
  title: 'Components/AbGrupoOpcoes',
  component: AbGrupoOpcoes,
} as ComponentMeta<typeof AbGrupoOpcoes>;

const Template: ComponentStory<typeof AbGrupoOpcoes> = args => (
  <AbGrupoOpcoes />
);

export const Default = Template.bind({});

Default.args = {};
