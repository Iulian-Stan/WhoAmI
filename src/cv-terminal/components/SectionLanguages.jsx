import React from 'react';

export default function SectionLanguages() {
  return (
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
  );
}
