import styles from './About.module.scss'

interface AboutProps {
  title: string;
  text: string;
}

const About = ({ title, text }: AboutProps) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{text}</p>
      <button className={styles.button}>Hire Me</button>
    </div>
  )
}

export default About