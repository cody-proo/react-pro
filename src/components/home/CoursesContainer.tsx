import { Button, List, Typography } from '@mui/material';
import { FC } from 'react';
import CoursesCard from './CourseCard';
import { useLanguage } from '../../hooks/useLanguage';
import { Courses } from '../../models/course';

const courses: Courses = [
 {
  title: 'دوره یادگیری ری اکت در سه پروژه',
  id: 1,
  teacher: 'یونس قربانی',
  price: 40_000,
  duration: 72000,
 },
 {
  title: 'دوره نود جی اس',
  id: 2,
  teacher: 'یونس قربانی',
  price: 60_000,
  duration: 50400,
 },
 {
  title: 'معماری تمیز در ASP.NET CORE',
  id: 3,
  teacher: 'ایمان مدائنی',
  price: 80_000,
  duration: 216000,
 },
 {
  title: 'ماشین مجازی و داکر',
  id: 4,
  teacher: 'نیما عارفی',
  price: 140_000,
  duration: 3600,
 },
 {
  title: 'پایتون برای کودکان',
  id: 5,
  teacher: 'محمد اردوخانی',
  price: 240_000,
  duration: 360,
 },
 {
  title: 'یادگیری لاراول از پایه',
  id: 6,
  teacher: 'حسن خسروجردی',
  price: 480_000,
  duration: 50400,
 },
];

const CoursesContainer: FC = () => {
 const { t } = useLanguage();
 return (
  <>
   <Typography variant="h5">{t('home.courses')}</Typography>
   {/* <Button>{}</Button> */}
   <hr />
   <List>
    {courses.map((item) => (
     <CoursesCard course={item} key={item.id} />
    ))}
   </List>
  </>
 );
};

export default CoursesContainer;
