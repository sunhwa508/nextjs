import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { Header, Divider } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getDate() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | 프론트몽키</title>
        <meta name="description" content="프론트몽키 홈 입니다."></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }} className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      )}
      {!isLoading && (
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
      )}
    </div>
  );
}
