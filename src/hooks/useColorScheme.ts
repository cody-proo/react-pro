import { useContext } from 'react';
import { ColorSchemeContext } from '../context/ColorSchemeContext';

export const useColorScheme = () => {
 const { colorScheme, setColorScheme } = useContext(
  ColorSchemeContext
 )!;

 return {
  colorScheme,
  setColorScheme,
 };
};
