import React from 'react';

export default function App() {
  return (
    <>
      {/* <!--========== HEADER ==========--> */}
      <header class="l-header" id="header">
        <nav class="nav bd-container">
          <a href="#" class="nav__logo">Iulian</a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#home" class="nav__link active-link">
                  <i class="bx bx-home nav__icon"></i>Home
                </a>
              </li>

              <li class="nav__item">
                <a href="#profile" class="nav__link">
                  <i class="bx bx-user nav__icon"></i>Profile
                </a>
              </li>

              <li class="nav__item">
                <a href="#education" class="nav__link">
                  <i class="bx bx-book nav__icon"></i>Education
                </a>
              </li>

              <li class="nav__item">
                <a href="#skills" class="nav__link">
                  <i class="bx bx-receipt nav__icon"></i>Skills
                </a>
              </li>

              <li class="nav__item">
                <a href="#experience" class="nav__link">
                  <i class="bx bx-briefcase-alt nav__icon"></i>Experience
                </a>
              </li>

              <li class="nav__item">
                <a href="#certificates" class="nav__link">
                  <i class="bx bx-award nav__icon"></i>Certificates
                </a>
              </li>

              <li class="nav__item">
                <a href="#references" class="nav__link">
                  <i class="bx bx-link-external nav__icon"></i>References
                </a>
              </li>
            </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>

      <main class="l-main bd-container">
        {/* <!-- All elements within this div, is generated in PDF --> */}
        <div class="resume" id="area-cv">
          <div class="resume__left">
            {/* <!--========== HOME ==========--> */}
            <section class="home" id="home">
              <div class="home__container section bd-grid">
                <div class="home__data bd-grid">
                  <img src="assets/img/perfil.png" alt="" class="home__img" />

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
                  <i class="bx bx-phone home__icon"></i> +40732202079
                </span>
              </div>
              {/* <!-- Theme change button --> */}
              <i class="bx bx-moon change-theme" title="Theme" id="theme-button"></i>

              {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
              <i class="bx bx-download generate-pdf" title="Generate PDF" id="resume-button"></i>
            </section>

            {/* <!--========== SOCIAL ==========--> */}
            <section class="social section">
              <h2 class="section-title">Social</h2>

              <div class="social__container bd-grid">
                <a href="https://linkedin.com" target="_blank" class="social__link">
                  <i class="bx bxl-linkedin-square social__icon"></i> @iulianstan
                </a>
                <a href="https://facebook.com" target="_blank" class="social__link">
                  <i class="bx bxl-facebook social__icon"></i> @iulianstan
                </a>
                <a href="https://instagram.com" target="_blank" class="social__link">
                  <i class="bx bxl-instagram social__icon"></i> @iulianstan
                </a>
              </div>
            </section>

            {/* <!--========== PROFILE ==========--> */}
            <section class="profile section" id="profile">
              <h2 class="section-title">Profile</h2>

              <p class="profile__description">Hi, my name is Iulian and I am a senior software engineer. I am forever learner when it comes to latest advances in software and hardware technologies. I am keen on trying them in my own DIY projects.</p>
            </section>

            {/* <!--========== EDUCATION ==========--> */}
            <section class="education section" id="education">
              <h2 class="section-title">Education</h2>

              <div class="education__container bd-grid">
                <div class="education__content">
                  <div class="education__time">
                    <span class="education__rounder"></span>
                    <span class="education__line"></span>
                  </div>

                  <div class="education__data bd-grid">
                    <h3 class="education__title">MASTER</h3>
                    <span class="education__studies">University</span>
                    <span class="education__year">2000-3000</span>
                  </div>
                </div>

                <div class="education__content">
                  <div class="education__time">
                    <span class="education__rounder"></span>
                    <span class="education__line"></span>
                  </div>

                  <div class="education__data bd-grid">
                    <h3 class="education__title">BACHELOR</h3>
                    <span class="education__studies">University</span>
                    <span class="education__year">2000-3000</span>
                  </div>
                </div>
              </div>
            </section>


            {/* <!--========== SKILLS  ==========--> */}
            <section class="skills section" id="skills">
              <h2 class="section-title">Skills</h2>

              <div class="skills__content bd-grid">
                <ul class="skills__data">
                  <li class="skills__name">
                    <span class="skills__circle"></span> HTML
                  </li>
                  <li class="skills__name">
                    <span class="skills__circle"></span> CSS
                  </li>
                  <li class="skills__name">
                    <span class="skills__circle"></span> SASS
                  </li>
                  <li class="skills__name">
                    <span class="skills__circle"></span> JavaScript
                  </li>
                </ul>

                <ul class="skills__data">
                  <li class="skills__name">
                    <span class="skills__circle"></span> Angular
                  </li>
                  <li class="skills__name">
                    <span class="skills__circle"></span> Firebase
                  </li>
                  <li class="skills__name">
                    <span class="skills__circle"></span> React
                  </li>
                </ul>
              </div>
            </section>

          </div>

          <div class="resume__right">
            {/* <!--========== EXPERIENCE ==========--> */}
            <section class="experience section" id="experience">
              <h2 class="section-title">Experience</h2>

              <div class="experience__content">
                <div class="experience__time">
                  <span class="experience__rounder"></span>
                  <span class="experience__line"></span>
                </div>

                <div class="experience__data bd-grid">
                  <h3 class="experience__title">Software Engineer</h3>
                  <span class="experience__company">From 2023 to 2024 | NXP</span>
                  <p class="experience__description">Redesign an existing application in compliance with new SRS. Create prototypes, design documents and software architecture. Clarify technical details of the requirements. Split requirements into stories/tasks. Clarify technical details and plan the implementation. Implement features and tests. Write documentation. Support customers and community users.</p>
                </div>
              </div>

              <div class="experience__content">
                <div class="experience__time">
                  <span class="experience__rounder"></span>
                  <span class="experience__line"></span>
                </div>

                <div class="experience__data bd-grid">
                  <h3 class="experience__title">Software Engineer</h3>
                  <span class="experience__company">From 2023 to 2024 | NXP</span>
                  <p class="experience__description">Redesign an existing application in compliance with new SRS. Create prototypes, design documents and software architecture. Clarify technical details of the requirements. Split requirements into stories/tasks. Clarify technical details and plan the implementation. Implement features and tests. Write documentation. Support customers and community users.</p>
                </div>
              </div>

              <div class="experience__content">
                <div class="experience__time">
                  <span class="experience__rounder"></span>
                  <span class="experience__line"></span>
                </div>

                <div class="experience__data bd-grid">
                  <h3 class="experience__title">Software Engineer</h3>
                  <span class="experience__company">From 2023 to 2024 | NXP</span>
                  <p class="experience__description">Redesign an existing application in compliance with new SRS. Create prototypes, design documents and software architecture. Clarify technical details of the requirements. Split requirements into stories/tasks. Clarify technical details and plan the implementation. Implement features and tests. Write documentation. Support customers and community users.</p>
                </div>
              </div>
            </section>

            {/* <!--========== CERTIFICATES ==========--> */}
            <section class="certificate section" id="certificates">
              <h2 class="section-title">Certificates</h2>

              <div class="certificate__container bd-grid">
                <div class="certificate__content">
                  <h3 class="certificate__titlle">Something something (2012)</h3>
                  <p class="certificate__description">ASdsf sdf asdf asdf asdf sdaf sadf htgh tyjtj jhycgh gh fdsgh gfh gfh sgf hsgh.</p>
                </div>

                <div class="certificate__content">
                  <h3 class="certificate__titlle">Something something (2012)</h3>
                  <p class="certificate__description">ASdsf sdf asdf asdf asdf sdaf sadf htgh tyjtj jhycgh gh fdsgh gfh gfh sgf hsgh.</p>
                </div>

                <div class="certificate__content">
                  <h3 class="certificate__titlle">Something something (2012)</h3>
                  <p class="certificate__description">ASdsf sdf asdf asdf asdf sdaf sadf htgh tyjtj jhycgh gh fdsgh gfh gfh sgf hsgh.</p>
                </div>
              </div>
            </section>

            {/* <!--========== REFERENCES ==========--> */}
            <section class="references section" id="references">
              <h2 class="section-title">References</h2>

              <div class="references__container bd-grid">
                <div class="references__content bd-grid">
                  <span class="references__subtitle">Sr. DIrector</span>
                  <h3 class="references__title">Mr. Clay Doe</h3>
                  <ul class="references__contact">
                    <li>Phone: 999-777-666</li>
                    <li>Email: user@mail.com</li>
                  </ul>
                </div>

                <div class="references__container bd-grid">
                  <div class="references__content bd-grid">
                    <span class="references__subtitle">Sr. DIrector</span>
                    <h3 class="references__title">Mr. Clay Doe</h3>
                    <ul class="references__contact">
                      <li>Phone: 999-777-666</li>
                      <li>Email: user@mail.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--========== LANGUAGES ==========--> */}
            <section class="languages section">
              <h2 class="section-title">Languages</h2>

              <div class="languages__container">
                <ul class="languages__content bd-grid">
                  <li class="languages__name">
                    <span class="languages__circle"></span> Spanish
                  </li>
                  <li class="languages__name">
                    <span class="languages__circle"></span> English
                  </li>
                  <li class="languages__name">
                    <span class="languages__circle"></span> French
                  </li>
                </ul>
              </div>
            </section>

            {/* <!--========== INTERESTS ==========--> */}
            <section class="interests section">
              <h2 class="section-title">Interests</h2>

              <div class="interests__container bd-grid">
                <div class="interests__content">
                  <i class="bx bx-headphone interests__icon"></i>
                  <span class="interests__name">Music</span>
                </div>

                <div class="interests__content">
                  <i class="bx bxs-plane-alt interests__icon"></i>
                  <span class="interests__name">Travel</span>
                </div>

                <div class="interests__content">
                  <i class="bx bx-book interests__icon"></i>
                  <span class="interests__name">Read</span>
                </div>

                <div class="interests__content">
                  <i class="bx bx-dumbbell interests__icon"></i>
                  <span class="interests__name">Fitness</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* <!--========== SCROLL TOP ==========--> */}
      <a href="#" class="scrolltop" id="scroll-top">
        <i class="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>

      {/* <!--========== HTML2PDF ==========--> */}
      <script src="assets/js/html2pdf.bundle.min.js"></script>

      {/* <!--========== MAIN JS ==========--> */}
      <script src="assets/js/main.js"></script>
    </>
  );
}
