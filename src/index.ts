/* eslint-disable import/prefer-default-export */
import { addons, makeDecorator } from '@storybook/addons';
import { EVENTS, PARAM_KEY } from './constants';

const state = {
  initialized: false,
  name: ''
};

const setCustomProperty = (name: string, value: string) => {
  const { style } = document.body;
  style.setProperty(name, value);
};

const removeCustomProperty = (name: string) => {
  const { style } = document.body;
  style.removeProperty(name);
};

const setStyle = (payload) => {
  Object.entries(payload.properties).forEach((property: []) => {
    const [ name, value ] = property;
    setCustomProperty(name, value);
  });
};

const handleUpdate = (payload) => {
  setStyle(payload);
};

const render = (settings, storyFn) => {
  const { parameters } = settings;
  const channel = addons.getChannel();

  if (!state.initialized) {
    state.initialized = true;
    setStyle(parameters.list[0]);
    channel.on(EVENTS.UPDATE, handleUpdate);
  }

  return storyFn();
};

const wrapper = (getStory, context, settings) => (
  render(settings, () => getStory(context))
);

export const withCustomProperties = makeDecorator({
  name: 'withCustomProperties',
  parameterName: PARAM_KEY,
  allowDeprecatedUsage: true,
  skipIfNoParametersOrOptions: true,
  wrapper,
});
