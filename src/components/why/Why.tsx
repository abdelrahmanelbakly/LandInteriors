import "./Why.css";
import Reason from "./reason/Reason";
import Group4 from "../../assets/Group4.svg";
import { RiHomeSmileLine } from "react-icons/ri";
import { PiCertificateLight } from "react-icons/pi";
const Why = () => {
  return (
    <div className='why'>
      <h2>Why Land Interiors</h2>
      <div className='whyContainer'>
        <Reason imageUrl={Group4} description='50 days or we pay you rent' />
        <Reason Icon={RiHomeSmileLine} description='1500+happy customers' />
        <Reason Icon={PiCertificateLight} description='300+ design experties' />
      </div>
    </div>
  );
};
export default Why;
