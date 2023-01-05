import {
 ListItem,
 ListItemButton,
 ListItemText,
 Typography,
} from '@mui/material';
import { FC } from 'react';
import { Course } from '../../models/course';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

interface Props {
 course: Course;
}

const CoursesCard: FC<Props> = ({ course }) => {
 const getDurationCourse = (duration: number) => {
  const convertToHour = duration / 3600;
  if (convertToHour >= 1) {
   return convertToHour;
  }
  return Math.ceil(convertToHour);
 };
 return (
  <ListItem sx={{ display: 'list-item' }} divider>
   <ListItemText>
    <Typography variant="body1" fontWeight="bold">
     دوره :‌ {course.title}
    </Typography>
   </ListItemText>
   <ListItemText>
    <Typography variant="body2">مدرس :‌ {course.teacher}</Typography>
   </ListItemText>
   <ListItemText>
    <Typography variant="body2">
     هزینه :‌ {new Intl.NumberFormat('fa-IR').format(course.price)}{' '}
     تومان
    </Typography>
   </ListItemText>
   <ListItemText>
    <Typography variant="body2">
     مدت زمان :‌ {getDurationCourse(course.duration)} ساعت
    </Typography>
   </ListItemText>
   <Link to={`/courses/${course.id}`}>مشاهده دوره</Link>
  </ListItem>
 );
};

export default CoursesCard;
