import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import '../App.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 yellowbg bluedark backdrop-blur-2xl px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl md:text-4xl font-bold cursor-pointer"
          onClick={closeMenu}
        >
          Brian H. Castelhano
        </Link>

        <button onClick={toggleMenu} className="md:hidden text-white text-3xl z-50 relative">
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul
          className={`
            flex flex-col md:flex-row items-center md:static absolute top-full left-0 w-full md:w-auto 
            bg-opacity-95 md:bg-transparent bg-[#1a1a2e] transition-all duration-300 ease-in-out 
            md:translate-y-0 ${menuOpen ? 'translate-y-0' : '-translate-y-[100vh]'} 
            [&>*]:mx-4 [&>*]:my-2 md:[&>*]:my-0 md:py-0 py-4 z-40
          `}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="active"
            className="cursor-pointer"
          >
            {t('navbar.about')}
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="active"
            className="cursor-pointer"
          >
            {t('navbar.projects')}
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="active"
            className="cursor-pointer"
          >
            {t('navbar.contact')}
          </Link>

          <li className="flex gap-2 items-center">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
}
