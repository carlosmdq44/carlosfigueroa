import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Red Team"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Carlos Figueroa</h1>
          <h3>
            Cibersecurity <span ref={textRef}></span>
          </h3>
          <div className="social-icons">
          <FaInstagram onClick={() => window.open('https://www.instagram.com/carlos.figueroaa/', '_blank')} />      
            <FaGithub onClick={() => window.open('https://github.com/carlosmdq44/', '_blank')} />      
            <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/carlosjfigueroa/', '_blank')} />      
            <FaWhatsapp onClick={() => window.open('https://wa.me/+5492234550356/', '_blank')} />      
          </div>
        </div>
        <a href="#home">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}