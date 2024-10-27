import React from 'react';
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';
import * as style from './Resume.module.css';

export default function Resume() {
  return (
    <main className={style.resume}>
      <ResumeLeft />
      <ResumeRight />
    </main>
  );
}
