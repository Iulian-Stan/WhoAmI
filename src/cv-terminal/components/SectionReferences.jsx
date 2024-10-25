import React from 'react';

export default function SectionReferences() {
  return (
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
  );
}
