import Logo from "@/public/images/logo.png";
import Image from "next/image";
import { menu } from "./data";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__logo">
          <a href="#">
            <figure>
              <Image src={Logo.src} alt="logo" fill sizes="(max-width: 500px) 100vw"/>
            </figure>
          </a>
        </div>
        <div className="footer__nav">
          <ul>
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__text">@Copyright White theme</div>
      </div>
    </footer>
  );
}
