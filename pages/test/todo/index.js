import Layout from "@/components/templates/layout";
import { useEffect, useState } from "react";

export default function TodoApp() {
  // setJob ( data hiển thị trên thẻ input )
  // setJobs ( data trong mảng hiễn thị trên thẻ li )

  const [job, setJob] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    setJobs(storageJobs || [])
  }, []);

  const handleAddJobs = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify([...prev, job]);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };
  return (
    <Layout>
      <div className="container" style={{ padding: 32 }}>
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleAddJobs}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
