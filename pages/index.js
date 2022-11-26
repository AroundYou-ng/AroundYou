import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <header className={styles.header}>AroundYou</header>
    <nav  className={styles.header}>
      <ul  className={styles.header}>
        <Link href= "/"><li className={styles.navbar_compo}>Home</li></Link>
        <Link href= "/"><li className={styles.navbar_compo}>Issues</li></Link>
        <Link href= "/"><li className={styles.navbar_compo}>About Us/Our Mission</li></Link>
        <Link href= "/"><li  className={styles.navbar_compo}>Talk to Us</li></Link>
      </ul>
    </nav>
    </div>
  )
}
