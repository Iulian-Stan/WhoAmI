import React from 'react';
import SectionHome from './SectionHome';
import SectionSocials from './SectionSocials';
import SectionProfile from './SectionProfile';
import SectionEducation from './SectionEducation';
import SectionSkills from './SectionSkills';


export default function CVLeft() {
  return (
    <div className="resume__left">
      <SectionHome />
      <SectionSocials />
      <SectionProfile />
      <SectionEducation />
      <SectionSkills />
    </div>
  );
}
