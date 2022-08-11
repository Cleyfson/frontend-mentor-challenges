import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <img className='header__logo' src={logo} alt='globo logo' />
      <p className='header__title'>my travel journal.</p>
    </div>
  );
};

export default Header;
