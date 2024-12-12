import Button from "../button";
import { useState } from "react";

import img1 from "../../assets/homeImages/Homeimage1.webp";
import img2 from "../../assets/homeImages/Homeimage2.webp";
import img3 from "../../assets/homeImages/Homeimage3.webp";
import img4 from "../../assets/homeImages/Homeimage4.webp";
import img5 from "../../assets/homeImages/Homeimage5.webp";
import img6 from "../../assets/homeImages/Homeimage6.webp";
import img7 from "../../assets/homeImages/Homeimage7.webp";
import img8 from "../../assets/homeImages/Homeimage8.webp";
import img9 from "../../assets/homeImages/Homeimage9.webp";
import img10 from "../../assets/homeImages/Homeimage10.webp";
import img11 from "../../assets/homeImages/Homeimage11.webp";
import img12 from "../../assets/homeImages/Homeimage12.webp";
import HomeShowCase from "./homeShowCase";

export default function PictureSelector() {
  const [imageSelected, setImageSelected] = useState(0);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  const handleImageClick = (index) => {
    setImageSelected(index);
  };

  return (
    <div>
      <HomeShowCase imageIndex={imageSelected} />

      <div className="absolute bottom-0 w-full h-32 opacity-[93%] bg-black flex gap-x-10 pl-10">
        {images.map((image, index) => (
          <Button key={index} onClick={() => handleImageClick(index)}>
            <div
              className={`duration-200  translate-all ${
                imageSelected === index
                  ? "w-40 h-20 opacity-100"
                  : "w-20 h-20 opacity-40"
              }`}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
