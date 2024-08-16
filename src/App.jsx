import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionHero from './components/SectionHero';
import SectionAbout from './components/SectionAbout';
import SectionStats from './components/SectionStats';
import SectionSkills from './components/SectionSkills';
import SectionResume from './components/SectionResume';
import SectionProjects from './components/SectionProjects';
import ScrollTop from './components/ScrollTop';
import Preloader from './components/Preloader';

import AOS from 'aos';
import PureCounter from '@srexi/purecounterjs';

export default function App() {

  const [data, setData] = useState(undefined);

  const init = useCallback(() => {
    // Initialize AOS library
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    // Initialize PureCounter library 
    new PureCounter();
    // Correct scrolling position upon page load for URLs containing hash links
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 1000);
      }
    }
  }, [data]);

  useEffect(() => {
    fetch('./whoami.json')
      .then(response => {
        response.json().then(setData);
      })
      .catch(err => {
        console.log(err);
        alert('Could not fetch data from server!');
      });
  }, []);

  useEffect(() => {
    if (data === undefined) {
      // Not ready yet
      return;
    }
    init();
  }, [data]);

  if (data === undefined) {
    return <Preloader />;
  }

  return (
    <>
      <Header social={data.social} />
      <main>
        <SectionHero keywords={data.keywords} />
        <SectionAbout bio={data.bio} />
        <SectionStats stats={data.stats} />
        <SectionSkills skills={data.skills} technologies={data.technologies} />
        <SectionResume resume={data.resume} education={data.education} work={data.work_experience} />
        {/* <SectionProjects /> */}
      </main>
      <Footer/>
      <ScrollTop />
    </>
  );
}
