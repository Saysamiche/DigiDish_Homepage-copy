import Styles from "./Footer.module.css";
import Logo from "/src/Images/Logo.png";
import facebook from "/src/Images/facebook.png";
import Instagram from "/src/Images/Instagram.png";
import LinkedIn from "/src/Images/LinkedIn.png";
export default function Footer() {
  return (
    <div>
      <div className={Styles.footer}>
        <div className={Styles.footcontents}>
          <div className={Styles.imagecontainer}>
            <img className={Styles.image} src={Logo} alt="DigiDish_Logo" />
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
            <img src={facebook} alt="Facebook logo" />
            <img src={Instagram} alt="Instagram logo" />
            <img src={LinkedIn} alt="LinkedIn logo" />
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
