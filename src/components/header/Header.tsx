import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const items = [
 { to: '/', text: 'Home', icon: <FaHome /> },
 { to: '/courses', text: 'Courses', icon: <FaHome /> },
 { to: '/blogs', text: 'Blogs', icon: <FaHome /> },
 { to: '/signup', text: 'Signup', icon: <FaHome /> },
 { to: '/login', text: 'Login', icon: <FaHome /> },
];

const Header: React.FC = () => {
 return (
  <header>
   <ul>
    {items.map((item) => (
     <li key={item.to}>
      <NavLink to={item.to}>
       {item.text} {item.icon}
      </NavLink>
     </li>
    ))}
   </ul>
  </header>
 );
};

export default Header;
