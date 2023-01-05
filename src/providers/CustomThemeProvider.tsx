import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, defaultTheme } from '../core/theme';
import { useColorScheme } from '../hooks/useColorScheme';
import { CssBaseline } from '@mui/material';

const CustomThemeProvider: FC<{
 children: ReactNode;
}> = ({ children }) => {
 const { colorScheme } = useColorScheme();
 return (
  <ThemeProvider
   theme={colorScheme === 'light' ? defaultTheme : darkTheme}
  >
   <CssBaseline />
   {children}
  </ThemeProvider>
 );
};

export default CustomThemeProvider;
