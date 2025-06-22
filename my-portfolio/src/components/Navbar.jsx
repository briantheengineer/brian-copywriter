import { Link } from 'react-scroll';
import LanguageSwitcher from './LanguageSwitcher';
import '../App.css';

export default function Navbar () {
  return (
    <div className="w-full flex flex-nowrap items-center justify-evenly px-10 py-3 yellowbg bluedark fixed backdrop-blur-2xl z-10">
      <h1 className="text-4xl w-1/3">Brian H. Castelhano</h1>

      <ul className="flex flex-nowrap items-center [&>*]:mx-5 w-1/3">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          Home
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          About
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          Projects
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer flex flex-nowrap"
          activeClass="active"
        >
          Talk to Me
        </Link>

      </ul>
      <LanguageSwitcher />
      <div className="w-1/3" />
    </div>
  );
}
