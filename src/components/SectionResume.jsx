import React, { useEffect } from 'react';
import * as style from './SectionResume.scss';

export default function SectionResume({ resume, education, work }) {
  return (
    <section id='resume' className={style.resume + ' section'}>

      <div className='container section-title' data-aos='fade-up'>
        <h2>Resume</h2>
        <p>{resume}</p>
      </div>

      <div className='container'>

        <div className='row'>

          <div className='col-lg-6' data-aos='fade-up' data-aos-delay='200'>
            <h3 className={style.resume_title}>Professional Experience</h3>
            {
              work.map((job, i) => (
                <div className={style.resume_item} key={i}>
                  <h4>{job.title}</h4>
                  <h5>{job.years}</h5>
                  <p><em>{job.location}</em></p>
                  <p></p>
                  <ul>
                    {
                      job.responsibilities.map((resp, j) => (
                        <li key={j}>{resp}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>

          <div className='col-lg-6' data-aos='fade-up' data-aos-delay='100'>
            <h3 className={style.resume_title}>Education</h3>
            {
              education.map((edu, i) => (
                <div className={style.resume_item} key={i}>
                  <h4>{edu.title}</h4>
                  <h5>{edu.years}</h5>
                  <p><em>{edu.location}</em></p>
                  <p><strong>Diploma Thesis:</strong> {edu.thesis}</p>
                  <ul>
                    {
                      edu.topics.map((resp, j) => (
                        <li key={j}>{resp}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>

        </div>

      </div>

    </section>
  );
}
