import Layout from "@/components/templates/layout";
import axios from "@/utils/axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AboutItem from "@/components/organisms/aboutItem";

export default function About() {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("about")
      .then((response) => {
        if (response !== undefined) {
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <Layout>
      <div className="about">
        <div className="container">
          <h2 className="blog__title">About</h2>
          {data.map(
              (item, index) =>
              <AboutItem
                key={index}
                srcImg={item.image?.url}
                altImg={item.image?.alt}
                title={item.title ? item.title : ""}
                describe={item.describe ? item.describe : ""}
                text_left_right={item.text_left_right}
              />
            )}
        </div>
      </div>
    </Layout>
  );
}
