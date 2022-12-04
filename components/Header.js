import styles from "../styles/Home.module.css"
import profilePic from "../public/images.png";
import Image from "next/image"
import Link from  "next/link"



export default function Header(){
    return(
        <div>
            <header className={styles.header}>
        AroundYou
        <svg className={styles.logoline} width="115px" height="25px" viewBox="0 0 115 25" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path class="line" d="M0 0.150499C232.087 1.40864 39.6955 -4.56122 29.1709 10.5093C17.6264 27.0401 176.418 10.5361 65.2644 24" transform="translate(0.5 0.5)" id="Path-25" fill="none" fill-rule="evenodd" stroke="#000000" stroke-width="1"></path>
                        </svg>
        <Image
          src={profilePic}
          alt="Logo"
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
          <Link className={styles.link} href="/Blog">
            <li className={styles.navbar_compo}>Blog</li>
          </Link>
          <Link className={styles.link} href="/AboutMission">
            <li className={styles.navbar_compo}>About Us/Our Mission</li>
          </Link>
          <Link className={styles.link} href="/Talk">
            <li className={styles.navbar_compo}>Talk to Us</li>
          </Link>
        </ul>
      </nav>
        </div>
    )
}