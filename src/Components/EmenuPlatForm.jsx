import Styles from "./EmenuPlatForm.module.css";
import Vector from "/src/Images/Vector.png";
import update from "/src/Images/update.png";
import heart from "/src/Images/heart.png";
import user from "/src/Images/user.png";
import Ellipse1 from "/src/Images/Ellipse1.png";
import Ellipse2 from "/src/Images/Ellipse2.png";
import Ellipse3 from "/src/Images/Ellipse3.png";
import Ellipse4 from "/src/Images/Ellipse4.png";
export default function EmenuPlatForm() {
  return (
    <div>
      <h2 className={Styles.emenuPlatform}>WHY E-MENU PLATFORM?</h2>

      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.wrap}>
            <div className={Styles.Platform1}>
              <div className={Styles.Plat}>
                <img className={Styles.img} src={Vector} alt="photo" />
                <h4>Easy Menu Management</h4>
              </div>
              <p>Create, upload, and update menu items effortlessly.</p>
            </div>

            <div className={Styles.Platform2}>
              <div className={Styles.Plat}>
                <img className={Styles.img} src={update} alt="photo" />
                <h4>Real-Time Updates</h4>
              </div>

              <p>
                Ensure your menu is always up-to-date with real-time changes.
              </p>
            </div>
            <div className={Styles.Platform3}>
              <div className={Styles.Plat}>
                <img className={Styles.img} src={heart} alt="photo" />
                <h4>Visually Appealing</h4>
              </div>

              <p>Provide customers with a modern and engaging digital menu. </p>
            </div>

            <div className={Styles.Platform4}>
              <div className={Styles.Plat}>
                <img className={Styles.img} src={user} alt="photo" />
                <h4>User-Friendly Interface</h4>
              </div>

              <p>
                Intuitive design makes managing your menu simple and
                straightforward.
              </p>
            </div>
          </div>
          <p className={Styles.PlatformText}>
            Enhance Your Restaurant Experience <br /> with Our Digital Menu
            Solution
          </p>
          <div className={Styles.images}>
            <img className={Styles.Ellipse} src={Ellipse1} alt="photo" />
            <img className={Styles.Group13} src={Ellipse2} alt="photo" />
            <img className={Styles.Group15} src={Ellipse3} alt="photo" />
            <img className={Styles.Group14} src={Ellipse4} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
}
