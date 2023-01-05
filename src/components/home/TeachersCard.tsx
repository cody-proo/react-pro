import {
 Avatar,
 Button,
 ListItem,
 ListItemAvatar,
 ListItemText,
} from '@mui/material';
import { FC } from 'react';
import { FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Teacher } from '../../models/users';

export interface Props {
 teacher: Teacher;
}

const TeachersCard: FC<Props> = ({ teacher }) => {
 return (
  <ListItem disableGutters>
   <ListItemAvatar>
    <Avatar>
     <FaImage />
    </Avatar>
   </ListItemAvatar>
   <ListItemText>
    {teacher.firstName} {teacher.lastName}
   </ListItemText>
   <Button variant="contained" to="/login" component={Link}>
    پروفایل
   </Button>
  </ListItem>
 );
};

export default TeachersCard;
