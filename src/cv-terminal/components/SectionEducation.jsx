import React from 'react';

export default function SectionEducation() {
  return (
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
  );
}
