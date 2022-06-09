import React from "react";
import { AiOutlineClose } from "react-icons/ai";
// import Animated from "../components/rolling.svg";
// import AnimatedBlack from "../components/rolling-black.svg";
// import { walletConnect } from "../assets/imgs/walletconnect.png";
// import { metaMask } from "../assets/pngs";

// import walletConnect from "../assets/pngs/walletconnect.png";
// import metaMask from "../assets/pngs/metamask.png";

const BuyNowModal = ({ closeModal, showModal }) => {
  return (
    <div
      className={`connect-wallet-modal-container ${
        !showModal && "connect-wallet-modal-container-hide"
      }`}
    >
      <div className="modal">
        <div>
          <div className="close-btn" onClick={closeModal}>
            <AiOutlineClose size={32} color="#999" />
          </div>
          <h3 className="title" style={{ padding: 0, marginBottom: 7 }}>
            즉시구매가 완료되었습니다.
          </h3>
          <p className="body" style={{ fontSize: "15px", padding: 0 }}>
            나의 경매에서 해당 NFT를 요청하세요.
          </p>
          <h3 className="rem-subtitle">
            <span>즉시구매가 </span> 385.24 BBR
          </h3>
        </div>
        <div>
          <div
            className="button"
            style={{ justifyContent: "center", marginTop: 29 }}
            onClick={closeModal}
          >
            <p>확 인</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
