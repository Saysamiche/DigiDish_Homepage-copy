import Styles from "./Clients.module.css";
export default function Clients() {
  return (
    <div className={Styles.container}>
      <h2>WHAT OUR CLIENTS SAY</h2>

      <div className={Styles.contents}>
        <div className={Styles.group}>
          <div>
            <img src="\src\Images\Frame 32.png" alt="photo" />
          </div>
          <div className={Styles.texts}>
            <h3>John Doe</h3>
            <p>
              "E-Menu Platform has made managing our menu so much easier. Our
              customers love the digital format!"
            </p>
          </div>
        </div>

        <div className={Styles.group}>
          <div className={Styles.imgfloat}>
            <img src="\src\Images\Frame 32.png" alt="photo" />
          </div>
          <div className={Styles.texts}>
            <h3>Rebecca Darlington</h3>
            <p>
              "The real-time updates are a game-changer. We can instantly
              reflect changes in our menu without any hassle."
            </p>
          </div>
        </div>

        <div className={Styles.group}>
          <div>
            <img src="\src\Images\Frame 32.png" alt="photo" />
          </div>
          <div className={Styles.texts}>
            <h3>Kim Daniel</h3>
            <p>
              "The platform is incredibly user-friendly. Our staff learned to
              use it in no time."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
