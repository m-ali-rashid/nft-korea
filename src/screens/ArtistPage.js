import React from "react";
import { useParams } from "react-router-dom";
import { artist, works as arts } from "../data/artistData";
import { FiCopy } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import FBIcon from "../assets/svgs/facebook.svg";
import InstaIcon from "../assets/svgs/instagram.svg";
import TIcon from "../assets/svgs/twitter.svg";
import VIcon from "../assets/svgs/v-live.svg";

const ArtistPage = () => {
  let history = useHistory();
  const router_id = useParams().id;

  const myArtist = artist.filter((obj) => {
    return obj.id === router_id;
  });

  const {
    // id,
    profilePhoto,
    coverPhoto,
    name,
    type,
    desc,
    // works,
    // walletAddress,
    // instagram,
    // facebook,
    // twitter,
    // vLive,
  } = myArtist[0];

  const myArts = arts.filter((obj) => {
    console.log(obj.artist, name);
    return obj.artist === name;
  });

  return (
    <>
      <div
        className="artist-container-cover-photo"
        style={{
          backgroundImage: `url(${coverPhoto})`,
          backgroundPosition: "center 0%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="page-container artist-container">
        <div
          className="profile-photo"
          style={{
            backgroundImage: `url(${profilePhoto})`,
            backgroundPosition: "center 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="main-container">
          <div className="sidebar">
            <div className="wallet-address">
              <p className="title">월렛주소</p>
              <p className="address">
                0x42f3...aaa5 <FiCopy />
              </p>
            </div>
            <div className="artist-info">
              <p className="artist-name">{name}</p>
              <p className="artist-type">{type}</p>
              <h2 className="sidebar-title">아티스트 소개</h2>
              <p className="artist-desc">{desc}</p>

              <div className="boxed">
                <img src={InstaIcon} height={22} alt="" />
                <p>Instagram</p>
              </div>
              <div className="boxed">
                <img src={TIcon} height={22} alt="" />
                <p>Twitter</p>
              </div>
              <div className="boxed">
                <img src={FBIcon} height={22} alt="" />
                <p>Facebook</p>
              </div>
              <div className="boxed">
                <img src={VIcon} height={22} alt="" />
                <p>V Live</p>
              </div>
            </div>
          </div>
          <div className="inner-container">
            <h3>등록된 작품</h3>

            <div className="card-container">
              {myArts.map(
                ({
                  id,
                  title,
                  image,
                  desc,
                  artistImg,
                  artist,
                  artistType,
                  artistDesc,
                  currentBid,
                  cryptoUnit,
                  aucEndingDate,
                }) => (
                  <div
                    className="card artistPage-card"
                    style={{ margin: "1rem" }}
                    key={id}
                  >
                    {/* <NavLink to={`https://grieving-queen.surge.sh/art/${id}`}> */}
                    <div
                      className="img-container-container"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push(`/art/${id}`)}
                    >
                      <div
                        className="img-container"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundPosition: "center",
                          //   backgroundSize: "auto 100%",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                    {/* </NavLink> */}
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
                    <div
                      class="bidding-info"
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <div class="bid">
                        <p
                          class="subtitle"
                          style={{
                            color: "#666",
                          }}
                        >
                          판매가
                        </p>
                        <p
                          class="numbers"
                          style={{
                            color: "black",
                          }}
                        >
                          {currentBid}
                          {cryptoUnit}
                        </p>
                      </div>
                      <div class="bid-ending">
                        <p
                          class="subtitle"
                          style={{
                            color: "#666",
                          }}
                        >
                          소유자
                        </p>
                        <div
                          class="remaining-time"
                          style={{
                            color: "black",
                          }}
                        >
                          0x42f3...aaa5
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistPage;
