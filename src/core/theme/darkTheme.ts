import { colors, createTheme } from '@mui/material';

export const darkTheme = createTheme({
 typography: { fontFamily: 'roboto' },
 components: {
  MuiButton: {
   styleOverrides: { root: { textTransform: 'capitalize' } },
  },
  MuiCssBaseline: {
   styleOverrides: {
    body: {
     backgroundColor: colors.grey[900],
     color: colors.grey[100]
    },
   },
  },
 },
 palette: {
  primary: { main: '#111' },
 },
});
