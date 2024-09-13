import Styles from "./EmenuPlatForm.module.css";
export default function EmenuPlatForm() {
  return (
    <div>
      <h2 className={Styles.emenuPlatform}>WHY E-MENU PLATFORM?</h2>

      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.wrap}>
            <div className={Styles.Platform1}>
              <div className={Styles.Plat}>
                <img
                  className={Styles.img}
                  src=".\src\Images\vector.png"
                  alt="photo"
                />
                <h4>Easy Menu Management</h4>
              </div>
              <p>Create, upload, and update menu items effortlessly.</p>
            </div>

            <div className={Styles.Platform2}>
              <div className={Styles.Plat}>
                <img
                  className={Styles.img}
                  src=".\src\Images\update-alt-2 1.png"
                  alt="photo"
                />
                <h4>Real-Time Updates</h4>
              </div>

              <p>
                Ensure your menu is always up-to-date with real-time changes.
              </p>
            </div>
            <div className={Styles.Platform3}>
              <div className={Styles.Plat}>
                <img
                  className={Styles.img}
                  src=".\src\Images\heart-eyes-face 1.png"
                  alt="photo"
                />
                <h4>Visually Appealing</h4>
              </div>

              <p>Provide customers with a modern and engaging digital menu. </p>
            </div>

            <div className={Styles.Platform4}>
              <div className={Styles.Plat}>
                <img
                  className={Styles.img}
                  src=".\src\Images\user-heart 1.png"
                  alt="photo"
                />
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
            <img
              className={Styles.Ellipse}
              src=".\src\Images\Ellipse 4.png"
              alt="photo"
            />
            <img
              className={Styles.Group13}
              src=".\src\Images\Group 13.png"
              alt="photo"
            />
            <img
              className={Styles.Group15}
              src=".\src\Images\Group 15.png"
              alt="photo"
            />
            <img
              className={Styles.Group14}
              src=".\src\Images\Group 14.png"
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
