/* eslint-disable no-unused-vars */
import  { useState, useEffect } from "react";
import style from "../style/header.module.css";
import HeaderForm from "./header_form";
import ResponsiveHeader from "./responsive_header";

export default function Header() {
  const [translateHeader, setTranslateHeader] = useState(false);
  function handleScroll(e) {
    const wScroll = window.scrollY;
    if (wScroll >= 50) {
      setTranslateHeader(true);
    } else {
      setTranslateHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });

  return (
    <>
      <div
        className={style.animatedBg}
        style={{ transform: translateHeader ? "translateY(-0px)" : "" }}
      ></div>
      <ResponsiveHeader translateHeader={translateHeader} />
      <div className={`${style.Header}`}>
        <a
          href="#"
          className={style.logo}
          style={{ color: translateHeader ? "red" : "" }}
        >
          <i className="fab fa-airbnb"></i>
          <span className="d-none d-xl-block">airbnb</span>
        </a>
        <HeaderForm translateHeader={translateHeader} />
        <div className={`ml-auto ${style.actionBtn}`}>
          <a href="#" style={{ color: translateHeader ? "#222222" : "" }}>
            Become a host
          </a>
          <a href="#" style={{ color: translateHeader ? "#222222" : "" }}>
            <i className="fas fa-globe"></i>
          </a>
          <div className="dropdown">
            <a
              className={style.dropdownBtn}
              href="#"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ border: translateHeader ? "1px solid #cccccc" : "" }}
            >
              <i className="fas fa-bars"></i>
              <i className="fas fa-user-circle"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="#">
                Sign up
              </a>
              <a className="dropdown-item" href="#">
                Login in
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Host your home
              </a>
              <a className="dropdown-item" href="#">
                Host an experience
              </a>
              <a className="dropdown-item" href="#">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
