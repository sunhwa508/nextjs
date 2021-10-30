import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | 프론트몽키</title>
      </Head>
      <p>
        1. 컴파일과 번들링이 자동으로 된다(webpack 과 babel) nextjs 버전 17
        부터는 SWC 라는 컴파일러를 사용한다. 2. 자동 리프레쉬 기능으로 수정하면
        화면에 바로 반영된다. 3. 서버사이드 렌더링이 지원된다. 4. 스태틱 파일을
        지원한다.
      </p>
    </div>
  );
}
