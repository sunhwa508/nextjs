import React from "react";

export default function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : `An error occured on client`}
    </p>
  );
}

// 클라이언트, 서버쪽 에러를 동시에 관리할 수 있다.
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.err.statusCode : 404;
  return { statusCode };
};
