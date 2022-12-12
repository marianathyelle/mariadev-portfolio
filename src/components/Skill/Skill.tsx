import styles from './Skill.module.scss'

interface SkillProps {
  name: string;
  yearsQtd: number;
}

const Skill = ({ name, yearsQtd }: SkillProps) => {

  const renderYearsDots = ():JSX.Element[] => {
    const dots: JSX.Element[] = []

    for (let i = 0; i < yearsQtd; i++) {
      dots.push(<span key={name + i} className={styles['dot' + (i + 1)]}/>)
    }

    return dots
  }

  return (
    <div className={styles.skill}>
      <span className={styles.name}>{name}</span>
      <div className={styles.progressContainer}>
        <span className={styles.progressLabel}>{yearsQtd} y</span>
        <div className={styles.progress}>
          {renderYearsDots()}
        </div>
      </div>
    </div>
  )
}

export default Skill