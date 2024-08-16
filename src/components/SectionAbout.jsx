import React, { useCallback } from 'react';
import * as style from './SectionAbout.scss';
import img from '../img/profile.png';

export default function SectionAbout({ bio }) {

  const age = useCallback(() => {
    let currentTime = new Date().getTime() * 0.001;
    let birthTime = new Date(bio.birthdate).getTime() * 0.001;
    return Math.floor((currentTime - birthTime) / 31557600);
  })

  return (
    <section id='about' className={style.about + ' section'}>

      <div className='container section-title' data-aos='fade-up'>
        <h2>About</h2>
        <p>{bio.about}</p>
      </div>

      <div className='container' data-aos='fade-up' data-aos-delay='100'>

        <div className='row gy-4 justify-content-center'>
          <div className='col-lg-4'>
            <img src={img} className='img-fluid' alt='' />
          </div>
          <div className={'col-lg-8 ' + style.content}>
            <h2>{bio.occupation}</h2>
            <p className='fst-italic py-3'>{bio.intro}</p>
            <div className='row'>
              <div className='col-lg-6'>
                <ul>
                  <li><i className='bi bi-chevron-right'></i> <strong>Birthday:</strong> <span>{bio.birthdate}</span></li>
                  <li><i className='bi bi-chevron-right'></i> <strong>Website:</strong> <span><a href={bio.website}>site link</a></span></li>
                  <li><i className='bi bi-chevron-right'></i> <strong>Nationality:</strong> <span>{bio.nationality}</span></li>
                  <li><i className='bi bi-chevron-right'></i> <strong>City:</strong> <span>{bio.city}</span></li>
                </ul>
              </div>
              <div className='col-lg-6'>
                <ul>
                  <li><i className='bi bi-chevron-right'></i> <strong>Age:</strong> <span>{age()}</span></li>
                  <li><i className='bi bi-chevron-right'></i> <strong>Degree:</strong> <span>{bio.degree}</span></li>
                  <li><i className='bi bi-chevron-right'></i> <strong>Email:</strong> <span>{bio.email}</span></li>
                  <li><i className='bi bi-chevron-right'></i> <strong>Work Place:</strong> <span>{bio.work}</span></li>
                </ul>
              </div>
            </div>
            <p className='py-3'>{bio.trivia}</p>
          </div>
        </div>

      </div>

    </section>
  );
}
