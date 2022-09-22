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
                  <small className="text-muted">FÁCIL DE USAR Y SENCILLO</small>
                  <h1 className="title">Fácil de configurar</h1>
                  <p className="text">
                    Poner en marcha su sitio web es tan simple como hacer clic
                    en un botón. Todo lo que necesita, proporcionado de manera
                    clara.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Aprende más
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
                  <small className="text-muted">RENDIMIENTO Y VELOCIDAD</small>
                  <h1 className="title">Sitios web ultrarrápidos</h1>
                  <p className="text">
                    La velocidad del sitio web puede ralentizar o hacer crecer
                    su negocio. Deleite a sus visitantes con un sitio web
                    optimizado y de carga rápida.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Aprende más
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
                    GRAN EXPERIENCIA WORDPRESS
                  </small>
                  <h1 className="title">WordPress hecho fácil</h1>
                  <p className="text">
                    Inicie su sitio web con una instalación automática de
                    WordPress con un solo clic. El backend funciona con
                    almacenamiento en caché LiteSpeed ​​y optimización avanzada
                    para garantizar que sus sitios web sean rápidos, confiables
                    y seguros.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Aprende más
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
                  <small className="text-muted">PROFESIONAL Y PRÁCTICO</small>
                  <h1 className="title">Soporte 24/7</h1>
                  <p className="text">
                    Nuestro equipo de expertos resolverá los problemas técnicos
                    para que sus sitios web estén en funcionamiento. Cualquier
                    momento.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Aprende más
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
                  <small className="text-muted">FLEXIBLE Y ESCALABLE</small>
                  <h1 className="title">De micro a gran escala</h1>
                  <p className="text">
                    Diferentes proyectos requieren diferentes tecnologías. Elija
                    un plan que coincida con sus necesidades actuales, luego
                    actualice y amplíe a medida que crezca su sitio web.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Aprende más
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
                  <small className="text-muted">AHORA TODO ES POSIBLE</small>
                  <h1 className="title">Panel de control fácil de usar</h1>
                  <p className="text">
                    El panel de control fácil de usar está lleno de
                    herramientas, lo que quiera hacer en su página web lo puede
                    hacer por su cuenta sin necesidad de accesorios
                    profesionales.
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Aprende más
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
          <span className="visually-hidden">Prevo</span>
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
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default PageTwo;
