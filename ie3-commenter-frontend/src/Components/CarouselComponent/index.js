import { useState } from "react";

import CarouselItemComponent from "./CarouselItem";
import useInterval from "../../hooks/useInterval";

import styles from "./desktop.css";

const imgSrc = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpZ3AmUlI_h9TNBB-lEnxyFDIplBHlYyL1A&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthULQX_46UhK1K35yNXHrcdfrL7zmHCWXDA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zRpZR__dX85rRE56oziBQHW9SmLNHK4AOw&usqp=CAU",
];

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    setActiveIndex((activeIndex + 1) % imgSrc.length);
  }, 2000);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {imgSrc.map((src) => {
          return <CarouselItemComponent src={src} />;
        })}
      </div>
    </div>
  );
};

export default CarouselComponent;
