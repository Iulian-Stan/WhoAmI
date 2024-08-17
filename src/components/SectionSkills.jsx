import React, { useEffect, useRef } from 'react';
import * as style from './SectionSkills.scss';
import useOnScreen from '../hooks/UseOInScreen';

export default function SectionSkills({ skills, technologies }) {

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const refs = useRef([]);
  useEffect(() => {
    if (!isVisible) {
      return;
    }
    setTimeout(() => {
      refs.current.forEach(el => {
        el.style.width = el.getAttribute('aria-valuenow') + '%';
      });
    }, 600);
  }, [isVisible]);

  return (
    <section ref={ref} id='skills' className={style.skills + ' section'}>

      <div className='container section-title' data-aos='fade-up'>
        <h2>Skills</h2>
        <p>{skills}</p>
      </div>

      <div className='container' data-aos='fade-up' data-aos-delay='100'>

        <div className='row'>
          {
            technologies.map((technology, i) => (
              <div className='col-lg-6' key={i}>
                <div className={style.progress}>
                  <span className='skill'><span>{technology.stack}</span> <i className='val'>{technology.proficiency}%</i></span>
                  <div className={style.progress_bar_wrap}>
                    <div ref={el => refs.current[i] = el} className={style.progress_bar} role='progressbar' aria-valuenow={technology.proficiency} aria-valuemin='0' aria-valuemax='100'></div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  );
}
