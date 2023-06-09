import Layout from "@/components/templates/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Test() {
  const courses = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 3,
      name: "ReactJS",
    },
  ];
  const [checked, setChecked] = useState([]);
  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleSummit = () => {
    alert(`Your submition: ${checked.sort()}`);
  };

  const [title, setTitle] = useState("");

  const [posts, setPosts] = useState([]);
  const tabs = ["users", "albums", "posts"];
  const [type, setType] = useState("users");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((type) => {
        setPosts(type);
      });

    // fetch("http://bt3.test/wp-json/my/v2/homepage")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    axios
      .get("http://bt3.test/wp-json/my/v2/homepage")
      .then(function (response) {
        // setDatas(response.data);
        // console.log(Datas);
        console.log('axios: ', response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [type]);
  useEffect(() => {
    document.title = title;
  });
  return (
    <Layout>
      <div className="container">
        <Link href="/test/todo">To do App</Link>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSummit}>Submit</button>
        <div style={{ padding: 30 }}>
          <label style={{ paddingRight: 30 }}>Change title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <div style={{ paddingTop: 30 }}>
            Call API from{" "}
            {tabs.map((tab) => {
              if (type === tab) {
                return (
                  <a
                    href={`https://jsonplaceholder.typicode.com/${type}`}
                    target="_blank"
                    key={tab}
                  >
                    https://jsonplaceholder.typicode.com/{type}
                  </a>
                );
              }
            })}
          </div>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setType(tab)}
              style={
                type === tab
                  ? {
                      color: "white",
                      backgroundColor: "green",
                    }
                  : {}
              }
            >
              {tab}
            </button>
          ))}
          <ul style={{ paddingTop: 30 }}>
            {posts.map((type) => (
              <li key={type.id}>{type.name || type.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
