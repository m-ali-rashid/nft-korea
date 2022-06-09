import React from "react";
import AvatarBadge from "../components/AvatarBadge";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const CardLarge = ({ data }) => {
  const { id, image, artistImg, artist, currentBid, isRewarded, yourBid } =
    data;

  return (
    <>
      <div className="card-large" key={id}>
        <div
          className="art-image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="art-info">
          <div className="art-title">The other side</div>
          <AvatarBadge
            id={id}
            src={artistImg}
            title={artist}
            hasBorder={false}
            hasPadding={false}
          />
          <div className="bidding-info">
            <div className="bid">
              <p className="subtitle">현재 입찰가</p>
              <p className="numbers">{currentBid}BBR</p>
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
        </div>
        {isRewarded ? (
          <div className="card-action">
            <p className="card-action-head">
              <FaCheckCircle size={30} /> 낙찰되었습니다!
            </p>
            <p className="card-action-desc">축하드립니다.</p>
            <p className="card-action-desc">
              귀하는 이 작품의 경매에 낙찰되었습니다.
            </p>
            <p className="card-action-desc">귀하의 NFT를 요청하십시오.</p>
            <Link className="button card-action-btn" to="/view-work">
              작품보기
            </Link>
          </div>
        ) : (
          <div className="card-action">
            <p className="card-action-head">
              입찰가
              {currentBid < yourBid ? (
                <span className="card-action-head-success">
                  현재 최고가 입찰중 <FaCheckCircle size={30} />
                </span>
              ) : (
                <span className="card-action-head-danger">
                  현재 입찰가가 나의 입찰가 보다 높음{" "}
                  <AiFillCloseCircle size={30} />
                </span>
              )}
            </p>
            <p className="card-action-head-number">{yourBid} BBR</p>
            <p className="card-action-desc">1,584,302원</p>
            <Link className="button card-action-btn" to="/view-work">
              작품보기
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CardLarge;
