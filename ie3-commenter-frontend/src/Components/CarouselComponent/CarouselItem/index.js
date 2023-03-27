import styles from "./desktop.css";

const CarouselItemComponent = ({ src }) => {
  return (
    <div className={styles.carouselItem}>
      <img alt="abc.png" src={src} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default CarouselItemComponent;
