import React from 'react';
import * as style from './Certificates.module.css';

export default function Certificates() {
  return (
    <section className='section' id='certificates'>
      <h2 className='section-title'>Certificates</h2>

      <div className={style.certificate__container}>
        <div className={style.certificate__content}>
          <h3 className={style.certificate__title}>Something something (2012)</h3>
          <p className={style.certificate__description}>ASdsf sdf asdf asdf asdf sdaf sadf htgh tyjtj jhycgh gh fdsgh gfh gfh sgf hsgh.</p>
        </div>

        <div className={style.certificate__content}>
          <h3 className={style.certificate__title}>Something something (2012)</h3>
          <p className={style.certificate__description}>ASdsf sdf asdf asdf asdf sdaf sadf htgh tyjtj jhycgh gh fdsgh gfh gfh sgf hsgh.</p>
        </div>

        <div className={style.certificate__content}>
          <h3 className={style.certificate__title}>Something something (2012)</h3>
          <p className={style.certificate__description}>ASdsf sdf asdf asdf asdf sdaf sadf htgh tyjtj jhycgh gh fdsgh gfh gfh sgf hsgh.</p>
        </div>
      </div>
    </section>
  );
}
