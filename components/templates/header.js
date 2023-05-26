import Logo from "@/public/images/logo.png";
import Link from 'next/link';
import Image from "next/image";
import { menu } from "./data";

export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <nav className="navbar-pc">
          <div className="header__item">
            <Link className="header__logo" href="/">
              <figure>
                <Image src={Logo.src} alt="logo" fill sizes="(max-width: 500px) 100vw"/>
              </figure>
            </Link>
            <ul className="header__nav">
              {menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <nav className="navbar-mobile">
          <div className="navbar">
            <div className="header__logo">
              <a className="header__logo">
                <figure>
                  <Image src={Logo.src} alt="logo-mobile" fill sizes="(max-width: 200px) 100vw"/>
                </figure>
              </a>
            </div>
            <div className="menu">
              <input className="checkbox" type="checkbox" />
              <div className="hamberger">
                <div className="top-line"></div>
                <div className="center-line"></div>
                <div className="bottom-line"></div>
              </div>
              <div className="back-disable"></div>
              <div className="slider">
                <ul className="slider-menu">
                  {menu.map((item, index) => {
                    return (
                      <li className="slider-premium" key={index}>
                        <a href="#">{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
