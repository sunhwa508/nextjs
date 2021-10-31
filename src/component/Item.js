import React from "react";
import { Button } from "semantic-ui-react";
export default function Item({ item = {} }) {
  console.log("item", item);
  const { image_link, name, price, description } = item;
  return (
    <>
      <div>
        <img src={image_link} alt={item.name} />
      </div>
      <div>
        <string>{name}</string>
        <string>${price}</string>
      </div>
      <Button color="orange">구매하기</Button>
      <div>
        <p>{description}</p>
      </div>
    </>
  );
}
