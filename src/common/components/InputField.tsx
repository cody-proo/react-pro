import {
 FormControl,
 FormHelperText,
 Input,
 InputLabel,
} from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useLanguage } from '../../hooks/useLanguage';

interface Props {
 hasMargin?: boolean;
 label: string;
 helperText?: string;
 type: string;
 name: string;
 registerRef: UseFormRegisterReturn;
 errorMessage?: string;
}

const InputField: FC<Props> = ({
 hasMargin,
 label,
 helperText,
 type,
 name,
 registerRef,
 errorMessage,
}) => {
 const { t } = useLanguage();
 return (
  <FormControl
   error={!!errorMessage}
   margin={hasMargin ? 'dense' : 'normal'}
  >
   <InputLabel>{t(label)}</InputLabel>
   <Input type={type} {...registerRef} name={name} />
   <FormHelperText>
    {t((errorMessage || helperText) as string)}
   </FormHelperText>
  </FormControl>
 );
};

export default InputField;
