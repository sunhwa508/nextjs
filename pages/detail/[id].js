import axios from "axios";
import Head from "next/head";
import Item from "../../src/component/Item";
import { useRouter } from "next/router";

const Post = ({ item, name }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div style={{ padding: "300px 0" }} className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

// CSR의 경우 useEffect, created 함수를 이용해 data fetching을 한다면 Next에서는 getInitialProps를 이용하여 data fetching 작업을 합니다.
// Next v9 이상에서는 getInitialProps 대신 getStaticProps, getStaticPaths, getServerSideProps를 사용합니다.


export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    // 빌드 타임 때 아래 정의한 /id 동적인값 경로만 pre렌더링.
    // 정적으로 렌더링할 경로 설정
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id + "",
      },
    })),
    // 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 지 여부
    fallback: true,
  };
}
// getStaticProps 빌드시 고정되는 값, 빌드 이후 값 변경 불가 
export async function getStaticProps(context) {
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
