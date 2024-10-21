import React, { useEffect } from 'react';
import * as style from './SectionProjects.module.scss';
import img from '../img/project.webp';
import GLightbox from 'glightbox';

export default function SectionPortfolio() {

  useEffect(() => {
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  });

  return (
    <section id='projects' className={style.projects + ' section'}>

      <div className='container section-title' data-aos='fade-up'>
        <h2>Projects</h2>
        <p>List of projects I own with source code hosted on github and commercial ones I worked on.</p>
      </div>

      <div className='container'>

        <div className='isotope-layout' data-default-filter='*' data-layout='masonry' data-sort='original-order'>

          <ul className={style.project_filters + ' isotope-filters'} data-aos='fade-up' data-aos-delay='100'>
            <li data-filter='*' className={style.filter_active}>All</li>
            <li data-filter='.filter-app'>Open Source</li>
            <li data-filter='.filter-product'>Commercial</li>
          </ul>

          <div className='row gy-4 isotope-container' data-aos='fade-up' data-aos-delay='200'>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-app'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='App 1' data-gallery='projects-gallery-app' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-product'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Product 1' data-gallery='projects-gallery-product' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-branding'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Branding 1' data-gallery='projects-gallery-branding' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-books'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Books 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Branding 1' data-gallery='projects-gallery-book' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-app'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='App 2' data-gallery='projects-gallery-app' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-product'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Product 2' data-gallery='projects-gallery-product' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-branding'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Branding 2' data-gallery='projects-gallery-branding' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-books'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Books 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Branding 2' data-gallery='projects-gallery-book' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-app'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='App 3' data-gallery='projects-gallery-app' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-product'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Product 3' data-gallery='projects-gallery-product' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-branding'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Branding 2' data-gallery='projects-gallery-branding' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-books'>
              <div className={style.project_content + ' h-100'}>
                <img src={img} className='img-fluid' alt='' />
                <div className={style.project_info}>
                  <h4>Books 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={img} title='Branding 3' data-gallery='projects-gallery-book' className={'glightbox ' + 'style.preview_link'}><i className='fa-solid fa-magnifying-glass'></i></a>
                  <a href='projects-details.html' title='More Details' className={'style.details_link'}><i className='fa-solid fa-link'></i></a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
