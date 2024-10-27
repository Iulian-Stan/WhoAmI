import React from 'react';
import * as style from './Interests.module.css';

export default function Interests() {
  return (
    <section className="section">
      <h2 className="section-title">Interests</h2>

      <div className={style.interests__container}>
        <div className={style.interests__content}>
          <i className={`${style.interests__icon} bx bx-headphone`}></i>
          <span className={style.interests__name}>Music</span>
        </div>

        <div className={style.interests__content}>
          <i className={`${style.interests__icon} bx bxs-plane-alt`}></i>
          <span className={style.interests__name}>Travel</span>
        </div>

        <div className={style.interests__content}>
          <i className={`${style.interests__icon} bx bx-book`}></i>
          <span className={style.interests__name}>Read</span>
        </div>

        <div className={style.interests__content}>
          <i className={`${style.interests__icon} bx bx-dumbbell`}></i>
          <span className={style.interests__name}>Fitness</span>
        </div>
      </div>
    </section>
  );
}
