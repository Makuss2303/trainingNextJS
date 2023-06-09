import Layout from "@/components/templates/layout";
import axios from "@/utils/axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();

  const [singlePost, setSinglePost] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    let slug = router.query ? router.query.slug : "";
    axios
      .get(`post/${slug}`)
      .then((response) => {
        if (response !== undefined) {
          setSinglePost(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [router.isReady]);
  return (
    <Layout>
      <div id="single-post">
        <div className="container single__post">
          <p>Post: {router.query.slug}</p>
          <h1 className="single__post__title">{singlePost.title}</h1>
          <div
            className="single__post__content"
            dangerouslySetInnerHTML={{ __html: singlePost.content }}
          />
        </div>
      </div>
    </Layout>
  );
}
