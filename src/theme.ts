import { createTheme, MantineColorsTuple } from '@mantine/core';

const greenColor: MantineColorsTuple = [
  '#f5f9f1',
  '#e9f0e2',
  '#d0e0c0',
  '#b5cf9c',
  '#9ec07c',
  '#8fb768',
  '#88b35c',
  '#759d4c',
  '#678b43',
  '#577835',
];

const redColor: MantineColorsTuple = [
  '#feedeb',
  '#f8d7d3',
  '#f5aaa3',
  '#f37c6e',
  '#f35542',
  '#f23e26',
  '#f33219',
  '#d8260f',
  '#c01f0b',
  '#a81505',
];

const grayColor: MantineColorsTuple = [
  '#f5f5f5',
  '#e7e7e7',
  '#cdcdcd',
  '#b2b2b2',
  '#9a9a9a',
  '#8b8b8b',
  '#848484',
  '#717171',
  '#656565',
  '#575757',
];

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    greenColor,
    redColor,
    grayColor,
  },
});
