import Layout from "@/components/templates/layout";
import axios from "@/utils/axios";
import HeadSection from "@/components/head";
import FeatureItem from "@/components/organisms/featureItem";
import BlogItem from "@/components/organisms/blogItem";
import { useEffect, useState } from "react";
import "@/pages/index.module.scss";

export default function Home() {
  const [mainVisual, setMainVisual] = useState([]);
  const [feature, setFeature] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("homepage")
      .then((response) => {
        if (response !== undefined) {
          setMainVisual(response.data.main_visual);
          setFeature(response.data.feature);
          setBlog(response.data.blog);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      <HeadSection title="Homepage" />
      <section className="mv">
        <div
          className="mv__content"
          style={
            mainVisual.background
              ? {
                  backgroundImage: `url(${mainVisual.background})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }
              : {}
          }
        >
          <h1 className="mv__content__title">
            {mainVisual.title ? mainVisual.title : ""}
          </h1>
          <div className="mv__content__describe">
            <p>{mainVisual.describe ? mainVisual.describe : ""}</p>
          </div>
          <div className="mv__content__button">
            <a href="#" className="mv__content__button-left">
              {mainVisual.button_left_text ? mainVisual.button_left_text : ""}
            </a>
            <a
              href="#"
              className="mv__content__button-right"
              style={
                mainVisual.button_right_text
                  ? {
                      backgroundColor: "green",
                    }
                  : {}
              }
            >
              {mainVisual.button_right_text ? mainVisual.button_right_text : ""}
            </a>
          </div>
        </div>
      </section>
      <section className="feature">
        <div className="container">
          <div className="feature__row">
            {feature.map(
              (item, index) =>
                item.show && (
                  <FeatureItem
                    key={index}
                    srcImg={item.image?.url}
                    altImg={item.image?.alt}
                    title={item.title ? item.title : ""}
                    describe={item.describe ? item.describe : ""}
                    buttonText={item.buttonText ? item.buttonText : ""}
                  />
                )
            )}
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <h1 className="blog__title">BLOG & NEWS</h1>
          <div className="blog__row">
            {blog.map((item, index) => (
              <BlogItem
                key={index}
                slug={"/blog/" + item.slug}
                srcImg={item.thumbnail?.url}
                altImg={item.thumbnail?.alt}
                title={item.title ? item.title : ""}
                content={item.excerpt ? item.excerpt : ""}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
