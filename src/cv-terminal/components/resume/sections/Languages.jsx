import React from 'react';
import * as style from './Languages.module.css';

export default function Languages() {
  return (
    <section className='section'>
      <h2 className='section-title'>Languages</h2>

      <div className={style.languages__container}>
        <ul className={style.languages__content}>
          <li className={style.languages__name}>
            <span className={style.languages__circle}></span> Spanish
          </li>
          <li className={style.languages__name}>
            <span className={style.languages__circle}></span> English
          </li>
          <li className={style.languages__name}>
            <span className={style.languages__circle}></span> French
          </li>
        </ul>
      </div>
    </section>
  );
}
