import heroImage from "../../assets/heroImage.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroImage} alt='hero' className='responsive' />
      <div className='heroContainer'>
        <p className='p1'>Get personalised home interiors</p>
        <p className='p2'>in just 50 days</p>
        <button>SPEAK WITH A ONLINE CONSULTANT</button>
      </div>
    </div>
  );
};
export default Hero;
