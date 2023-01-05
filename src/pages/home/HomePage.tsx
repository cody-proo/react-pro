import { Grid } from '@mui/material';
import HelmetContainer from '../../containers/HelmetContainer';
import { HOME_TITLE } from '../../core/languages/keys';
import CoursesLanding from '../../components/home/CoursesLanding';
import TeachersContainer from '../../components/home/TeachersContainer';
import CoursesContainer from '../../components/home/CoursesContainer';

const HomePage: React.FC = () => {
 return (
  <HelmetContainer title={HOME_TITLE}>
   <CoursesLanding />
   <Grid my={3} container spacing={2}>
    <Grid item xs={9}>
     <CoursesContainer />
    </Grid>
    <Grid item xs={3}>
     <TeachersContainer />
    </Grid>
   </Grid>
  </HelmetContainer>
 );
};

export default HomePage;
