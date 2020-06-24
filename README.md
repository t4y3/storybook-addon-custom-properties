# Storybook Custom Properties Addon

Storybook Custom Properties Addon allows you to set a Custom Properties in the Preview Area. This helps to change the style of the Storybook via Custom Properties.

## Installation

Install the following npm module:

```sh
npm i --save-dev storybook-addon-custom-properties
```

within `.storybook/main.js`:

```js
module.exports = {
  addons: ['storybook-addon-custom-properties/register'],
};
```

## Configuration

Configured by story parameters with the `custom-properties` key. 

```js
import { withCustomProperties } from 'storybook-addon-custom-properties';

addParameters({
  'custom-properties': {
    label: 'Theme',
    list: [
      { '--somekeyword': 'left' },
      { '--somecolor': '#0000ff' },
      { '--somecomplexvalue': '3px 6px rgb(20, 32, 54)' }, 
    ]
  }
});

addDecorator(withCustomProperties);
```

## TODO
- Doc
- Ts
- formatter
