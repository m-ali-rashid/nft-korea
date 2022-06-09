import React from "react";
import MonsterCube from "../assets/pngs/monster-cube.png";
import LogoWhite from "../assets/logo-white.png";
import { mainNav } from "../data/navData";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="page-container footer-inner-top">
        <div className="footer-left-section">
          <img src={MonsterCube} alt="" width={200} />
          <p>서울특별시 강남구 논현로63길 71 (주)몬스터큐브</p>
          <p>
            CEO : 유재범 ｜ 사업자등록 : 441-87-00779｜ 통신판매번호 :
            제2018-서울강남-02815호｜ Tel : 02 1522 9746｜ Fax : 0504 276 3309
          </p>
          <p>Copyright © MONSTER CUBE Corporation. All Rights Reserved.</p>
        </div>
        <div className="footer-right-section">
          <ul>
            {mainNav.map((item) => (
              <li key={item.id}>
                <NavLink to={item.to}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="page-container footer-inner-bottom">
        <img src={LogoWhite} alt="" width={170} />
        <NavLink to="/terms-of-use">이용약관</NavLink>
        <NavLink to="/privacy-policy">개인정보보호정책</NavLink>
      </div>
    </div>
  );
};

export default Footer;
