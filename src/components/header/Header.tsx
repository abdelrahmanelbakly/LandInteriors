import "./Header.css";
import logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' width='111' height='111'></img>
      <ul className='menu'>
        <li>About</li>
        <li>Projects</li>
        <li>Studio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <ul className='links'>
        <li>Join as Design Expert</li>
        <li>Partner with LAND Interiors</li>
      </ul>
      <div className='colapsedMenu'>
        <IoMdMenu className='icon' />
      </div>
    </div>
  );
};

export default Header;
