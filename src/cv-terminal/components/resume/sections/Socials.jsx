import React from 'react';
import * as style from './Socials.module.css';

export default function Socials() {
  return (
    <section className='section'>
      <h2 className='section-title'>Social</h2>

      <div className={style.social__container}>
        <a href='https://linkedin.com' target='_blank' className={style.social__link}>
          <i className={`${style.social__icon} bx bxl-linkedin-square`}></i> @iulianstan
        </a>
        <a href='https://github.com' target='_blank' className={style.social__link}>
          <i className={`${style.social__icon} bx bxl-github`}></i> @iulianstan
        </a>
      </div>
    </section>
  );
}
