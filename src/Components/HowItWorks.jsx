import Styles from "./HowItWorks.module.css";
export default function HowItWorks() {
  return (
    <div className={Styles.container}>
      <h2>HOW IT WORKS</h2>

      <div className={Styles.platform}>
        <div className={Styles.contents}>
          <h4 className={Styles.number}>01</h4>
          <h5>Sign up</h5>
          <p>
            Create your account and set up <br /> your restaurant profile.
          </p>
        </div>
        <div className={Styles.platimage}>
          <img
            className={Styles.platimage1}
            src="./src/Images/Group 8.png"
            alt="image"
          />
        </div>
      </div>

      <div className={Styles.platformeven}>
        <div className={Styles.platimage}>
          <img
            className={Styles.platimage2}
            src="./src/Images/Group 8 (1).png"
            alt="image"
          />
        </div>

        <div className={Styles.contents}>
          <h4 className={Styles.number}>02</h4>
          <h5>Upload Menu</h5>
          <p>And your menu items, descriptions, prices, and images.</p>
        </div>
      </div>

      <div className={Styles.platform}>
        <div className={Styles.contents}>
          <h4 className={Styles.number}>03</h4>
          <h5>Customize</h5>
          <p>
            Choose a template and customize <br /> your digital menu.
          </p>
        </div>
        <div className={Styles.platimage}>
          <img
            className={Styles.platimage3}
            src="./src/Images/Group 8 (3).png"
            alt="image"
          />
        </div>
      </div>

      <div className={Styles.platformeven}>
        <div className={Styles.platimage}>
          <img
            className={Styles.platimage4}
            src="./src/Images/Group 8 (2).png"
            alt="image"
          />
        </div>
        <div className={Styles.contents}>
          <h4 className={Styles.number}>04</h4>
          <h5>Go Live</h5>
          <p>
            Publish your menu and provide your customers <br /> with an
            exceptional dining experience.
          </p>
        </div>
      </div>
    </div>
  );
}
