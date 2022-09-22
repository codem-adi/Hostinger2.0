import "../style/HomePage.css";
import globImg from "../assits/glob-bright.png";
import supporter from "../assits/partner.png";
import { useState } from "react";

const HomePage = () => {
  const [Seconds, setSeconds] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Hours, setHours] = useState(0);
  const [Days, setDays] = useState(0);

  function Launch() {
    var countDownDate = new Date("Sep 25, 2022 00:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }
  setInterval(Launch, 1000);

  // useEffect(Launch, [Seconds]);

  return (
    <>
      <div className="root">
        <div className="mainBox ">
          <div className="hero_text_left">
            <h1 className="hero_heading">आइए दुनिया से जुड़ें</h1>
            <h2 className="hero_description">डोमेन और होस्टिंग प्राप्त करें</h2>
            <div className="clockBox">
              <div className="clock">
                <div className="time_card">
                  <h1>{Days ? ("0" + Days).slice(-2) : "00"}</h1>
                  <p>दिन</p>
                </div>
                <div className="time_card">
                  <h1>{Hours ? ("0" + Hours).slice(-2) : "00"}</h1>
                  <p>घंटे</p>
                </div>
                <div className="time_card">
                  <h1>{Minutes ? ("0" + Minutes).slice(-2) : "00"}</h1>
                  <p>मिनट</p>
                </div>
                <div className="time_card">
                  <h1>{Seconds ? ("0" + Seconds).slice(-2) : "00"}</h1>
                  <p>सेकंड</p>
                </div>
              </div>
              <a
                href=" https://www.hostinger.in/web-hosting#pricing"
                className="get_started"
              >
                अधिक जानें
              </a>
            </div>
          </div>
          <div className="hero_text_right">
            <img alt="it's a Glob" src={globImg} className="glob_img"></img>
          </div>
        </div>
        <img alt="supporters" src={supporter} className="partner"></img>
      </div>
    </>
  );
};

export default HomePage;
