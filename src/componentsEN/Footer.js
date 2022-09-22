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
              HOSTING
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/web-hosting"
                >
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/vps-hosting"
                >
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/minecraft-server-hosting"
                >
                  MineCraft Server Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/cyberpanel-vps-hosting"
                >
                  CyberPanel Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/cloud-hosting"
                >
                  Cloud Hosting
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
              DOMAIN
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/tld/xyz-domain"
                >
                  XYZ Domains
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/cheap-domain"
                >
                  Cheap Domains
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/tld"
                >
                  Domains Extensions
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/whois"
                >
                  WHOIS Lookup
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/free-ssl-certificate"
                >
                  Free SSL Certificate
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
              HELP
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/tutorials/"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://support.hostinger.com/en/?_ga=2.217975441.622478265.1663667828-901203084.1663192946&_gac=1.89385577.1663704789.CjwKCAjwyaWZBhBGEiwACslQo7Q1AxtESK2XhOF9y9eB5oN6NnOOhN2zLPM-k7jidFbODw6LnQBz7BoCRL0QAvD_BwE"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/report-abuse"
                >
                  Report Online Abuse
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
              INFORMATION
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/payment-methods"
                >
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/rewards"
                >
                  Rewards
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/reviews"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/sitemap"
                >
                  Sitemap
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
              COMPANY
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/about"
                >
                  About Hostinger
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/technology"
                >
                  Our Technology
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://roadmap.hostinger.com/tabs/10-released"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/customer-care"
                >
                  Customer Care
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
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.hostinger.in/universal-terms-of-service-agreement"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <p>
            <span className="we">We</span> are a web hosting company with a
            mission to help everyone who goes online succeed. We accomplish this
            by continuously developing server technology, giving expert
            assistance, and ensuring a flawless online website hosting
            experience.
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
