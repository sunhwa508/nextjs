import React from "react";
// 이 파일은 빌드할때 정적 생성 됩니다.
// 500 서버에러는 next build => next start 프로덕션 모드에서 확인 가능하다.
export default function Error404() {
  return (
    <div className="ui grid middle aligned segment red inverted">
      <div className="ui column center aligned">
        <div className="ui inverted statistic">
          <div className="value">404</div>
          <div className="label">Error</div>
        </div>

        <div className="ui message red inverted">
          <div className="header">Description</div>
          <p>Not found</p>
        </div>
      </div>
    </div>
  );
}
