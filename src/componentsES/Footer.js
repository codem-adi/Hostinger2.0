import "../style/footer.css";
import fb from "../assits/social media/facebook.svg";
import yt from "../assits/social media/youtube.svg";
import tw from "../assits/social media/twitter.svg";
import lin from "../assits/social media/linkedin.svg";
import insta from "../assits/social media/instagram.svg";
import visa from "../assits/payments/visa.webp";
import master from "../assits/payments/mastercard.webp";
import discover from "../assits/payments/discover.webp";
import club from "../assits/payments/dinersclub.webp";
import rupay from "../assits/payments/rupay.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="logo">
            <h1>HOSTINGER</h1>
            <p>Best Web Hosting</p>
          </div>
          <div className="social_handles">
            <ul>
              <li>
                <Link to="https://www.linkedin.com/company/hostinger-international/">
                  <img src={lin} alt="Social Handles" />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/Hostinger">
                  <img src={fb} alt="Social Handles" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/hostinger_global/">
                  <img src={insta} alt="Social Handles" />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/Hostinger">
                  <img src={tw} alt="Social Handles" />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/HostingerAcademy">
                  <img src={yt} alt="Social Handles" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="center">
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ALOJAMIENTO
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/web-hosting"
                >
                  alojamiento web
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/vps-hosting"
                >
                  Alojamiento VPS
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/minecraft-server-hosting"
                >
                  Alojamiento de servidor MineCraft
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/cyberpanel-vps-hosting"
                >
                  Alojamiento CyberPanel
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/cloud-hosting"
                >
                  Alojamiento en la nube
                </Link>
              </li>
              {/* <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/wordpress-hosting"
                >
                  WordPress Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/email-hosting"
                >
                  Email Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/cms-hosting"
                >
                  CMS Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/ecommerce-hosting"
                >
                  Ecommerce Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/free-web-hosting"
                >
                  Free Web Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/online-store"
                >
                  Online Store
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/website-builder"
                >
                  Website Builder
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/buy-hosting"
                >
                  Buy Hosting
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dominio
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/tld/xyz-domain"
                >
                  Dominios XYZ
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/cheap-domain"
                >
                  Dominios baratos
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/tld"
                >
                  Extensiones de Dominios
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/whois"
                >
                  Búsqueda de WHOIS
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/free-ssl-certificate"
                >
                  Certificado SSL gratuito
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              AYUDA
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/tutorials/"
                >
                  Tutoriales
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://support.hostinger.com/en/?_ga=2.217975441.622478265.1663667828-901203084.1663192946&_gac=1.89385577.1663704789.CjwKCAjwyaWZBhBGEiwACslQo7Q1AxtESK2XhOF9y9eB5oN6NnOOhN2zLPM-k7jidFbODw6LnQBz7BoCRL0QAvD_BwE"
                >
                  Base de conocimientos
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/report-abuse"
                >
                  Reportar abuso en línea
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              INFORMACIÓN
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/payment-methods"
                >
                  Métodos de pago
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/rewards"
                >
                  Recompensas
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/reviews"
                >
                  Reseñas
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/pricing"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/sitemap"
                >
                  mapa del sitio
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EMPRESA
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/about"
                >
                  Acerca de Hostinger
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/technology"
                >
                  Nuestra Tecnología
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://roadmap.hostinger.com/tabs/10-released"
                >
                  Mapa vial
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/customer-care"
                >
                  Atención al cliente
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.com/blog/?_ga=2.239028999.622478265.1663667828-901203084.1663192946&_gac=1.115491444.1663742390.CjwKCAjwyaWZBhBGEiwACslQow2-wlU8sEleCGKty9mgKuI8pQayadJ-3kbQZjyiCgideeZqgWBY8BoCUo8QAvD_BwE"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              LEGAL
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/privacy-policy"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/universal-terms-of-service-agreement"
                >
                  Términos de servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <p>
            <span className="we">Somos </span> una empresa de alojamiento web
            con la misión de ayudar a todos los que se conectan en línea a tener
            éxito. Logramos esto mediante el desarrollo continuo de tecnología
            de servidor, brindando asistencia de expertos y asegurando una
            experiencia de alojamiento de sitios web en línea impecable.
          </p>
          <div className="payemts">
            <ul>
              <li>
                <img src={visa} alt="payment Options" />
              </li>
              <li>
                <img src={master} alt="payment Options" />
              </li>
              <li>
                <img src={discover} alt="payment Options" />
              </li>
              <li>
                <img src={club} alt="payment Options" />
              </li>
              <li>
                <img src={rupay} alt="payment Options" />
              </li>
              <li>
                <Link to="https://www.hostinger.in/payment-methods">
                  <p>Many More</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
