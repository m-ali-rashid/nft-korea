import React from "react";
import { useParams } from "react-router-dom";
import { works, biddingStatus } from "../data/artistData";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineDownCircle } from "react-icons/ai";
// import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import AvatarBadge from "../components/AvatarBadge";
import BuyNowModal from "../sections/BuyNowModal";

const ArtPage = () => {
  const [linkCopied, setLinkCopied] = React.useState(false);
  const [unit, setUnit] = React.useState("ETH");
  const [showModal, setShowModal] = React.useState(false);

  const { id } = useParams();
  const myArt = works.filter((obj) => {
    return obj.id === id;
  });
  const { title, image, desc, artistImg, artist, artistType, artistDesc } =
    myArt[0];

  const handleShare = () => {
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 3000);
  };
  const closeModal = (e) => {
    setShowModal(false);
  };
  // console.log(myArt);
  return (
    <div className="page-container artPage ">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AvatarBadge id={myArt[0].id} src={artistImg} title={artist} />
          <p className="artist-type"> {artistType}</p>
        </div>

        <div className="share-container">
          <div
            className={`button msg-button ${
              !linkCopied ? "msg-button-hidden" : ""
            }`}
          >
            링크가 복사되었습니다.
          </div>
          <div className="share-button button" onClick={() => handleShare()}>
            <FiShare2 size={24} />
            <p>공유하기</p>
          </div>
        </div>
      </div>
      <div className="sub-container">
        <div className="left-container">
          <h1 className="artPage-title">{title}</h1>
          <h3 className="artPage-subTitle">작품 소개</h3>
          <p className="artPage-body">{desc}</p>

          <div className="tabs-container">
            <div className="tab boxed">
              <img
                src="https://grieving-queen.surge.sh/assets/images/eth.png"
                alt=""
                className="tab-icon"
              />
              <div className="tab-title">이더스캔 보기</div>
              <RiExternalLinkLine color="#b3b3b3" />
            </div>
            <div className="tab boxed">
              <img
                src="https://grieving-queen.surge.sh/assets/images/eye.png"
                alt=""
                className="tab-icon"
              />
              <div className="tab-title">IPFS 보기</div>
              <RiExternalLinkLine color="#b3b3b3" />
            </div>
            <div className="tab boxed">
              <img
                src="https://grieving-queen.surge.sh/assets/images/cube.png"
                alt=""
                className="tab-icon"
              />
              <div className="tab-title">IPFS 메타데이터 보기</div>
              <RiExternalLinkLine color="#b3b3b3" />
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="boxed">
            <div className="bidding-info">
              <div className="bid">
                <p className="subtitle">현재 입찰가</p>
                <p className="numbers">0.60BBR</p>
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
              <Link className="button" to={`/participate/${myArt[0].id}`}>
                경매 참여하기
              </Link>
            </div>
          </div>
          {/* <h3 className="artPage-subtitle">즉시구매가</h3> */}
          <div className="boxed purchase">
            <div className="left-contain">
              <p className="title">즉시구매가</p>

              <div className="price">
                <div className="number">
                  <p>{`2,000,000 ${unit}`}</p>
                  <p className="price-converted">1,584,302</p>
                </div>
                <div className="unit">
                  <AiOutlineDownCircle />
                  <ul className="unit-dropdown">
                    <li onClick={() => setUnit("ETH")}>ETH</li>
                    <li onClick={() => setUnit("BBR")}>BBR</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-contain">
              <div className="button" onClick={() => setShowModal(true)}>
                즉시구매하기
              </div>
            </div>
          </div>
          <p className="artPage-subTitle">입찰 현황</p>
          {biddingStatus.map((item) => (
            <div className="boxed bidders">
              <div className="bidder-avatar"></div>
              <div className="bidder-details">
                <p className="bidder-info">
                  입찰자 <span>{item.bidder}</span>
                </p>
                <p className="bidder-date">{item.dateTime}</p>
              </div>
              <div className="bidder-bid">
                <div className="bidder-bid-crypto">{item.bid} ETH</div>
                <div className="bidder-bid-convert">1,584,302원</div>
              </div>
              <RiExternalLinkLine color="#b3b3b3" size={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="artist-info">
        <p className="artPage-subTitle">아티스트</p>
        <div className="artist-info-subcontainer">
          <div
            style={{
              backgroundImage: `url(${artistImg})`,
            }}
            className="profile-image"
          ></div>
          <div>
            <p>{artist}</p>
            <p className="artist-type" style={{ fontSize: "30px", margin: 0 }}>
              {artistType}
            </p>
          </div>
          <div className="artist-description">{artistDesc}</div>
        </div>
      </div>
      <BuyNowModal closeModal={closeModal} showModal={showModal} />
    </div>
  );
};

export default ArtPage;
