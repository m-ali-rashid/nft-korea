import React from "react";
import CardLarge from "../components/CardLarge.js";
import { noWorks } from "../data/artistData";

const MyAuctions = () => {
  return (
    <div className="page-container my-auctions">
      <h1 className="title">나의 경매</h1>
      <div className="my-auctions-container">
        {noWorks.length > 0 ? (
          noWorks.map((item) => <CardLarge data={item} />)
        ) : (
          <div className="no-auctions">
            <h1 className="no-auctions-title">
              경매 참여내역이 여기에 표시됩니다.
            </h1>
            <p className="no-auctions-desc">
              귀하가 경매 입찰하거나 낙찰되었을 때,
            </p>
            <p className="no-auctions-desc">해당 내역들이 여기에 표시됩니다.</p>
            <div className="button no-auctions-btn">작품 보러가기</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAuctions;
