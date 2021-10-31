import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import Image from "next/image";

export default function TOP() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <Image
            src={"/images/logo.png"}
            alt="logo"
            style={{ display: "block", width: 80 }}
            width={500}
            height={500}
          />
        </div>
        <Header as="h1">코딩앙마</Header>
      </div>
      <Gnb />
    </div>
  );
}
