import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} className ={s.logo}>
        Popocatl
      </Link>
    </div>
  );
};

export default Logo;