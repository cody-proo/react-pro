import * as yup from 'yup';
import InputField from '../../common/components/InputField';
import HelmetContainer from '../../containers/HelmetContainer';
import { Button, FormGroup, Typography } from '@mui/material';
import { LOGIN_TITLE } from '../../core/languages/keys';
import { useLanguage } from '../../hooks/useLanguage';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitLoginParams } from '../../models/login';
import { Link } from 'react-router-dom';
import { Inputs } from '../../models/common';

const loginInputsValidation = yup.object().shape({
 email: yup
  .string()
  .email('error.format.email')
  .required('error.required.email'),
 password: yup
  .string()
  .matches(/.{8,}/, 'error.format.password')
  .required('error.required.password'),
});

const loginInputs: Inputs = [
 {
  label: 'common.email',
  hasMargin: true,
  helperText: 'auth.common.helper.email',
  type: 'email',
  name: 'email',
  id: 'login-input-email',
 },
 {
  label: 'common.password',
  hasMargin: true,
  helperText: 'auth.common.helper.password',
  type: 'password',
  name: 'password',
  id: 'login-input-password',
 },
];

const LoginPage = () => {
 const { t } = useLanguage();
 const { register, formState, handleSubmit } =
  useForm<SubmitLoginParams>({
   mode: 'all',
   reValidateMode: 'onChange',
   resolver: yupResolver(loginInputsValidation),
  });

 const loginHandler = (data: SubmitLoginParams) => {
  console.log(data);
 };

 return (
  <HelmetContainer title={LOGIN_TITLE}>
   <form onSubmit={handleSubmit(loginHandler)}>
    <Typography variant="h4">{t(LOGIN_TITLE)}</Typography>
    <FormGroup>
     {loginInputs.map((loginInput) => (
      <InputField
       {...loginInput}
       key={loginInput.id}
       errorMessage={
        (formState?.errors as any)[loginInput.name]?.message as string
       }
       registerRef={register(loginInput.name as any)}
       
      />
     ))}
    </FormGroup>
    <Button type="submit" fullWidth variant="contained">
     {t('auth.login.submit')}
    </Button>
   </form>
   <Link to="/signup">{t('auth.signup_link')}</Link>
  </HelmetContainer>
 );
};

export default LoginPage;
