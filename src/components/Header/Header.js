import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { menuItems } from './menuItems';
import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';
const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};

const Header = () => {
  const elements = menuItems.map(({ id, to, text }) => (
    <li className={s.menu__item} key={id}>
      <NavLink to={to} className={getLinkClassName}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <header className={s.header}>
      <Logo />
      <nav>
        <ul className={s.menu}>{elements}</ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isActive: PropTypes.bool,
};

export default Header;
