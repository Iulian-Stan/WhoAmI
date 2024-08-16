import React from 'react';
import * as style from './Footer.scss';

export default function Footer() {
  return (
    <footer id='footer' className={style.footer + ' position-relative'}>

      <div className='container'>
        <div className={style.copyright + ' text-center'}>
          <p>© <span>Copyright</span> <strong className='px-1 sitename'>iPortfolio</strong> <span>All Rights Reserved</span></p>
        </div>
        <div className={style.credits}>
          Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>
        </div>
      </div>

    </footer>
  );
}
