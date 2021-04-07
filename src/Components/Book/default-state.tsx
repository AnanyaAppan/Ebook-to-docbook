import { Classification, ClassificationFieldType } from './app/types';

type State = {
  answer: [];
  dropdownPath: number[];
  classification: Classification;
};

export const defaultState: State = {
  answer: [],
  dropdownPath: [0],
  classification: {
    name: 'Root',
    instructions: 'Make a Selection',
    type: ClassificationFieldType.dropdown,
    options: [
      {
        value: 'root',
        label: 'Root',
        options: [
          {
            value: 'red',
            label: 'Red',
            options: [
              {
                label: 'Pinot Noir',
                value: 'pinot_noir',
                options: []
              },
              {
                label: 'Cabernet',
                value: 'cabernet',
                options: []
              },
              {
                label: 'Merlot',
                value: 'merlot',
                options: []
              }
            ]
          },
          {
            value: 'white',
            label: 'White',
            options: [
              {
                label: 'Chardonnay',
                value: 'chardonnay',
                options: []
              },
              {
                label: 'Pinot Grigio',
                value: 'pinot_grigio',
                options: []
              },
              {
                label: 'Riesling',
                value: 'riesling',
                options: []
              }
            ]
          }
        ]
      }
    ]
  }
};
