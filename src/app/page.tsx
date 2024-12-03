import Link from "next/link";
import "./page.scss";

const block = "home-page";
export default function Home() {
  return (
    <div className={block}>
      <Link className={`${block}__link`} href="/dashboard">
        Login
      </Link>
    </div>
  );
}
