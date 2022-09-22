import v1 from "../assits/video/easy-to-set-up.mp4";
import v2 from "../assits/video/simply-fast-websites.mp4";
import v3 from "../assits/video/wordpress-made-easy.mp4";
import v4 from "../assits/video/chat-support.mp4";
import v5 from "../assits/video/scale-from-micro-to-large.mp4";
import v6 from "../assits/video/user-friendly.mp4";

import "../style/pageTwo.css";

const PageTwo = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="border_bottom carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="card">
              <div className="heroText">
                <div className="cardBody">
                  <small className="text-muted">EASY TO USE AND SIMPLE</small>
                  <h1 className="title">Easy to set up</h1>
                  <p className="text">
                    Getting your website live is as simple as a click of a
                    button. Everything you need - provided in a clear way.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="heroVideo">
                <video
                  loop
                  autoPlay
                  muted
                  src={v1}
                  className="img-fluid "
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="card">
              <div className="heroText">
                <div className="cardBody">
                  <small className="text-muted">PERFORMANCE AND SPEED</small>
                  <h1 className="title">Lightning-fast websites</h1>
                  <p className="text">
                    Website speed can slow or grow your business. Delight your
                    visitors with a fast-loading and optimized website.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="heroVideo">
                <video
                  loop
                  autoPlay
                  muted
                  src={v2}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <div className="card">
              <div className="heroText">
                <div className="cardBody">
                  <small className="text-muted">
                    GREAT WORDPRESS EXPERIENCE
                  </small>
                  <h1 className="title">WordPress made easy</h1>
                  <p className="text">
                    Start your website with an automatic 1-click WordPress
                    installation. The backend is powered by LiteSpeed caching
                    and advanced optimization to ensure your websites are fast,
                    reliable and secure.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="heroVideo">
                <video
                  loop
                  autoPlay
                  muted
                  src={v3}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <div className="card">
              <div className="heroText">
                <div className="cardBody">
                  <small className="text-muted">
                    PROFESSIONAL AND HANDS-ON
                  </small>
                  <h1 className="title">24/7 Support</h1>
                  <p className="text">
                    Our team of experts will solve technical issues to get your
                    websites up and running. Anytime.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="heroVideo">
                <video
                  loop
                  autoPlay
                  muted
                  src={v4}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <div className="card">
              <div className="heroText">
                <div className="cardBody">
                  <small className="text-muted">FLEXIBLE AND SCALABLE</small>
                  <h1 className="title">From micro to large-scale</h1>
                  <p className="text">
                    Different projects require different technologies. Pick a
                    plan that matches your current needs, then upgrade and scale
                    as your website grows.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="heroVideo">
                <video
                  loop
                  autoPlay
                  muted
                  src={v5}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <div className="card">
              <div className="heroText">
                <div className="cardBody">
                  <small className="text-muted">
                    NOW EVERYTHING IS POSSIBLE
                  </small>
                  <h1 className="title">User-Friendly Control Panel</h1>
                  <p className="text">
                    The user friendly control panel is full of tools, what ever
                    you like to do in your webpage you can do by your own no
                    need of professional proples.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="heroVideo">
                <video
                  loop
                  autoPlay
                  muted
                  src={v6}
                  height="468px"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="pointer carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className=" carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="pointer carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className=" carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PageTwo;
