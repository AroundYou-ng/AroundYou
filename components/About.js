import styles from "../styles/about.module.css";
import profilePic from "../public/images.png";
import Image from "next/image";
import { useState, useEffect } from 'react';


export default function About(){

  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
 
  useEffect(() => {
 

  //  localStorage.setItem("username", `${username.name}`)
  }, [username, email]);

  const handleSubmit = (e) => {
    e.preventDefault()
  }
    return(
        <div className={styles.CTA}>

        <footer className={styles.main}>
        <div className={styles.footer1} data-aos="top-top">
            <div className={styles.wrapper1_footer1}>
            <span className={styles.intro_header}>
            We will write you a letter!
            </span>
            <small className={styles.introHeader_desc}>
            Newsletter subscribers will receive specially selected content, hear about the news and get a dose of inspiration every month.
            </small>
            </div>
        </div>
        <div className={styles.footer2}>
            <form className={styles.form}  onSubmit={handleSubmit}>
                <input className={styles.name_form} placeholder="Enter your name" type="name" maxLength="32" 
                   onChange={(e) => setUsername({ ...username, name: e.target.value })} />
                <br />
                <input className={styles.email_form} placeholder="Email address goes here!" type="email" 
                 onChange={(e) => setEmail({ ...email, email: e.target.value })}/>
                <br />
                <button type="submit" className={styles.button}>Send</button>
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
            <li>About Us</li>
            <li>FAQ</li>
        </ul>
      </div>
      <div className={styles.CTA_section}>
        <h2>Sponsor</h2>
        <ul>
            <li>Become a sponsor</li>
            <li>Become a writer<small className={styles.comingsoon}>coming soon</small></li>
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

    )
}
