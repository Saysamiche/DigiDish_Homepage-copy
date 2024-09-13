import Styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div>
      <div className={Styles.footer}>
        <div className={Styles.footcontents}>
          <div className={Styles.imagecontainer}>
            <img
              className={Styles.image}
              src=".\src\Images\Frame 1618869189.png"
              alt="DigiDish_Logo"
            />
          </div>
          <div className={Styles.Qlink}>
            <div className={Styles.Qlinks}>
              <h3>Quick Links:</h3>
              <ul>
                <li>Home</li>
                <li>Features</li>
                <li>How it works</li>
                <li>Testimonial</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className={Styles.Qlinks}>
              <h3>Contact Information:</h3>
              <ul>
                <li>Address</li>
                <li>Email</li>
                <li>Phone Number</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.socialmedia}>
          <div className={Styles.newsletter}>
            <p>
              Subscribe to our newsletter for updates and exclusive contents
            </p>
          </div>

          <div className={Styles.socialmediaimg}>
            <img src="\src\Images\Group 5.png" alt="Facebook logo" />
            <img src="\src\Images\Group 11.png" alt="Instagram logo" />
            <img src="\src\Images\Group 9.png" alt="LinkedIn logo" />
          </div>
        </div>
      </div>
      <hr />
      <div className={Styles.copyright}>
        <p>Copyright: "&#169; 2024 Rogue designers. All rights reserved"</p>
      </div>
    </div>
  );
}
