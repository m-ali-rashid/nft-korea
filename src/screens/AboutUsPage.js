import React from "react";
import BerryAuction from "../assets/images/berry-auction.png";
import bbr from "../assets/pngs/bbr-circle.png";
import nft from "../assets/pngs/nft.png";

const AboutUsPage = () => {
  return (
    <>
      <div className="page-container about-us">
        <div className="about-us-description">
          <h1 className="about-us-heading">ABOUT</h1>
          <h1 className="berry-gradient about-us-heading">BERRYAUCTION</h1>
          <p className="about-us-desc">
            베리옥션은 아티스트들이 기존의 작품들을 완전히 새로운 방식의 가치를
            만들고 컬렉터들과 더욱 강력한 문화 연결을 구축할 수 있는 새로운 창조
            경제 구축을 목표로 하는 플랫폼입니다.
          </p>
          <h1 className="about-us-heading" style={{ marginTop: "70px" }}>
            Token
          </h1>
          <h1 className="orange-gradient about-us-heading">Economy</h1>
          <p className="about-us-desc">
            베리옥션은 BBR, ETH 두개의 코인으로 경매에 참여하실 수 있습니다.
            BBR은 입찰 및 즉시구매에 사용되며, ETH는 즉시구매에 사용됩니다.
          </p>
          <div style={{ marginTop: 50, display: "flex" }}>
            <img src={bbr} alt="" style={{ height: "fit-content" }} />
            <div className="bbr-info">
              <h3 className="bbr-heading">BBR (Bitberry Token)</h3>
              <p className="about-us-desc" style={{ margin: "8px 0" }}>
                BBR 컨트랙트 주소를 복사하여 귀하의 월렛에 BBR 코인을
                추가해주세요.
              </p>
              <div className="button bbr-btn">컨트랙트 주소 복사</div>
            </div>
          </div>
          <p className="about-us-desc">
            BBR코인은 비트베리파이낸스의 Defi 코인입니다. 현재 채굴이 종료되어,
            비트베리스왑에서 타코인과의 교환을 통해 구입하실 수 있습니다.{" "}
          </p>
          <div className="button about-us-btn">
            비트베리스왑(BBR 교환) 바로가기
          </div>
        </div>
        <div
          className="about-us-image"
          style={{
            backgroundImage: `url(${BerryAuction})`,
            backgroundPosition: "center 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div
        className="page-container about-us nft-container"
        // style={{ padding: 0, alignItems: "center" }}
      >
        <div
          className="about-us-nft-img"
          style={{
            backgroundImage: `url(${nft})`,
            backgroundPosition: "center 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="about-us-nft-desc">
          <h1 className="about-us-heading">
            WHAT IS <span className="blue-gradient">NFT</span>?
          </h1>
          <p className="about-us-desc">
            NFT는 대체 불가능한 토큰(Non-Fungible Token)'이라는 뜻으로 희소성을
            갖는 디지털 자산을 대표하는 토큰을 말합니다.
          </p>
          <p className="about-us-desc">
            NFT는 블록체인 기술을 활용하지만, 기존의 가상자산과 달리 디지털
            자산에 별도의 고유한 인식 값을 부여하고 있어 상호교환이 불가능하다는
            특징이 있습니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
