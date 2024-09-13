import Styles from "./DigiDishBg.module.css";
export default function DigiDishBg() {
  return (
    <div>
      <div className={Styles.wrapper}>
        <h1 className={Styles.blurry}>DIGIDISH</h1>

        <div className={Styles.container}>
          <h2>READY TO ENHANCE YOUR MENU?</h2>
          <p>
            JOIN OUR E-MENU PLATFORM TODAY AND TRANSFORM YOUR RESTAURANT'S
            DINING EXPERIENCE.
          </p>
        </div>
      </div>
      <div className={Styles.buttondiv}>
        <button className={Styles.navButton}>Get Started</button>
      </div>
    </div>
  );
}
