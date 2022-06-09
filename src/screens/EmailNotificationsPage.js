import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const EmailNotificationsPage = () => {
  // const [notify, setNotify] = React.useState(true);
  // const [nFT, setNFT] = React.useState(false);
  // const handleNotifyCheckbox = () =>{
  //     setNotify(!notify)
  // }
  return (
    <div className="container modifyCollectorProfile-container">
      <h1>이메일 알림설정</h1>
      <div className="boxed inner-container">
        <div className="form-container">
          <div className="label-container">
            <label htmlFor="email">이메일 주소</label>
            <input type="email" name="email" placeholder="이메일 주소" />
          </div>
          <p className="description"></p>
          {/* <p className="emptyspace"></p> */}
        </div>
        <div className="form-container-end">
          <div className="label-container">
            <p className="label">이메일 알림</p>
            <p className="description"></p>
          </div>
        </div>
        <div className="checkboxed">
          <div className="checkbox-group">
            <Checkbox
              defaultChecked
              color="black"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <div className="cb-description">
              <p className="cb-title">나의 경매 진행상황 알립</p>
              <div className="cb-desc">
                입찰이 확정되었을 때, 나의 입찰가를 초과한 입찰가가 있을때,
                경매가 종료되었을 때 이메일 알림을 수신합니다.
              </div>
            </div>
          </div>
          <div className="checkbox-group">
            <Checkbox
              defaultChecked
              color="black"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <div className="cb-description">
              <p className="cb-title">새로운 NFT 경매 알림</p>
              <div className="cb-desc">
                베리옥션에서 새로운 NFT 경매가 시작하면 이메일 알림을 받습니다.
              </div>
            </div>
          </div>
        </div>

        <div className="button">저장하기</div>
      </div>
    </div>
  );
};

export default EmailNotificationsPage;
