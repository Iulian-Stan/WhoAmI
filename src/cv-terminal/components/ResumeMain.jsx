import React from 'react';
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';
import * as style from './ResumeMain.module.css';

export default function ResumeMain() {
  return (
    <main className={style.resume}>
      <ResumeLeft />
      <ResumeRight />
    </main>
  );
}
