// Styles
import styles from '../styles/Common.module.css'


export default function Footer() {
    return (
      <footer 
        className={styles.footer} 
      >
        Supervillain Hub {new Date().getFullYear()}
      </footer>
    )
  }