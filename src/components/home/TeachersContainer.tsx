import { List, Typography } from '@mui/material';
import { FC } from 'react';
import TeachersCard from './TeachersCard';
import { Teachers } from '../../models/users';
import { useLanguage } from '../../hooks/useLanguage';

const teachers: Teachers = [
 { id: 100, firstName: 'حسین', lastName: 'لادمخی' },
 { id: 300, firstName: 'یونس', lastName: 'قربانی' },
 { id: 200, firstName: 'ایمان', lastName: 'مدائنی' },
];

const TeachersContainer: FC = () => {
 const { t } = useLanguage();
 return (
  <>
   <Typography variant="h5">{t('home.teachers')}</Typography>
   <hr />
   <List>
    {teachers.map((teacher) => (
     <TeachersCard teacher={teacher} key={teacher.id} />
    ))}
   </List>
  </>
 );
};

export default TeachersContainer;
