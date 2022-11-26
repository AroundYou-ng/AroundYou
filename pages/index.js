import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/images.png';
import background from '../public/nnnoise.svg';
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (

    <div className={styles.container}>
      <Image
      src={background}
      className={styles.background}
      fill
      >
      </Image>


    <header className={styles.header}>AroundYou     <Image
      src={profilePic}
      alt="Picture of the author"
      width={60}
      height={60}
      className={styles.logo}
    /></header>


    <nav className={styles.navigation}>
      <ul className={styles.navbar}>
        <Link className={styles.link} href= "/"><li className={styles.navbar_compo}>Home</li></Link>
        <Link className={styles.link} href= "/"><li className={styles.navbar_compo}>Issues</li></Link>
        <Link className={styles.link} href= "/"><li className={styles.navbar_compo}>About Us/Our Mission</li></Link>
        <Link className={styles.link} href= "/"><li  className={styles.navbar_compo}>Talk to Us</li></Link>
      </ul>
    </nav>


    {/* side-section1  */}

    <div className={styles.intro_section}>
    <section className={styles.section_1}>
      <h1 className={styles.h1_sec1}>Let's discuss matters concerning our environment</h1>
      <span className={styles.span_sec1}>Help identify and solve environmental issues</span>
      <small className={styles.small_sec1}>#AroundYou #Keepyourmindclean #keepyourenvironmentclean</small>
    </section>
    <button className={styles.btn_sec1}>Explore...</button>
    <span className={styles.btnSideText_sec1}>willkommen|bienvenu|benvenuto</span>
    </div>
   


    </div>
  )
}
