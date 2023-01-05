import { Button, TextField } from '@mui/material';
import HelmetContainer from '../../containers/HelmetContainer';
import { HOME_TITLE } from '../../core/languages/keys';
import { useLanguage } from '../../hooks/useLanguage';
import { useColorScheme } from '../../hooks/useColorScheme';

const HomePage: React.FC = () => {
 const { t, changeLanguage } = useLanguage();
 const { setColorScheme } = useColorScheme();
 return (
  <HelmetContainer title={HOME_TITLE}>
   <p>{t('hi')}</p>
   <Button
    onClick={() =>
     setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }
   >
    Change Color
   </Button>
   <button onClick={() => changeLanguage()}>change language</button>
   <TextField placeholder="salam" />
  </HelmetContainer>
 );
};

export default HomePage;
