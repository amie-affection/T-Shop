import React from "react";
import styles from "./Sold.module.css";

const Sold = () => {
  console.log(styles);
  //   console.log(window.innerWidth);
  const windowWidth = window.innerWidth;
  return (
    <div>
      <h2>SOLD</h2>
      <img
        className={styles.container}
        style={{ width: windowWidth < 768 ? 300 : 400 }}
        src="https://pngimg.com/uploads/sold_out/sold_out_PNG78.png"
        alt="sold"
      />
    </div>
  );
};

export default Sold;
