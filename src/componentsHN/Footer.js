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
                <a href="https://www.linkedin.com/company/hostinger-international/">
                  <img src={lin} alt="Social Handles" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Hostinger">
                  <img src={fb} alt="Social Handles" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hostinger_global/">
                  <img src={insta} alt="Social Handles" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Hostinger">
                  <img src={tw} alt="Social Handles" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/HostingerAcademy">
                  <img src={yt} alt="Social Handles" />
                </a>
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
              होस्टिंग
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/web-hosting"
                >
                  वेब होस्टिंग
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/vps-hosting"
                >
                  VPS होस्टिंग
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/minecraft-server-hosting"
                >
                  MineCraft सर्वर होस्टिंग
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/cyberpanel-vps-hosting"
                >
                  क्लाउड होस्टिंग
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/cloud-hosting"
                ></a>
              </li>
              {/* <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/wordpress-hosting"
                >
                  WordPress Hosting
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/email-hosting"
                >
                  Email Hosting
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/cms-hosting"
                >
                  CMS Hosting
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/ecommerce-hosting"
                >
                  Ecommerce Hosting
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/free-web-hosting"
                >
                  Free Web Hosting
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/online-store"
                >
                  Online Store
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/website-builder"
                >
                  Website Builder
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/buy-hosting"
                >
                  Buy Hosting
                </a>
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
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/tld/xyz-domain"
                >
                  XYZ डोमेन
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/cheap-domain"
                >
                  सस्ते डोमेन
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/tld"
                >
                  डोमेन एक्सटेंशन
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/whois"
                >
                  WHOIS Lookup
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/free-ssl-certificate"
                >
                  Free SSL Certificate
                </a>
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
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/tutorials/"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://support.hostinger.com/en/?_ga=2.217975441.622478265.1663667828-901203084.1663192946&_gac=1.89385577.1663704789.CjwKCAjwyaWZBhBGEiwACslQo7Q1AxtESK2XhOF9y9eB5oN6NnOOhN2zLPM-k7jidFbODw6LnQBz7BoCRL0QAvD_BwE"
                >
                  Knowledge Base
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/report-abuse"
                >
                  ऑनलाइन दुर्व्यवहार की रिपोर्ट करें
                </a>
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
              जानकारी
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/payment-methods"
                >
                  भुगतान की विधि
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/rewards"
                >
                  पुरस्कार
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/reviews"
                >
                  समीक्षा
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/pricing"
                >
                  मूल्य निर्धारण
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/sitemap"
                >
                  साइट मैप
                </a>
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
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/about"
                >
                  होस्टिंगर के बारे में
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/technology"
                >
                  हमारी तकनीक
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://roadmap.hostinger.com/tabs/10-released"
                >
                  रोडमैप
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/customer-care"
                >
                  ग्राहक देखभाल
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.com/blog/?_ga=2.239028999.622478265.1663667828-901203084.1663192946&_gac=1.115491444.1663742390.CjwKCAjwyaWZBhBGEiwACslQow2-wlU8sEleCGKty9mgKuI8pQayadJ-3kbQZjyiCgideeZqgWBY8BoCUo8QAvD_BwE"
                >
                  Blog
                </a>
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
              कानूनी
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/privacy-policy"
                >
                  गोपनीयता नीति
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.hostinger.in/universal-terms-of-service-agreement"
                >
                  सेवा की शर्तें
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <p>
            <span className="we">हम</span> एक वेब होस्टिंग कंपनी हैं जिसका मिशन
            ऑनलाइन जाने वाले हर व्यक्ति को सफल होने में मदद करना है। हम सर्वर
            तकनीक को लगातार विकसित करके, विशेषज्ञ सहायता देकर, और एक निर्दोष
            ऑनलाइन वेबसाइट होस्टिंग अनुभव सुनिश्चित करके इसे पूरा करते हैं।
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
                <a href="https://www.hostinger.in/payment-methods">
                  <p>और अधिक जानें</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
