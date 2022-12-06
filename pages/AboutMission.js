import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/AboutandMission.module.css";
import hairystar from "../public/hairystar.svg";
import star from "../public/ssstar.svg";
import About from "../components/About";
import Header from "../components/Header";

export default function AboutMission() {
  return (
    <div className={styles.main}>
      <Head>
        <title>etwas über + Mission</title>
      </Head>
      <Header />
      <Image className={styles.star} src={star} width={120} />
      <div className={styles.intro_h1}>
        About Us
        <span className={styles.intro_h1_img}>
          <Image
            className={styles.hairystar}
            src={hairystar}
            width={90}
            alt="Image of a star svg"
          />
        </span>
      </div>
      <div className={styles.contents_diagonal}>
        <Image className={styles.star2} src={star} width={120} alt="svg image" />
        <section className={styles.contents_diagonal1}>
          AroundYou is a community where we all discuss, identify, and find
          solutions to environmental and social issues. We're also interested in
          finding solutions to other types of issues that we care about, not
          just those related to the environment. We're driven by empathy and the
          need for action. We welcome you to join us in this journey to make our
          communities more sustainable.
        </section>
        <svg
          className={styles.circle}
          width="149px"
          height="47px"
          viewBox="0 0 149 47"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="stroke"
            d="M70.4762 46C116.391 44.199 148 35.1123 148 22.6198C148 10.1272 114.869 -1.85333e-11 74 -1.85333e-11C33.1309 -1.85333e-11 -1.84035e-12 10.1272 -1.84035e-12 22.6198C-1.84035e-12 35.1123 23.4921 43.9318 95.1984 40.885"
            transform="matrix(-1 8.742278E-08 -8.742278E-08 -1 148.5 46.5)"
            id="Path"
            fill="none"
            fill-rule="evenodd"
            stroke="#131415"
            strokewidth="1"
          />
        </svg>
        <section className={styles.contents_diagonal2}>
          A world where people are well-informed about the environment and it's
          related issues is a better place. AroundYou is a community that aims
          to solve environmental and social issues in your city or any city in
          the world. Beyond just giving you the knowledge, we'll also work with
          you to find solutions to the problems.
        </section>
      </div>

      <div className={styles.intro2_h1}>Mission(Ziel)</div>
      <section className={styles.missionText}>
        18% of the earth is covered in water, but it's not just liquid in the
        world - there are over 1 billion human beings living on the ground with
        limited access to clean water or food. Meanwhile, million-dollar burgers
        are served to wealthy people whilst people starve. We at Around Us
        believe that with innovation, unlimited creativity and courage there can
        be a better home for humankind. Join our cause and together we can
        improve the world.
        <br />
        <br />
        <br />
        — With a focus on looking after the environment and tackling social
        issues, AroundUs strives to provide insights and tools to help reduce
        pollutants, find opportunities for more renewable energy in the future.
        Whether you're an individual, corporation or government body, we are
        here to help.
      </section>
      <About />
    </div>
  );
}
