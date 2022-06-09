import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Animated from "../components/rolling.svg";
import AnimatedBlack from "../components/rolling-black.svg";
// import { walletConnect } from "../assets/imgs/walletconnect.png";
// import { metaMask } from "../assets/pngs";

import walletConnect from "../assets/pngs/walletconnect.png";
import metaMask from "../assets/pngs/metamask.png";

const ConnectWalletModal = ({
  closeModal,
  showWalletModal,
  connected,
  setConnected,
}) => {
  const [titleMM, setTitleMM] = React.useState("Metamask");
  const [titleWC, setTitleWC] = React.useState("WalletConnect");
  const handleClickMM = () => {
    setTitleMM("연결중...");
    setTimeout(() => {
      setTitleMM("Metamask");
      setConnected(true);
    }, 2000);
  };
  const handleClickWC = () => {
    setTitleWC("연결중...");
    setTimeout(() => {
      setTitleWC("WalletConnect");
      setConnected(true);
    }, 2000);
  };
  React.useEffect(() => {
    connected &&
      setTimeout(() => {
        console.log("close now");
        closeModal();
      }, 2000);
  }, [closeModal, connected]);
  return (
    <div
      className={`connect-wallet-modal-container ${
        !showWalletModal && "connect-wallet-modal-container-hide"
      }`}
    >
      {!connected ? (
        <div className="modal">
          <div>
            <div
              className="close-btn"
              onClick={() => {
                setConnected(false);
                closeModal();
              }}
            >
              <AiOutlineClose size={32} color="#999" />
            </div>
            <h3 className="title">월렛 연결하기</h3>
            <p className="body">
              월렛을 연결함으로써 귀하는 당사의 이용약관 및 개인정보 보호정책에
              동의합니다.
            </p>
          </div>
          <div>
            <div
              className={`button ${
                titleMM !== "Metamask" ? "button-active" : ""
              }`}
              onClick={() => handleClickMM()}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {titleMM !== "Metamask" && (
                  <object type="image/svg+xml" data={Animated} width={50}>
                    svg-animation
                  </object>
                )}
                <p>{titleMM}</p>
              </div>
              <img src={metaMask} alt="" width={37} />
            </div>
            <div
              className={`button ${
                titleWC !== "WalletConnect" && "button-active"
              }`}
              onClick={() => handleClickWC()}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {titleWC !== "WalletConnect" && (
                  <object type="image/svg+xml" data={Animated} width={50}>
                    svg-animation
                  </object>
                )}
                <p>{titleWC}</p>
              </div>
              <img src={walletConnect} alt="" width={37} />
              {/* <AiFillAccountBook size="24" /> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="modal">
          <div>
            <div
              className="close-btn"
              onClick={() => {
                setConnected(false);
                closeModal();
              }}
            >
              <AiOutlineClose size={32} />
            </div>
            <h3 className="title">월렛을 연결하기 위해서 서명해 주세요.</h3>
            <p className="body">
              베리옥션은 이 서명을 사용하여 사용자가 해당 이더리움 주소의
              소유자인지 확인합니다.
            </p>
            <div className="loader">
              <object type="image/svg+xml" data={AnimatedBlack} width={100}>
                svg-animation
              </object>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWalletModal;
