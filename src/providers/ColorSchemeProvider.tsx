import { FC, ReactNode, useEffect, useState } from 'react';
import { ColorSchemeContext } from '../context/ColorSchemeContext';
import { DEFAULT_THEME } from '../core/theme/constants';

const defaultTheme = window.localStorage.getItem(
 DEFAULT_THEME
) as any;

const ColorSchemeProvider: FC<{ children: ReactNode }> = ({
 children,
}) => {
 const [colorScheme, setColorScheme] = useState<'dark' | 'light'>(
  defaultTheme || 'light'
 );
 useEffect(() => {
  window.localStorage.setItem(DEFAULT_THEME, colorScheme);
  window.document.body.classList.add(colorScheme);
 }, [colorScheme]);
 return (
  <ColorSchemeContext.Provider
   value={{ colorScheme, setColorScheme }}
  >
   {children}
  </ColorSchemeContext.Provider>
 );
};

export default ColorSchemeProvider;
