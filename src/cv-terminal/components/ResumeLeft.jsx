import React from 'react';
import SectionHome from './SectionHome';
import SectionSocials from './SectionSocials';
import SectionProfile from './SectionProfile';
import SectionEducation from './SectionEducation';
import SectionSkills from './SectionSkills';
import * as style from './ResumeLeft.module.css';


export default function ResumeLeft() {
  return (
    <div className={style.resume__left}>
      <SectionHome />
      <SectionSocials />
      <SectionProfile />
      <SectionEducation />
      <SectionSkills />
    </div>
  );
}
