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
                    ЛЕГКО ИСПОЛЬЗОВАТЬ И ПРОСТО
                  </small>
                  <h1 className="title">Легко настроить</h1>
                  <p className="text">
                    Запустить веб-сайт так же просто, как щелкнуть кнопка. Все,
                    что вам нужно - предоставлено в понятной форме.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Учить больше
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
                  <small className="text-muted">
                    ПРОИЗВОДИТЕЛЬНОСТЬ И СКОРОСТЬ
                  </small>
                  <h1 className="title">Молниеносные веб-сайты</h1>
                  <p className="text">
                    Скорость веб-сайта может замедлить или увеличить ваш бизнес.
                    Порадуйте свой посетителей с быстро загружаемым и
                    оптимизированным веб-сайтом.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Учить больше
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
                    БОЛЬШОЙ ОПЫТ РАБОТЫ С WORDPRESS
                  </small>
                  <h1 className="title">WordPress стал проще</h1>
                  <p className="text">
                    Запустите свой веб-сайт с помощью автоматического WordPress
                    в 1 клик. монтаж. Серверная часть использует кэширование
                    LiteSpeed. и расширенная оптимизация, чтобы ваши веб-сайты
                    работали быстро, надежный и безопасный.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Учить больше
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
                    ПРОФЕССИОНАЛЬНО И ПРАКТИЧНО
                  </small>
                  <h1 className="title">24/7 Поддерживать</h1>
                  <p className="text">
                    Наша команда специалистов решит технические вопросы, чтобы
                    получить ваш веб-сайты запущены и работают. В любой момент.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Учить больше
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
                  <small className="text-muted">ГИБКИЙ И МАСШТАБИРУЕМЫЙ</small>
                  <h1 className="title">От микро к крупномасштабному</h1>
                  <p className="text">
                    Разные проекты требуют разных технологий. Выберите
                    спланируйте, соответствующий вашим текущим потребностям,
                    затем обновите и масштабируйте по мере роста вашего сайта.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Учить больше
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
                  <small className="text-muted">ТЕПЕРЬ ВСЕ ВОЗМОЖНО</small>
                  <h1 className="title">Удобная панель управления</h1>
                  <p className="text">
                    Удобная панель управления полна инструментов, все, что вам
                    нравится делать на своей веб-странице, вы можете делать
                    самостоятельно, без необходимости в профессиональных
                    реквизитах.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Учить больше
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
          <span className="visually-hidden">Предыдущий</span>
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
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
};

export default PageTwo;
