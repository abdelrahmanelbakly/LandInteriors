import React, { useEffect, useRef, useState } from "react";
import Card from "../cards/Card";
import "./Blogs.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ModernInterior from "../../assets/ModernInterior.png";
import ExtertriorProjecct from "../../assets/ExteriorProject.png";
import GreyBeauty from "../../assets/GreyBeauty.png";
import PlantationInterior from "../../assets/PlantationInterior.png";
import RoleOfFurniture from "../../assets/RoleOfFurniture.png";

const Blogs = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit utaliquam,";

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const handleScroll = () => {
        setCanScrollLeft(slider.scrollLeft > 0);
        setCanScrollRight(
          slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 1
        );
      };
      slider.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => {
        slider.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const slideLeft = () => {
    const slider = document.getElementById("blogsSlider");
    if (slider) {
      slider.scrollLeft -= 300; // Adjust scroll amount as needed
      console.log(slider.scrollLeft);
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("blogsSlider");
    if (slider) {
      slider.scrollLeft += 300; // Adjust scroll amount as needed
      console.log(
        slider.scrollLeft +
          "  " +
          slider.scrollWidth +
          "  " +
          slider.clientWidth
      );
    }
  };
  return (
    <div className='blogsContainer'>
      <h2>Blogs</h2>
      <div id='blogsSlider' ref={sliderRef} className='blogsCardsContainer'>
        <Card
          imgUrl={ModernInterior}
          title='Modern Interior'
          description={description}
        />
        <Card
          imgUrl={ExtertriorProjecct}
          title='Exterior Project'
          description={description}
        />
        <Card
          imgUrl={GreyBeauty}
          title='Grey Beauty'
          description={description}
        />
        <Card
          imgUrl={PlantationInterior}
          title='Plantation Interior'
          description={description}
        />
        <Card
          imgUrl={RoleOfFurniture}
          title='Role of Furniture'
          description={description}
        />
      </div>
      <div>
        {canScrollLeft && (
          <MdChevronLeft className='scrollButtonLeft' onClick={slideLeft} />
        )}
        {canScrollRight && (
          <MdChevronRight className='scrollButtonRight' onClick={slideRight} />
        )}
      </div>
      <button className='viewAll'>View all</button>
    </div>
  );
};

export default Blogs;
