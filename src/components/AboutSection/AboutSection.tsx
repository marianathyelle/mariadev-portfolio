import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'

import styles from './AboutSection.module.scss'


const AboutSection = () => {
  return (
    <div className={styles.section}>
      <AboutMe />
      <Skills />
    </div>
  )
}

export default AboutSection