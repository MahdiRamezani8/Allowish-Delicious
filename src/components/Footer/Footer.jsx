import styles from "./Footer.module.css";
import Label from "../Label/Label";
import Button from "../Button/Button";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <section className={styles.intro}>
          <Label size="lg" />
          <p>
            We made it our mission to create community everyday and grow
            meaningful, lasting relationships with our staff, our suppliers and
            of course you, our customers.
          </p>
        </section>
        <section className={styles.contact}>
          <h3>Contact Alowishus!</h3>
          <div>
            <Button type="social">
              <img src="Assests/EmailIcon.svg" alt="email" />
            </Button>
            <i>alowishus@gmai.com</i>
          </div>
          <div>
            <Button type="social">
              <img src="Assests/CallIcon.svg" alt="email" />
            </Button>
            <i>+110 214 214 2451</i>
          </div>
          <div>
            <Button type="social">
              <img src="Assests/FacebookIcon.svg" alt="email" />
            </Button>
            <Button type="social">
              <img src="Assests/InstagramIcon.svg" alt="email" />
            </Button>
            <Button type="social">
              <img src="Assests/TwitterIcon.svg" alt="email" />
            </Button>
            <Button type="social">
              <img src="Assests/LinkedinIcon.svg" alt="email" />
            </Button>
          </div>
        </section>
        <section className={styles.location}>
          <h2>Store Locations</h2>
          <p>
            Find your nearest Alowishus store with opening hours, location and
            contact details.
          </p>
          <Button type="underline">
            find my alowishus <img src="Assests/angle-right.svg" alt="=>" />
          </Button>
        </section>
        <section className={styles.subscription}>
          <h2>First One’s On Us!</h2>
          <input type="text" placeholder="E-mail" />
          <Button type="primary">subscribe</Button>
        </section>
        <section className={styles.copyright}>
          <i>
            copyright &copy; 2024 <b>Alowishus Delicious</b>
          </i>
          <i>
            Developed By <a href="https://github.com/mahdiramezani8"> Mahdi Ramezani </a>
          </i>
          <i>
            <a href="TermsOfUse">terms of use</a> |{" "}
            <a href="PrivacePolicy">privacy policy</a>
          </i>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
