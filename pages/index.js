import Head from "next/head";
import Image from "next/image";
import About from "../components/About.js";
import TreePng from "../public/forest.webp";
import star from "../public/ssstar.svg";
import svg from "../public/pppointed.svg";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  const TypedElement = useRef(null);

  useEffect(() => {
    if (!TypedElement.current) return;

    const typed = new Typed(TypedElement.current, {
      strings: ["willkommen", "bienvenu", "benvenuto!"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>AroundYou</title>
      </Head>
      <Header />
      {/* side-section1  */}

      <div className={styles.intro_section}>
        <section className={styles.section_1}>
          <h1 className={styles.h1_sec1} data-aos="slide-right">
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
          <span ref={TypedElement}></span>
          <Image className={styles.svgarrow} src={svg} width={60} alt="svg image" />
        </span>
      </div>
      <span className={styles.img1_sec1}>
        <Image src={TreePng} width={600} height={350} alt="image of forest" />
        <Image className={styles.star} src={star} width={120} alt="svg image" />
      </span>

      {/* section2  */}

      <div className={styles.three_columns_sec2}>
        <div className={styles.col1_sec2}>
          <span className={styles.desc} data-aos="zoom-in-up">
            1. Read rising matter concerning our environment
          </span>
        </div>
        <div className={styles.col2_sec2}>
          <span className={styles.desc} data-aos="zoom-in-up">
            2. Identify issues and help solve them
          </span>
        </div>
        <div className={styles.col3_sec2}>
          <span className={styles.desc} data-aos="zoom-in-up">
            3. Be apart of this wonder community
          </span>
        </div>
      </div>

      {/* Aboout us/footer  */}
      <About />
    </div>
  );
}
