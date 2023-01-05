import { Typography } from '@mui/material';
import HelmetContainer from '../../containers/HelmetContainer';
import { SIGNUP_TITLE } from '../../core/languages/keys';
import { useLanguage } from '../../hooks/useLanguage';


const loginInputs = [
    { 
        
    }
]

const SignupPage = () => {
 const { t } = useLanguage();
 return (
  <HelmetContainer title={SIGNUP_TITLE}>
   <Typography variant="h4">{t(SIGNUP_TITLE)}</Typography>
   <form>

   </form>
  </HelmetContainer>
 );
};

export default SignupPage;
