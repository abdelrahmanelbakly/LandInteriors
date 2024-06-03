import "./What.css";
import modularKitchen from "../../assets/modularKitchen.png";
import bedroom from "../../assets/bedroom.png";
import livingRoom from "../../assets/livingRoom.png";
import homeOffice from "../../assets/homeOffice.png";
import Card from "../cards/Card";

const What = () => {
  return (
    <div className='whatContainer'>
      <h2>What we do?</h2>
      <div className='whatCardsContainer'>
        <Card imgUrl={modularKitchen} title='Modular Kitchen'></Card>
        <Card imgUrl={bedroom} title='Bedroom'></Card>
        <Card imgUrl={livingRoom} title='Living room'></Card>
        <Card imgUrl={homeOffice} title='Home office'></Card>
      </div>
      <p className='summary'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </p>
    </div>
  );
};

export default What;
