import { useState } from "react";
import Styles from "./UpperSection.module.css";
export default function UpperSection() {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={Styles.bodyContents}>
      <div className={Styles.secBackGround}>
        <div className={Styles.navBody}>
          <img
            className={Styles.image}
            src=".\src\Images\Frame 1618869189.png"
            alt="DigiDish_Logo"
          />

          <ul className={`${Styles.navBar} ${isOpened ? Styles.open : ""}`}>
            <li className={Styles.navContents}>Home</li>
            <li className={Styles.navContents}>Features</li>
            <li className={Styles.navContents}>How it works</li>
            <li className={Styles.navContents}>Testimonial</li>
            <li className={Styles.navContents}>Contact Us</li>
            <button className={Styles.navButton}>Get Started</button>
          </ul>
          <button className={Styles.togglebutton} onClick={toggle}>
            {isOpened ? "X" : "Menu"}
          </button>
        </div>

        <div className={Styles.textBodyContent}>
          <h1>
            TRANSFORM YOUR <span>RESTAURANT'S</span> MENU <br /> WITH DIGIDISH
            <span> E-MENU</span> PLATFORM
          </h1>
          <p>
            Easily create, upload and update your food menus online with <br />
            our intuitive digital solution.
          </p>
          <div className={Styles.contentButton}>
            <button className={Styles.navButton}>Get Started</button>
            <button className={Styles.watchButton}>Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
