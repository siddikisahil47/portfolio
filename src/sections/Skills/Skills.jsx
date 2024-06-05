import React from 'react';
import styles from "./SkillsStyles.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg"
import checkMarkDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from "../../common/ThemeContext";


const Skills = () => {
    const { theme } = useTheme();

    const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;


    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="TypeScript" />
                <SkillList src={checkMarkIcon} skill="Node" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Angular" />
                <SkillList src={checkMarkIcon} skill="Vue" />
                <SkillList src={checkMarkIcon} skill="Tailwind css" />
                <SkillList src={checkMarkIcon} skill="Node" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Redux" />
                <SkillList src={checkMarkIcon} skill="webpack" />
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
            </div>
        </section>
    )
}

export default Skills