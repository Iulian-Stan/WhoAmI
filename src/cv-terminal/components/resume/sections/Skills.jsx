import React from 'react';
import * as style from './Skills.module.css';

export default function Skills() {
  return (
    <section className='section' id='skills'>
      <h2 className='section-title'>Skills</h2>

      <div className={style.skills__content}>
        <ul className={style.skills__data}>
          <li className={style.skills__name}>
            <span className={style.skills__circle}></span> HTML
          </li>
          <li className={style.skills__name}>
            <span className={style.skills__circle}></span> CSS
          </li>
          <li className={style.skills__name}>
            <span className={style.skills__circle}></span> SASS
          </li>
          <li className={style.skills__name}>
            <span className={style.skills__circle}></span> JavaScript
          </li>
        </ul>

        <ul className={style.skills__data}>
          <li className={style.skills__name}>
            <span className={style.skills__circle}></span> Angular
          </li>
          <li className={style.skills__name}>
            <span className={style.skills__circle}></span> Firebase
          </li>
          <li className={style.skills__name}>
            <span className={style.skills__circle}></span> React
          </li>
        </ul>
      </div>
    </section>
  );
}
