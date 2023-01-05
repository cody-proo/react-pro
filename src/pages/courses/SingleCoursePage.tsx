import HelmetContainer from '../../containers/HelmetContainer';
import { COURSES_SINGLE_TITLE } from '../../core/languages/keys';

const SingleCoursePage: React.FC = () => {
 return (
  <HelmetContainer title={COURSES_SINGLE_TITLE}>
   <p>Single Course Page ...</p>
  </HelmetContainer>
 );
};

export default SingleCoursePage;
