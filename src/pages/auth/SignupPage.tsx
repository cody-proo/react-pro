import { Button, FormGroup, Typography } from '@mui/material';
import HelmetContainer from '../../containers/HelmetContainer';
import { SIGNUP_TITLE } from '../../core/languages/keys';
import { useLanguage } from '../../hooks/useLanguage';
import { Inputs } from '../../models/common';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../common/components/InputField';
import { Link } from 'react-router-dom';
import { SubmitSignupParams } from '../../models/signup';

const signupInputsValidation = yup.object().shape({
 username: yup.string().required('error.required.username'),
 email: yup
  .string()
  .email('error.format.email')
  .required('error.required.email'),
 password: yup
  .string()
  .matches(/.{8,}/, 'error.format.password')
  .required('error.required.password'),
});

const signupInputs: Inputs = [
 {
  id: 'signup-username-textfield',
  label: 'auth.signup.label',
  type: 'text',
  helperText: 'auth.common.helper.username',
  name: 'username',
  hasMargin: true,
 },
 {
  id: 'signup-email-textfield',
  label: 'common.email',
  type: 'email',
  helperText: 'auth.common.helper.email',
  name: 'email',
  hasMargin: true,
 },
 {
  id: 'signup-password-textfield',
  label: 'common.password',
  type: 'password',
  helperText: 'auth.common.helper.password',
  name: 'password',
  hasMargin: true,
 },
];

const SignupPage = () => {
 const { t } = useLanguage();
 const { register, formState, handleSubmit } =
  useForm<SubmitSignupParams>({
   mode: 'all',
   resolver: yupResolver(signupInputsValidation),
   reValidateMode: 'onChange',
  });

 const signupHandler = (data: SubmitSignupParams) => {
  console.log('signup handler', data);
 };

 return (
  <HelmetContainer title={SIGNUP_TITLE}>
   <Typography variant="h4">{t(SIGNUP_TITLE)}</Typography>
   <form onSubmit={handleSubmit(signupHandler)}>
    <FormGroup>
     {signupInputs.map((signupInput) => (
      <InputField
       key={signupInput.id}
       {...signupInput}
       registerRef={register(signupInput.name as any)}
       errorMessage={
        (formState?.errors as any)[signupInput.name]?.message
       }
      />
     ))}
    </FormGroup>
    <Button type="submit" fullWidth variant="contained">
     {t('auth.signup.submit')}
    </Button>
    <Link to="/login">{t('auth.login_link')}</Link>
   </form>
  </HelmetContainer>
 );
};

export default SignupPage;
