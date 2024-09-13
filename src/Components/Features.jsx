import Styles from "./Features.module.css";
export default function Features() {
  return (
    <div>
      <h2 className={Styles.emenuPlatform}>
        FEATURES DESIGNED FOR YOUR SUCCESS
      </h2>

      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.Platform1}>
            <p className={Styles.Platpara}>
              <strong>CUSTOMIZABLE TEMPLATES: </strong> Choose from a variety of
              templates to match your restaurant's style.
            </p>
          </div>

          <div className={Styles.Platform2}>
            <p className={Styles.Platpara}>
              <strong>MULTI-DEVICE COMPATIBILITY: </strong>Access your digital
              menu on any device, anywhere.
            </p>
          </div>

          <div className={Styles.Platform3}>
            <p className={Styles.Platpara}>
              <strong>PHOTO AND DESCRIPTION UPLOADS: </strong> Add detailed
              descriptions and high-quality images to showcase your dishes.
            </p>
          </div>

          <div className={Styles.Platform4}>
            <p className={Styles.Platpara}>
              <strong>PRICE MANAGEMENT: </strong> Easily update and manage
              prices for all your menu items.
            </p>
          </div>

          <img
            className={Styles.img}
            src=".\src\Images\Mask group.png"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
}
