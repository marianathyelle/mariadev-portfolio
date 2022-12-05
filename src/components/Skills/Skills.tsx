import Skill from '../Skill/Skill'

import styles from './Skills.module.scss'

const Skills = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        <Skill name='HTML' yearsQtd={4} />
        <Skill name='CSS' yearsQtd={4} />
        <Skill name='Javascript' yearsQtd={4} />
        <Skill name='Typescript' yearsQtd={2} />
        <Skill name='React.JS' yearsQtd={4} />
        <Skill name='Git' yearsQtd={4} />
      </div>
    </div>
  )
}

export default Skills