import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tags from '../src/components/Tags';

export default {
  title: 'componentes/Tags',
  component: Tags,
} as ComponentMeta<typeof Tags>;

// const Template: ComponentStory<typeof Tags> = args => <Tags {...args} />;
export const TagsComponent = () => {
  return <Tags></Tags>;
};
