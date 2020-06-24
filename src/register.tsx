import * as React from 'react';
import { addons, types } from '@storybook/addons';
import { CustomPropertySelector } from './Tool';
import { ADDON_ID } from './constants';

addons.register(ADDON_ID, api => {
  addons.add(ADDON_ID, {
    title: 'Color',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => (
      <CustomPropertySelector api={api} />
    ),
  });
});
