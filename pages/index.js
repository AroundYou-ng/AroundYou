import Head from "next/head";
import Image from "next/image";
import About from "./components/About.js"
import profilePic from "../public/images.png";
import background from "../public/nnnoise.svg";
import TreePng from "../public/forest.webp";
import star from "../public/ssstar.svg";
import svg from "../public/pppointed.svg";
import Link from "next/link";
import styles from "../styles/Home.module.css";



export default function Home() {

  return (
    <div className={styles.container}>
      {/* <Image src={background} className={styles.background} fill /> */}

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

      <nav className={styles.navigation}>
        <ul className={styles.navbar}>
          <Link className={styles.link} href="/">
            <li className={styles.navbar_compo}>Home</li>
          </Link>
          <Link className={styles.link} href="/">
            <li className={styles.navbar_compo}>Issues</li>
          </Link>
          <Link className={styles.link} href="/">
            <li className={styles.navbar_compo}>About Us/Our Mission</li>
          </Link>
          <Link className={styles.link} href="/">
            <li className={styles.navbar_compo}>Talk to Us</li>
          </Link>
        </ul>
      </nav>

      {/* side-section1  */}

      <div className={styles.intro_section}>
        <section className={styles.section_1}>
          <h1 className={styles.h1_sec1}>
            Let's discuss matters concerning our environment
          </h1>
          <span className={styles.span_sec1}>
            Help identify and solve environmental issues
          </span>
          <small className={styles.small_sec1}>
            #AroundYou #Keepyourmindclean #keepyourenvironmentclean
          </small>
        </section>
        <button className={styles.btn_sec1}>Explore...</button>
        <span className={styles.btnSideText_sec1}>
          willkommen|bienvenu|benvenuto
          <Image className={styles.svgarrow} src={svg} width={60} />
        </span>
      </div>
      <span className={styles.img1_sec1}>
        <Image src={TreePng} width={600} height={350} />
        <Image className={styles.star} src={star} width={120} />
      </span>



      {/* section2  */}

      <div className={styles.three_columns_sec2}>
        <div className={styles.col1_sec2}>
          <span className={styles.desc} >1. Read rising matter concerning our environment</span>
        </div>
        <div className={styles.col2_sec2}>
        <span className={styles.desc}>2. Identify issues and help solve them</span>
        </div>
        <div className={styles.col3_sec2}>
        <span className={styles.desc}>3. Be apart of this wonder community</span>
        </div>
      </div>






      {/* Aboout us/footer  */}
      <About />
    </div>
  );
}
