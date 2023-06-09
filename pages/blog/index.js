import Layout from "@/components/templates/layout";
import axios from "@/utils/axios";
import BlogItem from "@/components/organisms/blogItem";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pagination from "@/components/organisms/pagination";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Blog(data) {
  const router = useRouter();
  const [blog, setBlog] = useState(data.blogs.posts_data || []);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  useEffect(() => {
    setPagination({
      _page: data.blogs.current_page,
      _limit: data.blogs.post_per_page,
      _totalRows: data.blogs.number_of_page,
    });
    setBlog(data.blogs.posts_data);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [router.query]);

  function handlePageChange(newPage) {
    setIsLoading(true);
    router.push(`?page=${newPage}`);
  }

  return (
    <Layout>
      <div id="blog">
        <div className="container">
          <h2 className="blog__title">BLOGS</h2>
          {!isLoading ? (
            <>
              <div className="blog__row">
                {blog.map((item, index) => (
                  <BlogItem
                    key={index}
                    slug={"/blog/" + item.slug}
                    srcImg={item.thumbnail?.url}
                    altImg={item.thumbnail?.alt}
                    title={item.title}
                    content={item.excerpt}
                  />
                ))}
              </div>
              <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <Skeleton count={10} height={50} />
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page || 1;

  if (isNaN(page) || parseInt(page) < 0) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  // Fetch data from external API
  const res = await axios.get("blog", {
    params: {
      page: page,
    },
  });

  // if (...) return 404

  // Pass data to the page via props
  return { props: { blogs: res.data } };
}
