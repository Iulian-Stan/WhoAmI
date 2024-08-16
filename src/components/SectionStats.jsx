import React from 'react';
import * as style from './SectionStats.scss';

export default function SectionStats({ stats }) {
  return (
    <section className={style.stats + ' section'}>

      <div className='container' data-aos='fade-up' data-aos-delay='100'>

        <div className='row gy-4'>
          {
            stats.map((stat, i) => (
              <div className='col-lg-6 col-md-6' key={i}>
                <div className={style.stats_item}>
                  <i className={'bi ' + stat.class}></i>
                  <span data-purecounter-start='0' data-purecounter-end={stat.count} data-purecounter-duration='1' className='purecounter'></span>
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
