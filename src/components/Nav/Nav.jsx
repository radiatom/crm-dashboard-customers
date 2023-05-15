import React, { useState } from "react";
import logo from "./../../img/icons/logo.png";
import icon1 from "./../../img/icons/1.png";
import icon2 from "./../../img/icons/2.png";
import icon3 from "./../../img/icons/3.png";
import icon4 from "./../../img/icons/4.png";
import icon5 from "./../../img/icons/5.png";
import icon6 from "./../../img/icons/6.png";
import foto from "./../../img/Ellipse 8.svg";
import iconGrey from "./../../img/icons/grey.png";
import iconWhite from "./../../img/icons/white.png";
import s from "./Nav.module.css";

const Nav = () => {
  const [pc, setPc]=useState(true)
  const drop=()=>{
    setPc(!pc)
  }
  return (
    <nav className={s.nav}>
      <div className={pc===true?s.navPc:s.navPhone}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
          <div>
            Dashboard <span>v.01</span>
          </div>
        </div>
        <div className={s.list}>
          <ul>
            <li>
              <a href="#">
                <img src={icon1} alt="1" />
                <div>Dashboard</div>
                <img src={iconGrey} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icon2} alt="2" />
                <div>Product</div>
                <img src={iconGrey} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icon3} alt="3" />
                <div>Customers</div>
                <img src={iconWhite} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icon4} alt="4" />
                <div>Income</div>
                <img src={iconGrey} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icon5} alt="5" />
                <div>Promote</div>
                <img src={iconGrey} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icon6} alt="6" />
                <div>Help</div>
                <img src={iconGrey} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className={s.profile}>
          <img src={foto} alt="foto" />
          <div className={s.profile__info}>
            <div className={s.profile__name}>Evano</div>
            <div className={s.profile__status}>Project Manager</div>
          </div>
        </div>
      </div>
      <div className={s.navTouch}>
      <img src={logo} alt="logo" onClick={drop}/>
      </div>
    </nav>
  );
};
export default Nav;
