import SocialMedias from '../SocialMedias/SocialMedias'

import Avatar from '../../assets/maria.png'

import styles from './Header.module.scss'


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.about}>
            <h1>Hi, I am <span className={styles.name}>Maria</span></h1>
            <p>A Front-end Developer with 4 years of experience in web development.</p>
            <a className={styles.emailLink} href="mailto:nathyellemonteiro19@gmail.com">
              Contact Me
            </a>
          </div>
          <SocialMedias />
        </div>
        <div className={styles.avatarContainer}>
          <img src={Avatar} alt='A picture of Maria' className={styles.avatar}/>
        </div>
      </div>
    </header>
  )
}

export default Header