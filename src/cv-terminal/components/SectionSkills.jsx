import React from 'react';

export default function SectionSkills() {
  return (
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
  );
}
