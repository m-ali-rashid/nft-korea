import React from "react";
import { AiOutlineClose } from "react-icons/ai";
// import Animated from "../components/rolling.svg";
// import AnimatedBlack from "../components/rolling-black.svg";
// import { walletConnect } from "../assets/imgs/walletconnect.png";
// import { metaMask } from "../assets/pngs";

// import walletConnect from "../assets/pngs/walletconnect.png";
// import metaMask from "../assets/pngs/metamask.png";

const NewBidModal = ({ closeModal, showModal }) => {
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
          <h3 className="title">입찰이 완료되었습니다.</h3>
          <p className="body" style={{ fontSize: "15px", padding: 0 }}>
            경매종료까지 남은시간은 아래와 같습니다.
          </p>
          <h3 className="rem-subtitle">
            4<span>일</span> 18<span>시</span> 12<span>분</span> 27
            <span>초</span>
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

export default NewBidModal;
