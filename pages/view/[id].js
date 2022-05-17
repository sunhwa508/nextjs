import Head from "next/head";
import axios from "axios";
import Item from "../../src/component/Item";

export default function Post({ item, name }) {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {name} 환경입니다.
      {item && <Item item={item} />}
    </>
  );
}

// getServerSideProps는 데이터 요청시 인출해야 페이지를 미리 렌더링해야하는 경우 사용한다. 
export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
