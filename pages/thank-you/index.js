import Layout from "@/components/templates/layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Thankyou() {
  const router = useRouter();
  const [loading, setloading] = useState(false)
  useEffect(() => {

    if (!localStorage.getItem("send_mail")) {
      setTimeout(()=>{
        router.push("/");
      },500)
      return;
    }
    localStorage.removeItem("send_mail");
    setloading(true)
  }, []);

  if(!loading) {
    return (
      <Layout>
        <div className="container">
          <div className="spinner-wrapper">
            <div className="spinner" />
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="thankyou">
        <div className="container">
          <figure>
            <Image
              src="/images/ty_pic.png"
              alt="thankyou"
              fill="true"
              sizes="(max-width: 170px) 100vw"
            />
          </figure>
          <h2>THANK YOU FOR YOUR SUBMITION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link className="btn-custom" href="/">BACK TO HOME</Link>
        </div>
      </div>
    </Layout>
  );
}