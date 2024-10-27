import React from 'react';
import * as style from './Education.module.css';

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>

      <div className={style.education__container}>
        <div className={style.education__content}>
          <div className={style.education__time}>
            <span className={style.education__rounder}></span>
            <span className={style.education__line}></span>
          </div>

          <div className={style.education__data}>
            <h3 className={style.education__title}>MASTER</h3>
            <span className={style.education__studies}>University</span>
            <span className={style.education__year}>2000-3000</span>
          </div>
        </div>

        <div className={style.education__content}>
          <div className={style.education__time}>
            <span className={style.education__rounder}></span>
            <span className={style.education__line}></span>
          </div>

          <div className={style.education__data}>
            <h3 className={style.education__title}>BACHELOR</h3>
            <span className={style.education__studies}>University</span>
            <span className={style.education__year}>2000-3000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
