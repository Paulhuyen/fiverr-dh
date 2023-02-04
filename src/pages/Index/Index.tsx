import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactCarousel from "../../components/ReactCarousel/ReactCarousel";
import SlickCarousel from "../../components/SlickCarousel/SlickCarousel";
import Slider from "../../components/Slider/Slider";
import VideoModal from "../../components/Video/VideoModal";
import { AppDispatch } from "../../redux/configStore";
import { timeout } from "../../util/setting";
type Props = {};

export default function Index({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const [param, setParam] = useState("");
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    await timeout(1000);
    navigate(`/result/${param}`);
  };
  const handelChange = (e) => {
    setParam(e.target.value);
  };
  return (
    <>
      <section className="carousel-slider">
        <Slider />
      </section>

      <section className="container slider-content">
        <div className="search">
          <div className="container">
            <div className="searchLeft">
              <h1>
                Find the perfect <i> freelance </i> services for your business
              </h1>

              <form className="d-flex" role="search" onSubmit={handelSubmit}>
                <input
                  className="form-control"
                  type="search"
                  name="searchInputCarousel"
                  placeholder='Try "building mobile app"'
                  aria-label="Search"
                  onChange={handelChange}
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>

              <div className="d-flex popular">
                <span>Popular: </span>
                <div className="btn">Website Design</div>
                <div className="btn">WordPress</div>
                <div className="btn">Logo Design</div>
                <div className="btn">Video Editing</div>
              </div>
            </div>
            <div className="searchRight"></div>
          </div>
        </div>
      </section>

      <section className="trusted-by container">
        <div className="trusted-by-wrapper d-flex justify-content-center align-items-center">
          <span className="trusted-by-text">Trusted by:</span>
          <ul className="d-flex trusted-by-logo align-items-center">
            <li className="li">
              <img className="height-3 w-100" src="./img/fb.png" alt="fb" />
            </li>
            <li className="li">
              <img
                className="height-3 w-100"
                src="./img/google.png"
                alt="google"
              />
            </li>
            <li className="li">
              <img className="w-100" src="./img/netflix.png" alt="netflix" />
            </li>
            <li className="li">
              <img src="./img/pg.png" alt="pg" />
            </li>
            <li>
              <img
                className="height-3 w-100 paypal"
                src="./img/paypal.png"
                alt="paypal"
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="subcategory-carousel">
        <div className="container">
          <h2>Popular professional services</h2>
          <div className="slider-package">
            <ReactCarousel />
          </div>
        </div>
      </section>

      <section className="selling-proposition-wrapper">
        <div className="selling-proposition container">
          <div className="row align-items-center justify-content-between">
            <div className="selling-text col-12 col-md-12 col-lg-5 col-xl-5">
              <h2>A whole world of freelance talent at your fingertips</h2>
              <ul className="ul-selling">
                <li>
                  <h6>
                    <span
                      className="check-icon"
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "rgb(122, 125, 133)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                      </svg>
                    </span>
                    The best for every budget
                  </h6>
                  <p>
                    Find high-quality services at every price point. No hourly
                    rates, just project-based pricing.
                  </p>
                </li>
                <li>
                  <h6>
                    <span
                      className="check-icon"
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "rgb(122, 125, 133)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                      </svg>
                    </span>
                    Quality work done quickly
                  </h6>
                  <p>
                    Find the right freelancer to begin working on your project
                    within minutes.
                  </p>
                </li>
                <li>
                  <h6>
                    <span
                      className="check-icon"
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "rgb(122, 125, 133)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                      </svg>
                    </span>
                    Protected payments, every time
                  </h6>
                  <p>
                    Always know what you'll pay upfront. Your payment isn't
                    released until you approve the work.
                  </p>
                </li>
                <li>
                  <h6>
                    <span
                      className="check-icon"
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "rgb(122, 125, 133)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                      </svg>
                    </span>
                    24/7 support
                  </h6>
                  <p>
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </li>
              </ul>
            </div>
            <div className="selling-video col-12 col-md-12 col-lg-7 col-xl-7">
              <VideoModal />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <SlickCarousel />
      </section>

      <section className="main-categories container">
        <h2 className="margin">Explore the marketplace</h2>
        <ul className="row justify-content-center">
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
