import React from 'react';
import * as style from './SectionHome.module.css';
import img from '../../common/images/profile.png';

export default function SectionHome() {
  return (
    <section className={style.home}>
      <div className={`${style.home__container} section bd-grid`}>
        <div className={`${style.home__data} bd-grid`}>
          <img src={img} alt="" className={`${style.home__img}`} />

          <h1 className={`${style.home__title}`}>STAN <b>IULIAN</b></h1>
          <h3 className={`${style.home__profession}`}>Software engineer</h3>

          <div>
            {/* <!-- Button to download your CV saved in the pdf folder. Available for mobile --> */}
            <a download="" href="assets/pdf/REsumeCv.pdf" className={`${style['home__button-mobile']}`}>Download CV</a>

          </div>
        </div>
      </div>

      <div className={`${style.home__address} bd-grid`}>
        <span className={`${style.home__information}`}>
          <i className={`${style.home__icon} bx bx-map`}></i> Bucharest, ROMANIA
        </span>
        <span className={`${style.home__information}`}>
          <i className={`${style.home__icon} bx bx-envelope`}></i> iulian.stan0450@gmail.com
        </span>
        <span className={`${style.home__information}`}>
          <i className={`${style.home__icon} bx bx-phone`}></i> +123456789
        </span>
      </div>
      {/* <!-- Theme change button --> */}
      <i className={`${style['change-theme']} bx bx-moon`} title="Theme" id="theme-button"></i>

      {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
      <i className={`${style['generate-pdf']} bx bx-download`} title="Generate PDF" id="resume-button"></i>
    </section>
  );
}
