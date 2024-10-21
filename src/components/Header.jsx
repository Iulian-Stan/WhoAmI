import React, { useCallback, useEffect, useRef } from 'react';
import * as style from './Header.module.scss';
import img from '../img/profile.png';

export default function Header({ social }) {

  const ref = useRef();
  const navRefs = useRef([]);

  const headerToggle = useCallback((event) => {
    ref.current.classList.toggle(style.header_show);
    event.currentTarget.classList.toggle('fa-bars');
    event.currentTarget.classList.toggle('fa-xmark');
  }, []);

  useEffect(() => {
    const updateNavLinks = () => {
      navRefs.current.forEach(navLink => {
        if (!navLink.hash) return;
        let section = document.querySelector(navLink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          // document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navLink.classList.add(style.active);
          const location = window.location.toString().split('#')[0];
          history.replaceState(null, null, location + navLink.hash);

        } else {
          navLink.classList.remove(style.active);
        }
      });
    };
    document.addEventListener('scroll', updateNavLinks);
    // cleanup
    return () => {
      document.removeEventListener('scroll', updateNavLinks);
    };
  }, []);

  return (
    <header ref={ref} className={style.header}>
      <i onClick={headerToggle} className={style.header_toggle + ' d-xl-none fa-solid fa-bars'}></i>

      <div className={style.profile_img}>
        <img src={img} alt='' className='img-fluid rounded-circle' />
      </div>

      <a href='index.html' className={style.logo + ' d-flex align-items-center justify-content-center'}>
        <h1>Iulian Stan</h1>
      </a>

      <div className={style.social_links + ' text-center'}>
        <a href={social.twitter}><i className='fa-brands fa-twitter'></i></a>
        <a href={social.facebook}><i className='fa-brands fa-facebook'></i></a>
        <a href={social.gmail}><i className='fa-brands fa-google'></i></a>
        <a href={social.linkedin}><i className='fa-brands fa-linkedin'></i></a>
        <a href={social.github}><i className='fa-brands fa-github'></i></a>
      </div>

      <nav id='navmenu' className={style.navmenu}>
        <ul>
          <li><a ref={el => navRefs.current[0] = el} href="#hero" className={style.active}><i className={'fa-solid fa-house'}></i>Home</a></li>
          <li><a ref={el => navRefs.current[1] = el} href="#about"><i className={'fa-solid fa-address-card'}></i> About</a></li>
          <li><a ref={el => navRefs.current[2] = el} href="#resume"><i className={'fa-solid fa-file-lines'}></i> Resume</a></li>
          <li><a ref={el => navRefs.current[3] = el} href="#projects"><i className={'fa-solid fa-file-image'}></i> Projects</a></li>
        </ul>
      </nav>

    </header>
  );
}
