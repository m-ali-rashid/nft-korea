import React from "react";
import { works } from "../data/artistData";
import { useParams } from "react-router-dom";
import NewBidModal from "../sections/NewBidModal";
// import { NULL } from "node-sass";

const Participate = () => {
  const { id } = useParams();
  const [newBid, setNewBid] = React.useState(0);
  const [permissionToBid, setPermissionToBid] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);

  const myArt = works.filter((obj) => {
    return obj.id === id;
  });
  const { title, image, artistImg, artist, currentBid, cryptoUnit } = myArt[0];

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setNewBid(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newBid", newBid);
    if (newBid <= currentBid) {
      console.log("asdf", newBid, currentBid);
      setPermissionToBid(false);
      setShowModal(false);
    } else {
      console.log("f");
      setShowModal(true);
    }
    newBid <= currentBid ? setPermissionToBid(false) : setShowModal(true);
    !permissionToBid &&
      setTimeout(() => {
        setPermissionToBid(true);
      }, 2000);
  };

  const closeModal = (e) => {
    setShowModal(false);
  };

  return (
    <div className="container participate-container">
      <div className="left-container">
        <div className="card card-participate">
          <div
            className="img-container-container"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              //   backgroundSize: "auto 100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="work-info">
            <h3 className="title">{title}</h3>
            <div className="artist">
              <div
                className="profileImg"
                style={{
                  backgroundImage: `url(${artistImg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <h3>{artist}</h3>
            </div>
          </div>
          <div class="bidding-info">
            <div class="bid">
              <p class="subtitle">?????? ?????????</p>
              <p class="numbers">
                {currentBid}
                {cryptoUnit}
              </p>
            </div>
            <div class="bid-ending">
              <p class="subtitle">????????????</p>
              <div class="remaining-time">
                4<span>???{"  "}</span>
                18<span>???{"  "}</span>
                12<span>???{"  "}</span>
                27<span>???</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h1>????????????</h1>
        <p style={{ fontSize: "15px", marginBottom: "11px", fontWeight: 500 }}>
          ?????? ?????????
        </p>
        <p className="current-bid">
          {currentBid}
          {cryptoUnit.toUpperCase()}
        </p>
        <div className="bid-form">
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div className="fields-container">
              <input
                type="number"
                name="bidPrice"
                onChange={(e) => handleInputChange(e)}
              />
              <select>
                <option selected value="BBR">
                  BBR
                </option>
                <option value="ETH">ETH</option>
              </select>
            </div>
            <p className="convert-amnt">1,584,302???</p>
            <div className="your-balance">
              <p>Your Balance</p>
              <p className="your-balance-rem">0 BBR</p>
            </div>
            <p className="tandc">
              ?????? ????????? ?????? ???????????? ??? ????????????. ???, ???????????? ????????? ??????
              ??????????????? ???????????? ???????????? ???????????? ???????????????.
            </p>
            <input
              className="button submit"
              type="submit"
              value={
                permissionToBid
                  ? "????????? ???????????????."
                  : "?????? ????????? ????????? ????????? ??????????????????."
              }
              onClick={(e) => handleSubmit(e)}
            />
          </form>
        </div>
      </div>
      <NewBidModal closeModal={closeModal} showModal={showModal} />
    </div>
  );
};

export default Participate;
