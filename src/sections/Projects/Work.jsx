import React from 'react';
import styles from './WorkStyles.module.css'
import Works from './Works';

const Work = () => {
    return (
        <section id="projects" className={styles.container} >
            <h1 className="sectionTitle">Projects</h1>
            <span >Most Recent Work</span>

            <Works className={styles.worksContainer}/>
        </section>
    )
}

export default Work