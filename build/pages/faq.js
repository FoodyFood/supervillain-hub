// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../components/Title.js"
import Bubble from "../components/Bubble.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Faq() {
    return (
        <div className={styles.container}>            
            <Title title="Account Settings" />
            <main className={styles.main}>  
                <div className={styles.grid}>
                    <Bubble title="As a supervillain, why should I join?" description="This is an oportunity to flaut your evil doing and show off your evil acts of evilness to peers around the globe." />
                    <Bubble title="How Do I join?" description="You must be invited by a fellow supervillain, or use the sign up form." />
                    <Bubble title="What benifits are there?" description="As part of the guild you will get access to our evil newsletter. And access to our evil media empire and World Domaination Platform as a Service 'WD-PaaS'." />
                    <Bubble title="What is a 'pro tier' supervillain and how do I become one?" description="To become a pro tier supervillain you must help out with building the platform, all coders and all levels of coders are welcome." />
                    <Bubble title="Should I use my real name or details on the platform?" description="No of course not, feel free to use your GitHub name as your supervilain alias." />
                </div>
            </main>
        </div>
    )
}