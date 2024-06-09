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
        <section id='skills' className={styles.container} >
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Python" />
                <SkillList src={checkMarkIcon} skill="Numpy" />
                <SkillList src={checkMarkIcon} skill="Pandas" />
                <SkillList src={checkMarkIcon} skill="Matplotlib/Seaborn" />
                <SkillList src={checkMarkIcon} skill="Deep Learning with Tensorflow and PyTorch" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Langchain" />
                <SkillList src={checkMarkIcon} skill="Language
Models" />
                <SkillList src={checkMarkIcon} skill="Prompt Engineering" />
                <SkillList src={checkMarkIcon} skill="OpenAI" />
                <SkillList src={checkMarkIcon} skill="Generative AI" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML/CSS," />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="NodeJs" />
                <SkillList src={checkMarkIcon} skill="ExpressJs" />
                <SkillList src={checkMarkIcon} skill="ReactJs" />
                <SkillList src={checkMarkIcon} skill="Flask" />

            </div>
        </section>
    )
}

export default Skills