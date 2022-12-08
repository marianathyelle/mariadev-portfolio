import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p>Made by <b>Maria</b></p>
      </div>
    </footer>
  )
}

export default Footer