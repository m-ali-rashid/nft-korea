import React from "react";

const TermsOfUse = () => {
  return (
    <div className="page-container privacy-policy">
      <h1 className="title">이용약관</h1>

      <div className="privacy-policy-container">
        <p className="privacy-policy-desc" style={{ fontWeight: 500 }}>
          제1조 일반
        </p>
        <p className="privacy-policy-desc">
          본 약관은 (주)몬스터큐브(이하 ”회사”)가 제공하는 베리옥션 및 관련 제반
          플랫폼의 서비스(아래 정의) 이용과 관련하여 회사와 "회원"(아래 정의)의
          권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다
        </p>

        <div style={{ marginLeft: 450, marginTop: 105, marginBottom: 440 }}>
          <p className="privacy-policy-desc" style={{ fontWeight: 500 }}>
            메타파이 이용약관 - 그대로 가져오시면 됩니다.
          </p>
          <p className="privacy-policy-desc" style={{ fontWeight: 500 }}>
            https://metapie.io/
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
