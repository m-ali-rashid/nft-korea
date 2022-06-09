import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const ModifyCollectorProfilePage = () => {
  return (
    <div className="container modifyCollectorProfile-container">
      <h1>프로필 수정</h1>
      <div className="boxed inner-container">
        <div className="form-container">
          <div className="label-container">
            <label htmlFor="name">이름 또는 닉네임</label>
            <input type="text" name="name" placeholder="이름 또는 닉네임" />
          </div>
          <p className="description"></p>
          {/* <p className="emptyspace"></p> */}
        </div>
        <div className="form-container">
          <div className="label-container">
            <label htmlFor="email">이메일 주소</label>
            <input type="email" name="email" placeholder="이메일 주소" />
          </div>
          <p className="description">
            베리옥션에서의 활동에 대한 알림을 받으시려면, 이메일 주소를
            추가해주세요. 이메일 주소는 프로필에 표시되지 않습니다.
          </p>
        </div>
        <div className="form-container">
          <div className="label-container">
            <label htmlFor="email">소개말</label>
            <textarea name="intro" placeholder="소개말" />
          </div>
          <p className="description"></p>
        </div>
        <div className="form-container-2">
          <div className="label-container-2">
            <p className="label">프로필 이미지</p>
            <p className="description">
              추천 이미지사이즈 : 1,000x1000px <br />
              파일형식 : JPG, PNG 또는 GIF <br />
              최대파일용량 : 10MB
            </p>
          </div>
          <div className="drop-area">
            <p className="label">
              이미지 파일을 여기로 끌어 놓거나 여기를 클릭해서 해당파일을
              첨부하세요.
            </p>
          </div>
        </div>
        <div className="form-container-2">
          <div className="label-container-2">
            <p className="label">프로필 커버 이미지</p>
            <p className="description">
              추천 이미지사이즈 : 1,000x1000px <br />
              파일형식 : JPG, PNG 또는 GIF <br />
              최대파일용량 : 10MB
            </p>
          </div>
          <div className="drop-area">
            <p className="label">
              이미지 파일을 여기로 끌어 놓거나 여기를 클릭해서 해당파일을
              첨부하세요.
            </p>
          </div>
        </div>

        <div className="form-container-2">
          <div className="label-container-2">
            <p className="label">프로필 인증</p>
            <p className="description">
              프로필이 인증되었음을 프로필화면에서 표시합니다.
            </p>
          </div>
          <div className="btn-area">
            <div className="button">
              <AiOutlineTwitter size={24} />
              Twitter 인증하기
            </div>
            <div className="button">
              <AiOutlineInstagram size={24} />
              Instagram
            </div>
          </div>
        </div>
        <div className="form-container-end">
          <div className="label-container">
            <p className="label">추가정보</p>
            <p className="description"></p>
          </div>
          <div className="boxed form-boxed">
            <div className="boxed-label">
              <p>Website</p>
              <small>https://</small>
            </div>
            <input className="boxed-input" type="text" />
          </div>
          <div className="boxed form-boxed">
            <div className="boxed-label">
              <p>YouTube</p>
              <small></small>
            </div>
            <input className="boxed-input" type="text" />
          </div>
          <div className="boxed form-boxed">
            <div className="boxed-label">
              <p>Facebook</p>
              <small>facebook.com/</small>
            </div>
            <input className="boxed-input" type="text" />
          </div>
          <div className="boxed form-boxed">
            <div className="boxed-label">
              <p>TikTok</p>
              <small>tiktok.com/</small>
            </div>
            <input className="boxed-input" type="text" />
          </div>
          <div className="boxed form-boxed">
            <div className="boxed-label">
              <p>V Live</p>
              <small>vlive.tv/channel/</small>
            </div>
            <input className="boxed-input" type="text" />
          </div>
        </div>
        <div className="button">저장하기</div>
      </div>
    </div>
  );
};

export default ModifyCollectorProfilePage;
