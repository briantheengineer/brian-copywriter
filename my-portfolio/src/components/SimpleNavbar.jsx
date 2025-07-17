import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

export default function SimpleNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Se já está na home, faz scroll
      ScrollLink.scrollTo('home', {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    } else {
      // Se está em outra rota, volta pra home
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 yellowbg bluedark backdrop-blur-md z-20 shadow-md">
      <span
        onClick={handleLogoClick}
        className="text-3xl font-bold cursor-pointer"
      >
        Brian H. Castelhano
      </span>
      <LanguageSwitcher />
    </nav>
  );
}
