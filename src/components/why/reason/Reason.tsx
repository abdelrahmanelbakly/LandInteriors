import React from "react";
import { IconType } from "react-icons";
import "./Reason.css";

interface Props {
  Icon?: IconType;
  imageUrl?: string;
  description: string;
}

const Reason = ({ Icon, imageUrl, description }: Props) => {
  return (
    <div className='reason'>
      {Icon ? (
        <Icon color='#4B2A63' className='reason-icon' />
      ) : (
        <img src={imageUrl} alt='icon' className='reason-image' />
      )}
      <p>{description}</p>
    </div>
  );
};

export default Reason;
