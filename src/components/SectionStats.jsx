import React, { useEffect, useRef } from 'react';
import * as style from './SectionStats.scss';
import useOnScreen from '../hooks/UseOInScreen';

export default function SectionStats({ stats }) {

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const refs = useRef([]);
  useEffect(() => {
    if (!isVisible) {
      return;
    }
    if (refs.current.every((el, i) => el.textContent >= stats[i].count)) {
      return;
    }
    const iterations = 16.0;
    const increments = refs.current.map((el, i) => stats[i].count / iterations);
    let start = 0;
    setTimeout(() => {
      let counter = setInterval(() => {
        refs.current.forEach((el, i) => {
          el.textContent = Math.min(Math.round(start * increments[i]), stats[i].count);
        });
        if (start++ == iterations) {
          clearInterval(counter);
        }
      }, 50);
    }, 600);
  }, [isVisible]);

  return (
    <section ref={ref} className={style.stats + ' section'}>

      <div className='container' data-aos='fade-up' data-aos-delay='100'>

        <div className='row gy-4'>
          {
            stats.map((stat, i) => (
              <div className='col-lg-6 col-md-6' key={i}>
                <div className={style.stats_item}>
                  <i className={stat.class}></i>
                  <span ref={el => refs.current[i] = el} className={style.counter}>0</span>
                  <p><strong>{stat.title}</strong></p>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  );
}
