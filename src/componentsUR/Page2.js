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
                    استعمال میں آسان اور سادہ
                  </small>
                  <h1 className="title">ترتیب دینے میں آسان</h1>
                  <p className="text">
                    اپنی ویب سائٹ کو لائیو حاصل کرنا اتنا ہی آسان ہے جتنا ایک
                    بٹن پر کلک کرنا۔ ہر چیز جس کی آپ کو ضرورت ہے - واضح انداز
                    میں فراہم کی گئی ہے۔
                  </p>
                  <button type="button" className="btn btn-secondary">
                    اورجانیے
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
                  <small className="text-muted">کارکردگی اور رفتار</small>
                  <h1 className="title">بجلی کی تیز رفتار ویب سائٹس</h1>
                  <p className="text">
                    ویب سائٹ کی رفتار آپ کے کاروبار کو سست یا بڑھا سکتی ہے۔ تیزی
                    سے لوڈ ہونے والی اور آپٹمائزڈ ویب سائٹ کے ساتھ اپنے زائرین
                    کو خوش کریں۔
                  </p>
                  <button type="button" className="btn btn-secondary">
                    اورجانیے
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
                  <small className="text-muted">ورڈپریس کا زبردست تجربہ</small>
                  <h1 className="title">ورڈپریس آسان بنا دیا</h1>
                  <p className="text">
                    اپنی ویب سائٹ کو خودکار 1-کلک ورڈپریس انسٹالیشن کے ساتھ شروع
                    کریں۔ بیک اینڈ لائٹ اسپیڈ کیچنگ اور ایڈوانس آپٹیمائزیشن سے
                    تقویت یافتہ ہے تاکہ یہ یقینی بنایا جا سکے کہ آپ کی ویب
                    سائٹیں تیز، قابل اعتماد اور محفوظ ہیں۔
                  </p>
                  <button type="button" className="btn btn-secondary">
                    اورجانیے
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
                  <small className="text-muted">پیشہ ورانہ اور ہینڈ آن</small>
                  <h1 className="title">24/7 سپورٹ</h1>
                  <p className="text">
                    ماہرین کی ہماری ٹیم آپ کی ویب سائٹس کو چلانے اور چلانے کے
                    لیے تکنیکی مسائل کو حل کرے گی۔ کسی بھی وقت.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    اورجانیے
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
                  <small className="text-muted">لچکدار اور توسیع پذیر</small>
                  <h1 className="title">مائکرو سے بڑے پیمانے پر</h1>
                  <p className="text">
                    مختلف منصوبوں کو مختلف ٹیکنالوجیز کی ضرورت ہوتی ہے۔ ایک ایسا
                    منصوبہ چنیں جو آپ کی موجودہ ضروریات سے مماثل ہو، پھر اپ گریڈ
                    کریں اور اسکیل کریں جیسے جیسے آپ کی ویب سائٹ بڑھتی ہے۔
                  </p>
                  <button type="button" className="btn btn-secondary">
                    اورجانیے
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
                  <small className="text-muted">اب سب کچھ ممکن ہے۔</small>
                  <h1 className="title">صارف دوست کنٹرول پینل</h1>
                  <p className="text">
                    یوزر فرینڈلی کنٹرول پینل ٹولز سے بھرا ہوا ہے، جو کچھ بھی آپ
                    اپنے ویب پیج میں کرنا چاہتے ہیں آپ خود کر سکتے ہیں بغیر کسی
                    پیشہ ورانہ کام کی ضرورت ہے۔
                  </p>
                  <button type="button" className="btn btn-secondary">
                    اورجانیے
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
        <div className="btnNP">
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
            <span className="visually-hidden">پچھلا</span>
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
            <span className="visually-hidden">اگلے</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
