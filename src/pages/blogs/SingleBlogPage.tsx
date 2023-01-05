import HelmetContainer from '../../containers/HelmetContainer';
import { BLOGS_SINGLE_TITLE } from '../../core/languages/keys';

const SingleBlogPage: React.FC = () => {
 return (
  <HelmetContainer title={BLOGS_SINGLE_TITLE}>
   <p>Single Blog Page ...</p>
  </HelmetContainer>
 );
};

export default SingleBlogPage;
