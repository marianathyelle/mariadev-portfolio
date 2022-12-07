import styles from './AboutMe.module.scss'

const AboutMe = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>About Me</h2>
      <p>My name is Maria Nathyelle, 
        I am from Brazil but I am currently living in the United States. 
        I started my professional career as a front-end developer 4 years ago. 
        I’ve been developing web platforms using HTML, CSS, Javascript, Typescript and React.js. 
        What motivates me most is to build something that positively impacts people’s lives. </p>
    </div>
  )
}

export default AboutMe