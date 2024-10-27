import React from 'react';
import * as style from './Experience.module.css';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className={style.experience__content}>
        <div className={style.experience__time}>
          <span className={style.experience__rounder}></span>
          <span className={style.experience__line}></span>
        </div>

        <div className={style.experience__data}>
          <h3 className={style.experience__title}>Software Engineer</h3>
          <span className={style.experience__company}>From 2023 to 2024 | NXP</span>
          <p className={style.experience__description}>Redesign an existing application in compliance with new SRS. Create prototypes, design documents and software architecture. Clarify technical details of the requirements. Split requirements into stories/tasks. Clarify technical details and plan the implementation. Implement features and tests. Write documentation. Support customers and community users.</p>
        </div>
      </div>

      <div className={style.experience__content}>
        <div className={style.experience__time}>
          <span className={style.experience__rounder}></span>
          <span className={style.experience__line}></span>
        </div>

        <div className={style.experience__data}>
          <h3 className={style.experience__title}>Software Engineer</h3>
          <span className={style.experience__company}>From 2023 to 2024 | NXP</span>
          <p className={style.experience__description}>Redesign an existing application in compliance with new SRS. Create prototypes, design documents and software architecture. Clarify technical details of the requirements. Split requirements into stories/tasks. Clarify technical details and plan the implementation. Implement features and tests. Write documentation. Support customers and community users.</p>
        </div>
      </div>

      <div className={style.experience__content}>
        <div className={style.experience__time}>
          <span className={style.experience__rounder}></span>
          <span className={style.experience__line}></span>
        </div>

        <div className={style.experience__data}>
          <h3 className={style.experience__title}>Software Engineer</h3>
          <span className={style.experience__company}>From 2023 to 2024 | NXP</span>
          <p className={style.experience__description}>Redesign an existing application in compliance with new SRS. Create prototypes, design documents and software architecture. Clarify technical details of the requirements. Split requirements into stories/tasks. Clarify technical details and plan the implementation. Implement features and tests. Write documentation. Support customers and community users.</p>
        </div>
      </div>
    </section>
  );
}
