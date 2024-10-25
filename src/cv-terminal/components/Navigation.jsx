import React from 'react';

export default function Navigation() {
  return (
    <nav className="nav bd-container">
      <a href="#" className="nav__logo">Iulian</a>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              <i className="bx bx-home nav__icon"></i>Home
            </a>
          </li>

          <li className="nav__item">
            <a href="#profile" className="nav__link">
              <i className="bx bx-user nav__icon"></i>Profile
            </a>
          </li>

          <li className="nav__item">
            <a href="#education" className="nav__link">
              <i className="bx bx-book nav__icon"></i>Education
            </a>
          </li>

          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="bx bx-receipt nav__icon"></i>Skills
            </a>
          </li>

          <li className="nav__item">
            <a href="#experience" className="nav__link">
              <i className="bx bx-briefcase-alt nav__icon"></i>Experience
            </a>
          </li>

          <li className="nav__item">
            <a href="#certificates" className="nav__link">
              <i className="bx bx-award nav__icon"></i>Certificates
            </a>
          </li>

          <li className="nav__item">
            <a href="#references" className="nav__link">
              <i className="bx bx-link-external nav__icon"></i>References
            </a>
          </li>
        </ul>
      </div>

      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt"></i>
      </div>
    </nav>
  );
}
