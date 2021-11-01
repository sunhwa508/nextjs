import Link from "next/link";
import { useRouter } from "next/router";

export default function Gnb() {
  const router = useRouter();

  return (
    <div>
      <div className="ui inverted menu">
        <Link href="/">
          <a className={`${router.pathname === "/" ? "active item" : "item"}`}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`${
              router.pathname === "/about" ? "active item" : "item"
            }`}
          >
            About
          </a>
        </Link>
      </div>
    </div>
  );
}
