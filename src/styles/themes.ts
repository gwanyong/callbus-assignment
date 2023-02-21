import baseStyled, { ThemedStyledInterface } from 'styled-components';

const color = {
  white: '#ffffff',
  blue: '#2C7FFF',
  red: '#E85440',
  grey: '#B4B4B4',
  black: '#222222',
};

const themes = {
  color,
};

export type Theme = typeof themes;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default themes;
