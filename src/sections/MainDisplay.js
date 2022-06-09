import React from "react";
import { Link } from "react-router-dom";
import AvatarBadge from "../components/AvatarBadge";
import { NavLink } from "react-router-dom";

const MainDisplay = ({ data }) => {
  console.log(data);
  const { id, title, image, artistImg, artist, currentBid, cryptoUnit } =
    data[0];
  return (
    <div className="page-container mainDisplay">
      <div className="main-work-container">
        <NavLink to={`art/${id}`}>
          <div
            className="main-work"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </NavLink>
      </div>
      <div className="work-info">
        <div
          className="user-info"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AvatarBadge id={id} src={artistImg} title={artist} />
          <p className="artist-type"> Arttainer</p>
        </div>
        <h1 className="title">{title}</h1>
        <div className="bidding-info">
          <div className="bid">
            <p className="subtitle">현재 입찰가</p>
            <p className="numbers">
              {currentBid}
              {cryptoUnit.toUpperCase()}
            </p>
            <p className="numbersDesc">100,000원</p>
          </div>
          <div className="bid-ending">
            <p className="subtitle">남은시간</p>
            <div className="remaining-time">
              <div>
                <p className="numbers">364</p>
                <p className="numbersDesc">일</p>
              </div>
              <div>
                <p className="numbers">18</p>
                <p className="numbersDesc">시</p>
              </div>
              <div>
                <p className="numbers">58</p>
                <p className="numbersDesc">분</p>
              </div>
              <div>
                <p className="numbers">59</p>
                <p className="numbersDesc">초</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bid-buttons">
          <Link className="button" to={`/participate/${id}`}>
            경매 참여하기
          </Link>
          <Link className="button" to={`/art/${id}`} style={{ marginRight: 0 }}>
            작품보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainDisplay;
