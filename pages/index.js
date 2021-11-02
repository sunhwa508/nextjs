import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { Header, Divider } from "semantic-ui-react";

export default function Home({ list }) {
  // 페이지가 바로 나타나기 때문에 loading 화면이 필요하지 않음
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | 프론트몽키</title>
        <meta name="description" content="프론트몽키 홈 입니다."></meta>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 6)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  // 클라이언트 환경이 아니기 때문에 NEXT_PUBLIC 을 붙힐 필요 없음
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
