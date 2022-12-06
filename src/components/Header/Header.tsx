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
            <p>A Front-end Developer from Brazil with 4 years of experience in web development.</p>
            <button className={styles.button}>Contact Me</button>
          </div>
          <SocialMedias />
        </div>
        <div className={styles.avatarContainer}>
          <div className={styles.block}/>
          <img src={Avatar} alt='A picture of Maria' className={styles.avatar}/>
        </div>
      </div>
    </header>
  )
}

export default Header