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
        <Skill name='Context API' yearsQtd={4} />
        <Skill name='Redux/Redux-Saga' yearsQtd={4} />
        <Skill name='Styled Components' yearsQtd={3} />
        <Skill name='React Native' yearsQtd={1} />
        <Skill name='Rest API' yearsQtd={4} />
        <Skill name='Git' yearsQtd={4} />
        <Skill name='SASS/SCSS' yearsQtd={4} />
        <Skill name='Node.js' yearsQtd={1} />
        <Skill name='Agile Development (Scrum)' yearsQtd={4} />
      </div>
    </div>
  )
}

export default Skills