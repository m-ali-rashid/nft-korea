import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

import { GrUserSettings } from "react-icons/gr";
import ConnectWalletModal from "./ConnectWalletModal";
// import { useHistory } from "react-router-dom";
import signoutIcon from "../assets/pngs/signout.png";
import settingsIcon from "../assets/pngs/settings.png";

const Navigation = ({
  data,
  connectWallet,
  user,
  connected,
  setConnected,
  closeWalletModal,
  showWalletModal,
  // setShowWalletModal,
}) => {
  const [active, setActive] = React.useState("");
  console.log(user);

  return (
    <>
      <div className="page-container navigation ">
        <NavLink to="/" className="logo">
          <img src={`https://grieving-queen.surge.sh/assets/logo.png`} alt="" />
        </NavLink>
        <button
          className={`hamburger ${active}`}
          id="hamburger-1"
          onClick={() => setActive(active === "" ? "is-active" : "")}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <div className={`menuContainer ${active === "" ? "" : "isOpaque"}`}>
          <NavLink to="/" className="logo hamLogo">
            <img
              className=""
              src={`https://grieving-queen.surge.sh/assets/logo.png`}
              alt=""
            />
          </NavLink>
          <ul className="menuItems">
            {data &&
              data.map(({ id, title, to }) => (
                <li key={id}>
                  <NavLink to={to}>{title}</NavLink>
                </li>
              ))}
            {/* Connect your wallet */}
            {connected ? (
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div className="myauctions">
                  <div>{user.auctions}</div>
                  <p>나의경매</p>
                </div>
                <div
                  className="loggedindetails"
                  //
                >
                  <div className="avatar"></div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>{user.acc}</p>
                    <p style={{ fontSize: "15px", color: "#666" }}>
                      {user.wallet}
                    </p>
                  </div>
                  <div className="loggedindetails-dropdown">
                    <Link to="/my-profile" className="li-dropdown-items">
                      <div className="avatar"></div>내 프로필 보기
                      <BsChevronRight size={20} className="dd-right-arrow" />
                    </Link>
                    <div className="linebreak"></div>
                    <Link to="/my-auctions" className="li-dropdown-items">
                      <FaPaintBrush size={20} />내 프로필 보기
                      <BsChevronRight size={20} className="dd-right-arrow" />
                    </Link>
                    <div className="linebreak"></div>
                    <Link
                      to="/email-notifications-settings"
                      className="li-dropdown-items"
                    >
                      {/* <GiHexagonalNut size={20} /> */}
                      <img src={settingsIcon} width={20} alt="" />
                      월렛 연결해제
                      <BsChevronRight size={20} className="dd-right-arrow" />
                    </Link>
                    <div className="linebreak"></div>
                    <Link to="/modify-my-profile" className="li-dropdown-items">
                      <GrUserSettings size={20} />
                      프로필 설정
                      <BsChevronRight size={20} className="dd-right-arrow" />
                    </Link>
                    <div className="linebreak"></div>
                    <div
                      onClick={() => setConnected(false)}
                      className="li-dropdown-items"
                    >
                      {/* <FaPowerOff size={20} /> */}
                      <img src={signoutIcon} width={20} alt="" />
                      이메일 알림 설정
                      <BsChevronRight size={20} className="dd-right-arrow" />
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li className="navButton" onClick={() => connectWallet()}>
                월렛 연결하기
              </li>
            )}
          </ul>
        </div>
      </div>
      <ConnectWalletModal
        closeModal={closeWalletModal}
        showWalletModal={showWalletModal}
        connected={connected}
        setConnected={setConnected}
      />
    </>
  );
};

export default Navigation;
