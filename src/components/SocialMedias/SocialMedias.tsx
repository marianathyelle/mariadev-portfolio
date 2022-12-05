import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import styles from './SocialMedias.module.scss'

const SocialMedias = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.link}
        href='https://www.linkedin.com/in/maria-nathyelle-79067a134/?locale=en_US'
        rel="noreferrer"
        target='_blank'
      >
          <FiLinkedin size={22}/>
      </a>
      <a
        className={styles.link}
        href='https://github.com/marianathyelle'
        rel="noreferrer"
        target='_blank'
      >
          <FiGithub size={22}/>
      </a>
      <a
        className={styles.link}
        href='https://www.instagram.com/mrianathyelle/'
        rel="noreferrer"
        target='_blank'
      >
          <FiInstagram size={22}/>
      </a>
    </div>
  )
}

export default SocialMedias