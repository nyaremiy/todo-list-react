import s from './Header.module.scss';
import Logo from './../Logo/Logo';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
