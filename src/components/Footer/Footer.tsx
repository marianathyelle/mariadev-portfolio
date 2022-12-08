import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>Made by <b>Maria</b></span>
      </div>
    </div>
  )
}

export default Footer