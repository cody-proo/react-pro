import { Container } from '@mui/material';
import { Footer, Header } from '../components';

const BaseContainer: React.FC<{
 children: React.ReactNode;
}> = ({ children }) => {
 return (
  <Container>
   <Header />
   {children}
   <Footer />
  </Container>
 );
};

export default BaseContainer;
