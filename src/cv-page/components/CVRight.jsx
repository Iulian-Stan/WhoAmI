import React from 'react';
import SectionExperience from './SectionExperience';
import SectionCertificates from './SectionCertificates';
import SectionReferences from './SectionReferences';
import SectionLanguages from './SectionLanguages';
import SectionInterests from './SectionInterests';

export default function CVRight() {
  return (
    <div className="resume__right">
      <SectionExperience />
      <SectionCertificates />
      <SectionReferences />
      <SectionLanguages />
      <SectionInterests />
    </div>
  );
}
