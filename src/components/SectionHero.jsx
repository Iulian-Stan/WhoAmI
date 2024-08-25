import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import * as style from './SectionHero.scss';
import img from '../img/hero-bg.jpg';

export default function SectionHero({ keywords }) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    let typed_strings = el.current.getAttribute('data-typed-items').split(',');
    const typed = new Typed(el.current, {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id='hero' className={style.hero + ' section'}>
      <img src={img} alt='' data-aos='fade-in' />
      <div className='container' data-aos='fade-up' data-aos-delay='100'>
        <h2>Iulian Stan</h2>
        <p>I&apos;m <span ref={el} className='typed' data-typed-items={keywords.join(',')}>{keywords[0]}</span></p>
      </div>
      <div className={style.mouse_icon}>
        <div className={style.wheel}></div>
      </div>
    </section>
  );
}
