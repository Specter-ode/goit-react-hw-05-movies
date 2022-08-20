import { Link } from 'react-router-dom';
import s from './Logo.module.css';
import LogoSvg from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      <img src={LogoSvg} alt="Logo" />
    </Link>
  );
};

export default Logo;
