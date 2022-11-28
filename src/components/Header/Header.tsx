import About from '../About/About'
import MainSkills from '../MainSkills/ MainSkills'

import styles from './Header.module.scss'

import { skills } from '../../data'


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <About 
          title='Hi, I am Maria' 
          text='A Front-end Developer from Brazil with 4 years of experience in web development.'
        />
        <MainSkills skills={skills} />
      </div>
    </div>
  )
}

export default Header