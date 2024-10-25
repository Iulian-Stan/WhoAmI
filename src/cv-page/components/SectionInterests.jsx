import React from 'react';

export default function SectionInterests() {
  return (
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
  );
}
