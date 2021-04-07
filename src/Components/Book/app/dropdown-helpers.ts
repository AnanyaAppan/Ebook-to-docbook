import { DropdownOption } from './types';

export const addDropdownOption = (
  options: DropdownOption[] = [],
  path: number[]
): DropdownOption[] => {
  if (path.length === 0) {
    const emptyOption = {
      label: '',
      value: '',
      options: []
    };

    return [...options, emptyOption];
  }

  const index = path[0];
  const optionToTraverse = options[index];

  return [
    ...options.slice(0, index),
    {
      ...optionToTraverse,
      options: addDropdownOption(optionToTraverse.options, path.slice(1))
    },
    ...options.slice(index + 1)
  ];
};

export const removeDropdownOption = (
  options: DropdownOption[] = [],
  path: number[],
  indexToRemove: number
): DropdownOption[] => {
  if (path.length === 0) {
    return [
      ...options.slice(0, indexToRemove),
      ...options.slice(indexToRemove + 1)
    ];
  }

  const index = path[0];
  const optionToTraverse = options[index];

  return [
    ...options.slice(0, index),
    {
      ...optionToTraverse,
      options: removeDropdownOption(
        optionToTraverse.options,
        path.slice(1),
        indexToRemove
      )
    },
    ...options.slice(index + 1)
  ];
};

export const updateDropdownOption = (
  options: DropdownOption[] = [],
  path: number[],
  indexToUpdate: number,
  payload: DropdownOption
): DropdownOption[] => {
  if (path.length === 0) {
    return [
      ...options.slice(0, indexToUpdate),
      payload,
      ...options.slice(indexToUpdate + 1)
    ];
  }

  const index = path[0];
  const optionToUpdate = options[index];

  return [
    ...options.slice(0, index),
    {
      ...optionToUpdate,
      options: updateDropdownOption(
        optionToUpdate.options,
        path.slice(1),
        indexToUpdate,
        payload
      )
    },
    ...options.slice(index + 1)
  ];
};
