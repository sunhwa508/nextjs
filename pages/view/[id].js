import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Item from "../../src/component/Item";
export default function Post() {
  const router = useRouter();
  const [item, setItem] = useState();
  const { id } = router.query;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getDate() {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getDate();
    }
  }, [id]);

  return (
    <>
      <Item item={item} />
    </>
  );
}
