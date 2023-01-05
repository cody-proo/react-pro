import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseContainer from './containers/BaseContainer';
import { routes } from './routes';
import { HelmetProvider } from 'react-helmet-async';
import TranslationContainer from './containers/TranslationContainer';
import {
 ColorSchemeProvider,
 CustomThemeProvider,
 RtlProvider,
} from './providers';

const Base = () => {
 return (
  <ColorSchemeProvider>
   <HelmetProvider>
    <TranslationContainer>
     <RtlProvider>
      <CustomThemeProvider>
       <BrowserRouter>
        <Routes>
         {routes.map((route) => {
          return (
           <Route
            caseSensitive
            key={route.path}
            path={route.path}
            element={
             <BaseContainer>
              <route.element />
             </BaseContainer>
            }
           />
          );
         })}
        </Routes>
       </BrowserRouter>
      </CustomThemeProvider>
     </RtlProvider>
    </TranslationContainer>
   </HelmetProvider>
  </ColorSchemeProvider>
 );
};

export default Base;
