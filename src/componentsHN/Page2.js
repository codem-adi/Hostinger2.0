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
                  <small className="text-muted">
                    प्रयोग करने में आसान और सरल
                  </small>
                  <h1 className="title">सेट अप करने में आसान</h1>
                  <p className="text">
                    अपनी वेबसाइट को लाइव करना एक बटन के क्लिक जितना आसान है।
                    आपको जो कुछ भी चाहिए - एक स्पष्ट तरीके से प्रदान किया गया।
                  </p>
                  <button type="button" className="btn btn-secondary">
                    और अधिक जानें
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
                  <small className="text-muted">प्रदर्शन और गति</small>
                  <h1 className="title">बिजली से चलने वाली वेबसाइटें</h1>
                  <p className="text">
                    वेबसाइट की गति आपके व्यवसाय को धीमा या बढ़ा सकती है। तेजी से
                    लोड होने वाली और अनुकूलित वेबसाइट के साथ अपने आगंतुकों को
                    प्रसन्न करें।
                  </p>
                  <button type="button" className="btn btn-secondary">
                    और अधिक जानें
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
                  <small className="text-muted">महान WORDPRESS अनुभव</small>
                  <h1 className="title">WordPress आसान बना दिया</h1>
                  <p className="text">
                    एक स्वचालित 1-क्लिक वर्डप्रेस इंस्टॉलेशन के साथ अपनी वेबसाइट
                    शुरू करें। आपकी वेबसाइटें तेज़, विश्वसनीय और सुरक्षित हैं,
                    यह सुनिश्चित करने के लिए बैकएंड लाइटस्पीड कैशिंग और उन्नत
                    अनुकूलन द्वारा संचालित है।
                  </p>
                  <button type="button" className="btn btn-secondary">
                    और अधिक जानें
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
                  <small className="text-muted">पेशेवर और व्यावहारिक</small>
                  <h1 className="title">24/7 सहायता</h1>
                  <p className="text">
                    हमारी विशेषज्ञों की टीम आपकी वेबसाइटों को चालू रखने के लिए
                    तकनीकी समस्याओं का समाधान करेगी। किसी भी समय।
                  </p>
                  <button type="button" className="btn btn-secondary">
                    और अधिक जानें
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
                  <small className="text-muted">लचीला और स्केलेबल</small>
                  <h1 className="title">सूक्ष्म से लेकर बड़े पैमाने तक</h1>
                  <p className="text">
                    विभिन्न परियोजनाओं के लिए विभिन्न तकनीकों की आवश्यकता होती
                    है। एक ऐसी योजना चुनें जो आपकी वर्तमान आवश्यकताओं से मेल
                    खाती हो, फिर अपग्रेड करें और अपनी वेबसाइट के बढ़ने के साथ
                    स्केल करें।
                  </p>
                  <button type="button" className="btn btn-secondary">
                    और अधिक जानें
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
                  <small className="text-muted">अब सब कुछ संभव है</small>
                  <h1 className="title">उपयोगकर्ता के अनुकूल नियंत्रण कक्ष</h1>
                  <p className="text">
                    उपयोगकर्ता के अनुकूल नियंत्रण कक्ष उपकरणों से भरा है, जो भी
                    आप अपने वेबपेज में करना पसंद करते हैं, आप अपने स्वयं के
                    पेशेवर सहारा की आवश्यकता के बिना कर सकते हैं।
                  </p>
                  <button type="button" className="btn btn-secondary">
                    और अधिक जानें
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
          <span className="visually-hidden">पिछला</span>
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
          <span className="visually-hidden">अगला</span>
        </button>
      </div>
    </div>
  );
};

export default PageTwo;
