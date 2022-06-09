import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import AvatarBadge from "../components/AvatarBadge";
// import LinesEllipsis from "react-lines-ellipsis";
import EllipsisText from "react-ellipsis-text";

const Gallery = ({ collection, data }) => {
  let history = useHistory();
  return (
    <div className="page-container gallery">
      <h2 className="heading">{collection}</h2>
      {collection === "아티스트" ? (
        <div
          className="card-container"
          style={{ justifyContent: "flex-start" }}
        >
          {data &&
            data.map(
              ({
                id,
                profilePhoto,
                coverPhoto,
                name,
                type,
                desc,
                works,
                // walletAddress,
                // instagram,
                // facebook,
                // twitter,
                // vLive,
              }) => (
                <div
                  className="card"
                  key={id}
                  // hasBorder={false}
                  hasPadding={false}
                  style={{ marginRight: 20 }}
                >
                  <NavLink to={`/artist/${id}`}>
                    <div
                      className="cover-img"
                      style={{
                        backgroundImage: `url(${coverPhoto})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </NavLink>

                  <NavLink to={`/artist/${id}`}>
                    <div className="profile-img-container">
                      <div
                        className="profile-img"
                        style={{
                          backgroundImage: `url(${profilePhoto})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  </NavLink>
                  <div className="artist-info">
                    <p className="artist-name">{name}</p>
                    <p className="artist-type">{type}</p>
                    <p className="artist-desc">{desc}</p>
                  </div>
                  <div className="additional-info">
                    <div className="num-works">
                      <p className="num">{works}</p>
                      <p className="numtxt">작품</p>
                    </div>
                    <div
                      className="button"
                      onClick={() => history.push(`/artist/${id}`)}
                    >
                      작품보기
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      ) : (
        <div className="card-container">
          {data &&
            data
              // .slice(0, 4)
              .map(
                ({
                  id,
                  title,
                  image,
                  artistImg,
                  artist,
                  artistID,
                  currentBid,
                  cryptoUnit,
                }) => (
                  <div className="card" key={id}>
                    <NavLink to={`art/${id}`}>
                      <div className="img-container-container">
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
                    </NavLink>
                    <div className="work-info">
                      <h3 className="title">
                        <EllipsisText text={title} length={15} />
                        {/* {title} */}
                      </h3>
                      <AvatarBadge
                        id={artistID}
                        src={artistImg}
                        title={artist}
                        hasBorder={false}
                        hasPadding={false}
                        textClr="#666"
                      />
                    </div>
                    <div
                      className="bidding-info"
                      style={{
                        backgroundColor:
                          collection === "진행중인 경매" ? "black" : "white",
                      }}
                    >
                      <div className="bid">
                        <p
                          className="subtitle"
                          style={{
                            color:
                              collection === "진행중인 경매" ? "white" : "#666",
                          }}
                        >
                          {collection === "진행중인 경매"
                            ? "현재 입찰가"
                            : "판매가"}
                        </p>
                        <p
                          className="numbers"
                          style={{
                            color:
                              collection === "진행중인 경매"
                                ? "white"
                                : "black",
                          }}
                        >
                          {currentBid}
                          {cryptoUnit}
                        </p>
                      </div>
                      <div className="bid-ending">
                        <p
                          className="subtitle"
                          style={{
                            color:
                              collection === "진행중인 경매" ? "white" : "#666",
                          }}
                        >
                          {collection === "진행중인 경매"
                            ? "남은시간"
                            : "소유자"}
                        </p>
                        <div
                          className="remaining-time"
                          style={{
                            color:
                              collection === "진행중인 경매"
                                ? "white"
                                : "black",
                          }}
                        >
                          {collection === "진행중인 경매" ? (
                            <>
                              4<span>일{"  "}</span>
                              18<span>시{"  "}</span>
                              12<span>분{"  "}</span>
                              27<span>초</span>
                            </>
                          ) : (
                            "0x42f3...aaa5"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
