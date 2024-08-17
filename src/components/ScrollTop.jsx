import React, { useCallback, useEffect, useRef } from 'react';
import * as style from './ScrollTop.scss';

export default function ScrollTop() {

  const ref = useRef();

  const scrollTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const updateButton = () => {
      if (ref.current) {
        window.scrollY > 100 ? ref.current.classList.add(style.active) : ref.current.classList.remove(style.active);
      }
    };
    document.addEventListener('scroll', updateButton);
    // cleanup
    return () => {
      window.removeEventListener('scroll', updateButton);
    };
  }, []);

  return (
    <a href='#' ref={ref} onClick={scrollTop} className={style.scroll_top + ' d-flex align-items-center justify-content-center'}>
      <i className='fa-solid fa-arrow-up'></i>
    </a>
  );
}
