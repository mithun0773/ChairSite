import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const popularityRef = useRef(null);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setCounterOn(true);
      else setCounterOn(false);
    });

    if (popularityRef.current) observer.observe(popularityRef.current);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <header className="hero-section">
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

        {/* Decorative Shapes */}
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </header>

      {/* POPULARITY COUNTERS */}
     


      {/* PRODUCTS */}
      <section className="products-container" data-aos="fade-up">
        <h1 className="products-heading main-headings">
          Shop popular <br />
          <span>Categories</span>
        </h1>

        <div className="products">
          <div className="product" data-aos="fade-up">
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
              <h1 className="product-name">Office Chair</h1>
              <p className="product-quality">Ergonomic Chair</p>
            </div>
          </div>

          <div className="product">
            <div className="product-img-layer">
              <div className="img img-three"></div>
            </div>
            <div className="product-content">
              <h1 className="product-name">Luxury Chair</h1>
              <p className="product-quality">Premium Indoor</p>
            </div>
          </div>
        </div>

        <div className="b-container">
          <button>←</button>
          <button>→</button>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us" data-aos="fade-up">
        <div className="why-us-left">
          <div className="why-us-img-bg">
            <div className="why-us-img"></div>
          </div>
        </div>

        <div className="why-us-right">
          <h1 className="main-headings">
            Why Choose <span>Us?</span>
          </h1>

          <p className="primary-headings">
            We craft premium quality furniture built to last for generations.
          </p>

          <div className="why-cards">
            <div className="why-card glass">
              <div className="why-icon">★</div>
              <h2>Longevity</h2>
              <p>
                Built using premium materials designed for long-term durability.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">✔</div>
              <h2>Quality</h2>
              <p>Each piece meets the highest craftsmanship standards.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🏛</div>
              <h2>Heritage</h2>
              <p>We’ve crafted iconic designs for over 20 years.</p>
            </div>

            <div className="why-card glass">
              <div className="why-icon">🌎</div>
              <h2>Community</h2>
              <p>Trusted by thousands worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
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
              <p>Fast and safe delivery services.</p>
            </div>

            <div className="card card-fill">
              <div className="star">★</div>
              <h1>Guarantee</h1>
              <p>1-year standard product warranty.</p>
            </div>

            <div className="card card-fill">
              <div className="star">★</div>
              <h1>Free Repair</h1>
              <p>Free first-year repair included.</p>
            </div>

            <div className="card card-fill">
              <div className="star">★</div>
              <h1>Repair</h1>
              <p>We offer lifetime support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;