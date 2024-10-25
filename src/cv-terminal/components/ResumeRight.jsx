import React from 'react';
import SectionExperience from './SectionExperience';
import SectionCertificates from './SectionCertificates';
import SectionReferences from './SectionReferences';
import SectionLanguages from './SectionLanguages';
import SectionInterests from './SectionInterests';
import * as style from './ResumeRight.module.css';

export default function ResumeRight() {
  return (
    <div className={style.resume__right}>
      <SectionExperience />
      <SectionCertificates />
      <SectionReferences />
      <SectionLanguages />
      <SectionInterests />
    </div>
  );
}
