import styles from './MainSkills.module.scss'

interface skill {
  name: string;
}

interface MainSkillsProps {
  skills: skill[];
}

const MainSkills = ({ skills }: MainSkillsProps) => {
  return (
    <div className={styles.skills}>
      {skills.map(({ name }) => <div className={styles.skill} key={name}>{name}</div>)}
    </div>
  )
}

export default MainSkills