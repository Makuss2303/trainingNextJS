import Layout from "@/components/templates/layout";
import HeadSection from "@/components/head";
import FeatureItem from "@/components/organisms/featureItem";
import BlogItem from "@/components/organisms/blogItem";
import "@/pages/index.module.scss";

export default function Home() {
  return (
    <Layout>
      <HeadSection title="Homepage" />
      <section className="mv">
        <div className="mv__content">
          <h1 className="mv__content__title">SIMPLE DESIGN</h1>
          <div className="mv__content__describe">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              erat facilisis <br /> hendrerit mi et, tincidunt orci.
            </p>
          </div>
          <div className="mv__content__button">
            <a href="#" className="mv__content__button-left">
              LEARN MORE
            </a>
            <a href="#" className="mv__content__button-right">
              DOWNLOAD
            </a>
          </div>
        </div>
      </section>
      <section className="feature">
        <div className="container">
          <div className="feature__row">
            <FeatureItem
              srcImg="/images/homepage/feature-icon-1.png"
              title="Point 1"
              content="Vestibulum nec ante sed purus tincidunt tincidunt ut quis odio."
            />
            <FeatureItem
              srcImg="/images/homepage/feature-icon-2.png"
              title="Point 2"
              content="Vestibulum nec ante sed purus tincidunt tincidunt ut quis odio."
            />
            <FeatureItem
              srcImg="/images/homepage/feature-icon-3.png"
              title="Point 3"
              content="Vestibulum nec ante sed purus tincidunt tincidunt ut quis odio."
            />
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <h1 className="blog__title">BLOG & NEWS</h1>
          <div className="blog__row">
            <BlogItem
              srcImg="/images/homepage/blog-1.png"
              title="News title 1"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor."
            />
            <BlogItem
              srcImg="/images/homepage/blog-2.png"
              title="News title 2"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
