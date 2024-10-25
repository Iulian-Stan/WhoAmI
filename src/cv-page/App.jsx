import React from 'react';
import Header from './components/Header';
import CVMain from './components/CVMain';

export default function App() {
  return (
    <>
      <Header />
      <CVMain />

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
