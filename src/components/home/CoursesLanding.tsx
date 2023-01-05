import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { HOME_TITLE } from '../../core/languages/keys';

const CoursesLanding: FC = () => {
 const { t } = useLanguage();
 return (
  <Box>
   <Typography variant="h3">{t(HOME_TITLE)}</Typography>
   <Typography>{t('home.description')}</Typography>
  </Box>
 );
};

export default CoursesLanding;
