import Layout from "@/components/templates/layout";
import { useState } from "react";

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
    alert(`Your submition: ${checked.sort()}`)
  };
  return (
    <Layout>
      <div className="container">
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}123
          </div>
        ))}
        <button onClick={handleSummit}>Submit</button>
      </div>
    </Layout>
  );
}
