import styles from './Skill.module.scss'

interface SkillProps {
  name: string;
  yearsQtd: number;
}

const Skill = ({ name, yearsQtd }: SkillProps) => {

  const renderYearsSquares = ():JSX.Element[] => {
    const squares: JSX.Element[] = []

    for (let i = 0; i < yearsQtd; i++) {
      squares.push(<span key={name + i} />)
    }

    return squares
  }

  return (
    <div className={styles.skill}>
      <span className={styles.name}>{name}</span>
      <div className={styles.progressContainer}>
        <span className={styles.progressLabel}>{yearsQtd} y</span>
        <div className={styles.progress}>
          {renderYearsSquares()}
        </div>
      </div>
    </div>
  )
}

export default Skill