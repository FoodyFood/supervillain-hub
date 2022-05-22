// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../components/Title.js"
import Card from "../components/Card.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Dashboard() {
    return (
        <div className={styles.container}>

            <Title title="Dashboard" />
            
            <main className={styles.main}>
                <CardStack />
            </main>

        </div>
    )
}


function CardStack() {
    return(
        <p>Not ready yet</p>
    )
}