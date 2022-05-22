// Next.js Imports
import Image from 'next/image'

// Components
import Blurb from "../components/Blurb.js"
import Card from "../components/Card.js"
import Title from "../components/Title.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Title title="The Home of Supervillainy" />
        <Blurb text="The only social media account a supervillain needs!" />
      </div>
      <Main />
    </div>
  )
}


function Main() {
  return(
    <main className={styles.main}>      
      <p>A place where you can flaunt and taunt your fellow supervillains..</p>
      <br />

      <Card title="Why Join Us?" link="/faq" description="And other frequently asked questions"/>
      <Card title="Villainy Dashboard" link="/dashboard" description="Dashboard of villainous acts"/>
      <Card title="Top Villains" link="/villains" description="Wolds most evil villains"/>
      <br />
      <br />
      <br />
      <br />
      
      <Blurb text="ADVERTISEMENTS" />
      <br />
      <p>Staff running low? Why not check out our Hench-4-Hire section!</p>
      <p>Need advanced weaponry? See our bargain basement death rays!</p>
      <p>Morale low after a failed heist? Incentivise your minions today!</p>
      <p>Bored of your typical jet/rocket engines? Get cool flame decals!</p>
      <br />
      <br />
    </main>
  )
}