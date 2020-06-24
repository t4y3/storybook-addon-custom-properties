import * as React from 'react';
import { useParameter } from '@storybook/api';
import { IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { PARAM_KEY, EVENTS } from './constants';
import { Link } from "@storybook/components/ts3.5/dist/tooltip/TooltipLinkList";

type Item = {
  id: string,
  name: string,
  value: string,
}

type Parameter = {
  label: string,
  list: Item[]
}

const getDisplayedItems =
  (
    list: Item[],
    change: (name: string) => void,
  ): Link[] => {
    return list.map(item => {
      const { id, name, value } = item;
      return {
        id: id || name,
        title: name,
        onClick: () => {
          change(name);
        },
        value,
        right: null
      }
    });
  };

export const CustomPropertySelector = ({ api }: any) => {

  const { label, list } = useParameter<Parameter>(PARAM_KEY, { label: '', list: [] });

  console.warn(44444444, label, list);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={getDisplayedItems(list, (name: string): void => {
            const target = list.filter((item: Item) => item.name === name)[0];
            api.emit(EVENTS.UPDATE, target);
            onHide();
          })}
        />
      )}
      closeOnClick
    >
      <IconButton
        key=""
        active={true}
        title="Change the Custom Property"
      >
        <div>{label}</div>
      </IconButton>
    </WithTooltip>
  )
};
