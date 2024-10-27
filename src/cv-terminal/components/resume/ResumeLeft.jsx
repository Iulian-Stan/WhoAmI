import React from 'react';
import Home from './sections/Home';
import Socials from './sections/Socials';
import Profile from './sections/Profile';
import Education from './sections/Education';
import Skills from './sections/Skills';
import * as style from './ResumeLeft.module.css';


export default function ResumeLeft() {
  return (
    <div className={style.resume__left}>
      <Home />
      <Socials />
      <Profile />
      <Education />
      <Skills />
    </div>
  );
}
