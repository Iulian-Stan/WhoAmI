import React, { useCallback, useEffect, useRef } from 'react';
import * as style from './Header.scss';
import img from '../img/profile.png';

export default function Header({ social }) {

  const ref = useRef();
  const navRefs = useRef([]);

  const headerToggle = useCallback((event) => {
    ref.current.classList.toggle(style.header_show);
    event.currentTarget.classList.toggle('bi-list');
    event.currentTarget.classList.toggle('bi-x');
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
        } else {
          navLink.classList.remove(style.active);
        }
      })
    };
    document.addEventListener('scroll', updateNavLinks);
    // cleanup
    return () => {
      document.removeEventListener('scroll', updateNavLinks);
    }
  }, []);

  return (
    <header ref={ref} className={style.header}>
      <i onClick={headerToggle} className={style.header_toggle + ' d-xl-none bi bi-list'}></i>

      <div className={style.profile_img}>
        <img src={img} alt='' className='img-fluid rounded-circle' />
      </div>

      <a href='index.html' className={style.logo + ' d-flex align-items-center justify-content-center'}>
        <h1>Iulian Stan</h1>
      </a>

      <div className={style.social_links + ' text-center'}>
        <a href={social.twitter} className='twitter'><i className='bi bi-twitter-x'></i></a>
        <a href={social.facebook} className='facebook'><i className='bi bi-facebook'></i></a>
        <a href={social.gmail} className='mail'><i className='bi bi-envelope'></i></a>
        <a href={social.linkedin} className='linkedin'><i className='bi bi-linkedin'></i></a>
        <a href={social.github} className='github'><i className='bi bi-github'></i></a>
      </div>

      <nav id='navmenu' className={style.navmenu}>
        <ul>
          <li><a ref={el => navRefs.current[0] = el} href="#hero" className={style.active}><i className={'bi bi-house ' + style.navicon}></i>Home</a></li>
          <li><a ref={el => navRefs.current[1] = el} href="#about"><i className={'bi bi-person ' + style.navicon}></i> About</a></li>
          <li><a ref={el => navRefs.current[2] = el} href="#resume"><i className={'bi bi-file-earmark-text ' + style.navicon}></i> Resume</a></li>
          <li><a ref={el => navRefs.current[3] = el} href="#projects"><i className={'bi bi-images ' + style.navicon}></i> Projects</a></li>
        </ul>
      </nav>

    </header>
  );
}
