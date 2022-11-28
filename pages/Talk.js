import styles from "../styles/Talk.module.css"
import Header from  '../components/Header';
import About from  '../components/About';
import Image from 'next/image'
import star from '../public/ssstar.svg'




export default function Talk(){
    return(
        <div className={styles.talkcontainer}>

            <Header />
            
            <div className={styles.intro_h1}>Let's get in touch</div>
            <div className={styles.intro_h2}>Message or email us</div>
            <span className={styles.contactUs}>Twitter - aroundyou</span>
            <span className={styles.contactUs}>Email us - aroundyou.info@gmail.com</span>
            <Image
              className={styles.star}
               src={star}
               width={90}
               alt="Image of a star svg"
               ></Image>
            <div className={styles.formSection}>
                <form className={styles.formGrid}>

                    <input className={styles.input1} type="name" placeholder="What's your name" maxlength="32" required="true" />

                    <input className={styles.input2} type="email" placeholder="Where can we message you" required="true" />

                    <input className={styles.input3} type="number" placeholder="where can we  call you?" required="true" />

                    <input className={styles.input4} type="text" placeholder="What's your occupation" required="true" />

                    <input className={styles.input5} type="text" placeholder="Leave a message"  />
                    <button type="submit" className={styles.buttonSend}>Send</button>
                </form>
                <Image
              className={styles.star}
               src={star}
               width={90}
               alt="Image of a star svg"
               ></Image>
            </div>
            <About />
        </div>
    )
}