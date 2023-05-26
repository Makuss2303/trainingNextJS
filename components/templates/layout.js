import Header from "@/components/templates/header";
import Footer from '@/components/templates/footer';
import { useEffect } from "react";

export default function Layout({ children }) {

  useEffect(() => {
    var _header = document.querySelector("#header");
    var toggleClass = "is-sticky";
    window.addEventListener("scroll", () => {
      var currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        _header.classList.add(toggleClass);
      } else {
        _header.classList.remove(toggleClass);
      }
    });

  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
