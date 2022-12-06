import styles from "../styles/Talk.module.css";
import Header from "../components/Header";
import Head from "next/head";
import About from "../components/About";
import Image from "next/image";
import star from "../public/ssstar.svg";
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import {db} from '../components/firebase'
import { v1 as uuidv1 } from "uuid";
import { useState, useEffect } from "react";
import swal from "sweetalert";

export default function Talk() {

  
 

  async function getEmail(){
    const emailUserQuery = query(
      collection(db, "emails"),
      orderBy("email", "asc")
    )

    onSnapshot(emailUserQuery, (QuerySnapshot) => {
      QuerySnapshot.forEach((snap) => {

      })
    })
  }
 
  const [username, setUsername] = useState({});
  const [email, setEmail] = useState({});
  const [number, setNumber] = useState({});
  const [occupation, setOccupation] = useState({});
  const [message, setMessage] = useState({});

  
  useEffect(() => {
    getEmail();
  }, []);

  useEffect(() => {
    console.log(email, username, number, occupation, message);
  }, [email, username, number, occupation, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adding info to database

    const userRef = db.collection("contacts");
    const setUser = userRef.doc(email.email, username.username, occupation.occupation, number.number);
    setUser.get().then((doc) => {
      if (doc.exists) {
        swal({
          title: "User already Exist",
          text: "Try new info",
          timer: 6000,
          confirmButtonColor: "#DF6B55",
          icon: "info",
        });
      } else {
        userRef
          .doc(email.email, username.username, occupation.occupation, number.number, message.message)
          .set({
            name: username,
            email: email,
            occupation: occupation,
            number: number,
            message: message,
            id: uuidv1(),
          })
          .then(() => {
            swal({
              title: "Good job!",
              text: "Stay tuned to hear from us🥳",
              timer: 6000,
              icon: "success",
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
    <div className={styles.talkcontainer}>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Header />

      <div className={styles.intro_h1}>Let's get in touch</div>
      <div className={styles.intro_h2}>Message or email us</div>
      <span className={styles.contactUs}>Twitter - aroundyou</span>
      <span className={styles.contactUs}>
        Email us - aroundyou.info@gmail.com
      </span>
      <Image
        className={styles.star}
        src={star}
        width={90}
        alt="Image of a star svg"
      />
      <div className={styles.formSection}>
        <form className={styles.formGrid} onSubmit={handleSubmit}>
          <input
            className={styles.input1}
            type="name"
            placeholder="What's your name"
            maxlength="32"
            required="true"
            onChange={(e) => setUsername({ ...username, username: e.target.value })}
          />

          <input
            className={styles.input2}
            type="email"
            placeholder="Where can we message you"
            required="true"
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
          />

          <input
            className={styles.input3}
            type="number"
            placeholder="where can we  call you?"
            required="true"
            onChange={(e) => setNumber({ ...number, number: e.target.value })}
          />

          <input
            className={styles.input4}
            type="text"
            placeholder="What's your occupation"
            required="true"
            onChange={(e) => setOccupation({ ...occupation, occupation: e.target.value })}
          />

          <input
            className={styles.input5}
            type="text"
            placeholder="Leave a message"
            onChange={(e) => setMessage({ ...message, message: e.target.value })}
          />
          <button type="submit" className={styles.buttonSend}>
            Send
          </button>
        </form>
        <Image
          className={styles.star}
          src={star}
          width={90}
          alt="Image of a star svg"
        />
      </div>
      <About />
    </div>
  );
}
