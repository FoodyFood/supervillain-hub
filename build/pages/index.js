// Next.js Imports
import Image from 'next/image'

// Components
import Card from "../components/Card.js"
import Title from "../components/Title.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Title title="The Premier Home of Supervillainy" />
      </div>
      <Main />
    </div>
  )
}


function Main() {
  return(
    <main className={styles.main}>
      <p>This is where you can flaunt and taunt your fellow supervillains.</p>
      <br />

      <p>Staff running low? Why not check out our Hench-4-hire section!</p>
      <br />
      <br />

      <Card title="Why Join Us?" link="/faq" description="And other frequently asked questions"/>
      <Card title="Villainy Dashboard" link="/dashboard" description="Dashboard of villainous acts"/>
      <Card title="Top Villains" link="/villains" description="Wolds most evil villains"/>

      <br />
      <br />
      <br />
    </main>
  )
}