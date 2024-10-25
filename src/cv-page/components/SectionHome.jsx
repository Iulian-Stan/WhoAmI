import React from 'react';
import img from '../../common/images/profile.png';

export default function SectionHome() {
  return (
    <section class="home" id="home">
      <div class="home__container section bd-grid">
        <div class="home__data bd-grid">
          <img src={img} alt="" class="home__img" />

          <h1 class="home__title">STAN <b>IULIAN</b></h1>
          <h3 class="home__profession">Software engineer</h3>

          <div>
            {/* <!-- Button to download your CV saved in the pdf folder. Available for mobile --> */}
            <a download="" href="assets/pdf/REsumeCv.pdf" class="home__button-mobile">Download CV</a>

          </div>
        </div>
      </div>

      <div class="home__adress bd-grid">
        <span class="home__information">
          <i class="bx bx-map home__icon"></i> Bucharest, ROMANIA
        </span>
        <span class="home__information">
          <i class="bx bx-envelope home__icon"></i> iulian.stan0450@gmail.com
        </span>
        <span class="home__information">
          <i class="bx bx-phone home__icon"></i> +123456789
        </span>
      </div>
      {/* <!-- Theme change button --> */}
      <i class="bx bx-moon change-theme" title="Theme" id="theme-button"></i>

      {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
      <i class="bx bx-download generate-pdf" title="Generate PDF" id="resume-button"></i>
    </section>
  );
}
