import styles from "../styles/about.module.css";
import profilePic from "../public/images.png";
import Image from "next/image";
import Link from "next/link";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase"
import { v1 as uuidv1 } from "uuid";
import { useState, useEffect } from "react";
import swal from "sweetalert";

export default function About() {
  const [username, setUsername] = useState({});
  const [email, setEmail] = useState({});

  async function getEmail() {
    const emailUserQuery = query(
      collection(db, "emails"),
      orderBy("email", "asc")
    );

    onSnapshot(emailUserQuery, (QuerySnapshot) => {
      QuerySnapshot.forEach((snap) => {});
    });
  }

  const [emails, setEmails] = useState([]);
  useEffect(() => {
    getEmail();
  }, []);

  useEffect(() => {
    console.log(emails);
  }, [emails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adding info to database

    const userRef = db.collection("newsletter");
    const setUser = userRef.doc(email.email);
    setUser.get().then((doc) => {
      if (doc.exists) {
        swal({
          title: "User already Exist",
          text: "Try using another email",
          timer: 6000,
          confirmButtonColor: "#DF6B55",
          icon: "info"
        });
      } else {
        userRef
          .doc(email.email)
          .set({
            name: username,
            email: email,
            id: uuidv1()
          })
          .then(() => {
            swal({
              title: "Good job!",
              text: "You've subscribed to our newsletter🥳",
              timer: 6000,
              icon: "success"
            });

            const timer = setTimeout(() => {
              window.location.reload(false);
            }, 3000);
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    });
  };
  return (
    <div className={styles.CTA}>
      <footer className={styles.main}>
        <div className={styles.footer1} data-aos="top-top">
          <div className={styles.wrapper1_footer1}>
            <span className={styles.intro_header}>
              We will write you a letter!
            </span>
            <small className={styles.introHeader_desc}>
              Newsletter subscribers will receive specially selected content,
              hear about the news and get a dose of inspiration every month.
            </small>
          </div>
        </div>
        <div className={styles.footer2}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.name_form}
              placeholder="Enter your name"
              type="name"
              maxLength="32"
              onChange={(e) =>
                setUsername({ ...username, name: e.target.value })
              }
            />
            <br />
            <input
              className={styles.email_form}
              placeholder="Email address goes here!"
              type="email"
              onChange={(e) => setEmail({ ...email, email: e.target.value })}
            />
            <br />
            <button type="submit" className={styles.button}>
              Send
            </button>
          </form>
        </div>
      </footer>
      <div className={styles.footer3}>
        <header className={styles.header}>
          AroundYou
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={60}
            height={60}
            className={styles.logo}
          />
        </header>

        <div className={styles.CTA_section}>
          <h2>About</h2>
          <ul>
            <Link href="/AboutMission">
              <li>About Us</li>
            </Link>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={styles.CTA_section}>
          <h2>Sponsor</h2>
          <ul>
            <li>Become a sponsor</li>
            <li>
              Become a writer
              <small className={styles.comingsoon}>coming soon</small>
            </li>
          </ul>
        </div>
        <div className={styles.CTA_section}>
          <h2>Social</h2>
          <ul>
            <li>Twitter</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
