import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import styles from "../styles/AboutandMission.module.css"
import hairystar from "../public/hairystar.svg"
import star from "../public/ssstar.svg";
import About from "../components/About"
import Header from  '../components/Header'



export default function AboutMission() {
   return(
         
            <div className={styles.main}>
              <Head>
                <title>etwas über + Mission</title>

              </Head>
             <Header />
             <Image className={styles.star} src={star} width={120} />
             <div className={styles.intro_h1}>About Us
             <span  className={styles.intro_h1_img}>
               <Image
               src={hairystar}
               width={90}
               alt="Image of a star svg"
               ></Image>
             </span>
             </div>
             <div className={styles.contents_diagonal}>
             <Image className={styles.star2} src={star} width={120} />
               <section className={styles.contents_diagonal1}>
               AroundYou is a community where we all discuss, identify, and find solutions to environmental and social issues. We're also interested in finding solutions to other types of issues that we care about, not just those related to the environment. We're driven by empathy and the need for action. We welcome you to join us in this journey to make our communities more sustainable.
               </section>
               <svg className={styles.circle} width="149px" height="47px" viewBox="0 0 149 47" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                            <path class="stroke" d="M70.4762 46C116.391 44.199 148 35.1123 148 22.6198C148 10.1272 114.869 -1.85333e-11 74 -1.85333e-11C33.1309 -1.85333e-11 -1.84035e-12 10.1272 -1.84035e-12 22.6198C-1.84035e-12 35.1123 23.4921 43.9318 95.1984 40.885" transform="matrix(-1 8.742278E-08 -8.742278E-08 -1 148.5 46.5)" id="Path" fill="none" fill-rule="evenodd" stroke="#131415" strokewidth="1"></path>
                                        </svg>
               <section className={styles.contents_diagonal2}>
               A world where people are well-informed about the environment and it's related issues is a better place. AroundYou is a community that aims to solve environmental and social issues in your city or any city in the world. Beyond just giving you the knowledge, we'll also work with you to find solutions to the problems.
               </section>
              
             </div>

             <div className={styles.intro2_h1}>
             Mission(Ziel)
              <svg className={styles.logoline} width="115px" height="25px" viewBox="0 0 115 25" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path class="line" d="M0 0.150499C232.087 1.40864 39.6955 -4.56122 29.1709 10.5093C17.6264 27.0401 176.418 10.5361 65.2644 24" transform="translate(0.5 0.5)" id="Path-25" fill="none" fill-rule="evenodd" stroke="#000000" stroke-width="1"></path>
                        </svg>
             </div>
            <About />
            </div>
   )
}


