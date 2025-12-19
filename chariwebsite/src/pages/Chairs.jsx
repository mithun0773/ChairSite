import React from "react";
import "../index.css";

const Chairs = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul>
          <li><a href="#">Furniture</a></li>
          <li><a href="#">Chairs</a></li>
          <li><a href="#">Sofa's</a></li>
          <li><a href="#">Beds</a></li>
          <li><a href="#">About us</a></li>
        </ul>

        <button className="btn-fill">Register</button>
      </nav>

      <header>
        <div className="content-container">
          <h1 className="main-headings">
            The Most <br /> <span>Comfortable</span>
            <br />
            Chairs For You
          </h1>

          <p className="primary-headings">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aliquam molestias maxime vitae.
          </p>

          <div className="btns-container">
            <button className="btn-fill">Register</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        <div className="img-container">
          <img
            src="/Images/daniil-silantev-1P6AnKDw6S8-unsplash-removebg-preview.png"
            alt="Chair"
          />
        </div>
      </header>

      <section className="popularity">
        <div className="popularity-one">
          <h1>12k+</h1>
          <p>Premium Product</p>
        </div>
        <div className="popularity-two">
          <h1>21k+</h1>
          <p>Happy Customers</p>
        </div>
        <div className="popularity-three">
          <h1>28k+</h1>
          <p>Awards Winning</p>
        </div>
      </section>

      <section className="products-container">
        <h1 className="products-heading main-headings">
          Shop popular <br />
          <span>Categories</span>
        </h1>

        <div className="products">

          <div className="product" data-aos = "fade-up">
            <div className="product-img-layer">
              <div className="img img-one"></div>
            </div>
            <div className="product-content">
              <h1 className="product-name">WorkShop Chair</h1>
              <p className="product-quality">Indoor Chair</p>
            </div>
          </div>

          <div className="product">
            <div className="product-img-layer">
              <div className="img img-two"></div>
            </div>
            <div className="product-content">
              <h1 className="product-name">WorkShop Chair</h1>
              <p className="product-quality">Indoor Chair</p>
            </div>
          </div>

          <div className="product">
            <div className="product-img-layer">
              <div className="img img-three"></div>
            </div>
            <div className="product-content">
              <h1 className="product-name">Workshop Chair</h1>
              <p className="product-quality">Indoor Chair</p>
            </div>
          </div>

        </div>

        <div className="b-container">
          <button>←</button>
          <button>→</button>
        </div>
      </section>

      <section className="why-us">

        <div className="section-img-container">
          <div className="img-layer">
            <div className="img"></div>
          </div>
        </div>

        <div className="content-container">
          <h1 className="main-headings">
            Why Choose <span>Us?</span>
          </h1>

          <p className="primary-headings">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="cards">

            <div className="card card-fill">
              <div className="star">★</div>
              <h1 className="card-title">Longevity</h1>
              <p className="card-info">Lorem ipsum dolor sit.</p>
            </div>

            <div className="card">
              <h1 className="card-title">Quality</h1>
              <p className="card-info">Lorem Ipsum is dummy text.</p>
            </div>

            <div className="card">
              <h1 className="card-title">Heritage</h1>
              <p className="card-info">Lorem Ipsum Printing text.</p>
            </div>

            <div className="card card-fill">
              <div className="star">★</div>
              <h1 className="card-title">Community</h1>
              <p className="card-info">Lorem Ipsum dummy text.</p>
            </div>

          </div>

        </div>
      </section>

      <section className="features">

        <div className="content-container">
          <h1 className="main-headings">
            Best <span>Features</span>
          </h1>

          <p className="primary-headings">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="cards">

            <div className="card card-fill">
              <div className="star">★</div>
              <h1>Delivery</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="card card-fill">
              <div className="star">★</div>
              <h1>Guarantee</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="card card-fill">
              <div className="star">★</div>
              <h1>Free Repair</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

          </div>
        </div>

        <div className="img-container d-none">
          <img src="/Images/bruno-emmanuelle--MUoHL1XULM-unsplash-removebg-preview.png" alt="Feature" />
        </div>

      </section>

      <footer>
        <div className="logo-container">
          <h1>Logo</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
        </div>

        <div className="about-company">

          <div className="container">
            <h1>About</h1>
            <p>News & Blog</p>
            <p>Features</p>
            <p>About Us</p>
          </div>

          <div className="container">
            <h1>Company</h1>
            <p>How We Work?</p>
            <p>Capital</p>
            <p>Security</p>
          </div>

          <div className="container">
            <h1>Support</h1>
            <p>FAQs</p>
            <p>Support</p>
            <p>Contact Us</p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Chairs;
