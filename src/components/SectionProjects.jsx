import React from 'react';
import * as style from './SectionProjects.scss';

export default function SectionPortfolio() {
  return (
    <section id='projects' className={style.projects + ' section'}>

      <div className='container section-title' data-aos='fade-up'>
        <h2>Projects</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className='container'>

        <div className='isotope-layout' data-default-filter='*' data-layout='masonry' data-sort='original-order'>

          <ul className={style.portfolio_filters + ' isotope-filters'} data-aos='fade-up' data-aos-delay='100'>
            <li data-filter='*' className={style.filter_active}>All</li>
            <li data-filter='.filter-app'>App</li>
            <li data-filter='.filter-product'>Product</li>
            <li data-filter='.filter-branding'>Branding</li>
            <li data-filter='.filter-books'>Books</li>
          </ul>

          <div className='row gy-4 isotope-container' data-aos='fade-up' data-aos-delay='200'>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-app'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/app-1.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/app-1.jpg' title='App 1' data-gallery='projects-gallery-app' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-product'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/product-1.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/product-1.jpg' title='Product 1' data-gallery='projects-gallery-product' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-branding'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/branding-1.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/branding-1.jpg' title='Branding 1' data-gallery='projects-gallery-branding' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-books'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/books-1.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Books 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/books-1.jpg' title='Branding 1' data-gallery='projects-gallery-book' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-app'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/app-2.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/app-2.jpg' title='App 2' data-gallery='projects-gallery-app' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-product'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/product-2.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/product-2.jpg' title='Product 2' data-gallery='projects-gallery-product' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-branding'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/branding-2.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/branding-2.jpg' title='Branding 2' data-gallery='projects-gallery-branding' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-books'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/books-2.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Books 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/books-2.jpg' title='Branding 2' data-gallery='projects-gallery-book' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-app'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/app-3.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/app-3.jpg' title='App 3' data-gallery='projects-gallery-app' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-product'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/product-3.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/product-3.jpg' title='Product 3' data-gallery='projects-gallery-product' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-branding'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/branding-3.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/branding-3.jpg' title='Branding 2' data-gallery='projects-gallery-branding' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 projects-item isotope-item filter-books'>
              <div className='projects-content h-100'>
                <img src='assets/img/projects/books-3.jpg' className='img-fluid' alt='' />
                <div className='projects-info'>
                  <h4>Books 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href='assets/img/projects/books-3.jpg' title='Branding 3' data-gallery='projects-gallery-book' className='glightbox preview-link'><i className='bi bi-zoom-in'></i></a>
                  <a href='projects-details.html' title='More Details' className='details-link'><i className='bi bi-link-45deg'></i></a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
