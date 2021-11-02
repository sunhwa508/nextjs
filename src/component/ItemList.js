import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ItemList({ list }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };

  console.log("list", list);
  return (
    <>
      <div className="ui grid">
        {list.map((item) => {
          return (
            <Link key={item.id} href={`/detail/${item.id}`}>
              <a>
                <div className="four wide column">
                  <div className="ui card">
                    <div className="image">
                      <img src={item.image_link} alt={item.name} />
                    </div>
                    <div className="content">
                      <a className="header">{item.name}</a>
                      <div className="meta">
                        <span className="date">{item.brand}</span>
                      </div>
                      <div className="description">{item.price}</div>
                    </div>
                    <div className="extra content">
                      <a>
                        <i className="heart icon"></i>
                        {item.rating}
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
