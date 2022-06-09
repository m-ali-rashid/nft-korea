import React from "react";
// import { useParams } from "react-router-dom";
import { collector } from "../data/artistData";
import { FiCopy } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const BidderPage = () => {
  // const router_id = useParams().id;

  // const myArtist = artist.filter((obj) => {
  //   return obj.id === router_id;
  // });

  const {
    // id,
    // profilePhoto,
    // coverPhoto,
    name,
    type,
    desc,
    // collection,
    // walletAddress,
    // instagram,
    // facebook,
    // twitter,
    // vLive,
  } = collector[0];

  // console.log(collector);

  // const myArts = arts.filter((obj) => {
  //   console.log(obj.artist, name);
  //   return obj.artist === name;
  // });

  const myArts = [];

  return (
    <>
      <div
        className="artist-container-cover-photo"
        style={{
          backgroundColor: "white",
          // backgroundImage: `url(${coverPhoto})`,
          // backgroundPosition: "center 0%",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="page-container artist-container">
        <div
          className="profile-photo"
          style={{
            // backgroundColor: "blue",
            background:
              "linear-gradient(90deg, rgba(81,167,249,1) 0%, rgba(70,87,245,1) 100%)",
            // backgroundImage: `url(${profilePhoto})`,
            // backgroundPosition: "center 0%",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
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
              <h2>아티스트 소개</h2>
              <p className="artist-desc">{desc}</p>

              {/* <div className="boxed">Instagram</div>
            <div className="boxed">Twitter</div>
            <div className="boxed">Facebook</div>
            <div className="boxed">V Live</div> */}
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
                    <NavLink to={`art/${id}`}>
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
                    </NavLink>
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

export default BidderPage;
