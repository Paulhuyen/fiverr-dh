import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import VideoSlickModal1 from "../Video/VideoSlickModal1";
import VideoSlickModal2 from "../Video/VideoSlickModal2";
import VideoSlickModal3 from "../Video/VideoSlickModal3";
import VideoSlickModal4 from "../Video/VideoSlickModal4";

type Props = {};

export default function SlickCarousel({}: Props) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50%",
          color: "#fff",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-4">
      <div className="container padding-0">
        <Slider {...settings}>
          <div className="css-video ">
            <div className="modal-1 col-lg-12">
              <VideoSlickModal1 />
              <div className="text-block">
                <div
                  className="d-flex align-items-center"
                  style={{ paddingBottom: 16 }}
                >
                  <h5>Kay Kim, Co-Founder </h5>
                  <span className="testimonial-logo">
                    <img
                      className="img-rooted"
                      alt="Company logo"
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                      loading="lazy"
                      style={{ width: "90%" }}
                    />
                  </span>
                </div>
                <div className="quote-modal">
                  <i>
                    "It's extremely exciting that Fiverr has freelancers from
                    all over the world — it broadens the talent pool. One of the
                    best things about Fiverr is that while we're sleeping,
                    someone's working."
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="css-video ">
            <div className="modal-1 col-lg-12">
              <VideoSlickModal2 />
              <div className="text-block">
                <div
                  className="d-flex align-items-center"
                  style={{ paddingBottom: 16 }}
                >
                  <h5>Caitlin Tormey, Chief Commercial Officer</h5>
                  <span className="testimonial-logo">
                    <img
                      className="img-rooted"
                      alt="Company logo"
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                      loading="lazy"
                      style={{ width: "90%" }}
                    />
                  </span>
                </div>
                <div className="quote-modal">
                  <i>
                    "We've used Fiverr for Shopify web development, graphic
                    design, and backend web development. Working with Fiverr
                    makes my job a little easier every day."
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="css-video ">
            <div className="modal-1 col-lg-12">
              <VideoSlickModal3 />
              <div className="text-block">
                <div
                  className="d-flex align-items-center"
                  style={{ paddingBottom: 16 }}
                >
                  <h5>Brighid Gannon (DNP, PMHNP-BC), Co-Founder</h5>
                  <span className="testimonial-logo">
                    <img
                      className="img-rooted"
                      alt="Company logo"
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                      loading="lazy"
                      style={{ width: "90%" }}
                    />
                  </span>
                </div>
                <div className="quote-modal">
                  <i>
                    "We used Fiverr for SEO, our logo, website, copy, animated
                    videos — literally everything. It was like working with a
                    human right next to you versus being across the world."
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="css-video ">
            <div className="modal-1 col-lg-12">
              <VideoSlickModal4 />
              <div className="text-block">
                <div
                  className="d-flex align-items-center"
                  style={{ paddingBottom: 16 }}
                >
                  <h5>Tim and Dan Joo, Co-Founders</h5>
                  <span className="testimonial-logo">
                    <img
                      className="img-rooted"
                      alt="Company logo"
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                      loading="lazy"
                      style={{ width: "90%" }}
                    />
                  </span>
                </div>
                <div className="quote-modal">
                  <i>
                    "When you want to create a business bigger than yourself,
                    you need a lot of help. That's what Fiverr does."
                  </i>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
