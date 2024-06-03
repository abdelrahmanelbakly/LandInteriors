import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerLogo'>
        <img src={logo} alt='logo' width='60' height='60'></img>
      </div>
      <div className='footerSummary'>
        <p>
          We introduce our selves as LAND Interior and Architectural Design
          Consultancy – one of the best interior designers in Chennai. Chennai
          Luxury Interior and Architectural Design Consultancy has challenged
          the conventional way of interior designing and given new dimensions to
          the art of interior designing.
        </p>
      </div>
      <div className='footerWhatWeDo'>
        <h4>WHAT WE DO</h4>
      </div>
      <div className='footerGetInTouch'>
        <h4>Get in touch</h4>
      </div>
      <div className='footerContacts'>
        <p>landinteriors@gmail.com</p>
        <p>+91 98987 65656</p>
      </div>
      <div className='footerExamples'>
        <ul>
          <li>Interior Design</li>
          <li>Kitchen</li>
          <li>Ceiling</li>
          <li>Bedroom</li>
          <li>Smart Home</li>
        </ul>
      </div>
      <div className='footerIcons'>
        <div className='footerIconContainer'>
          <FaFacebookSquare className='footerIcon' />
        </div>
        <div className='footerIconContainer'>
          <FaLinkedin className='footerIcon' />
        </div>
        <div className='footerIconContainer'>
          <FaTwitter className='footerIcon' />
        </div>
        <div className='footerIconContainer'>
          <FaYoutube className='footerIcon' />
        </div>
        <div className='footerIconContainer'>
          <FaInstagram className='footerIcon' />
        </div>
      </div>
      <div className='footerMenu'>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Studio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
