import React from 'react';
import Experience from './sections/Experience';
import Certificates from './sections/Certificates';
import References from './sections/References';
import Languages from './sections/Languages';
import Interests from './sections/Interests';
import * as style from './ResumeRight.module.css';

export default function ResumeRight() {
  return (
    <div className={style.resume__right}>
      <Experience />
      <Certificates />
      <References />
      <Languages />
      <Interests />
    </div>
  );
}
