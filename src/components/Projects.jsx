import { useState, useEffect } from "react";
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/projects`);
      const data = await response.json();
      setProjects(data);
    };
    fetchData();
  }, []);
  return (
    <section className="projects-section">
      <h1 className="projects-heading">
        My <strong className="strong">Works</strong>
      </h1>
      <div className="projects-content">
        {projects.map((item, index) => {
          return (
            <div className="projects-card-body" key={index}>
              <div className="project-card">
                <img src={item.image} className="project-image" />
                <div className="project-card-body">
                  <div className="card-title">
                    <h5>{item.title}</h5>
                  </div>

                  <div className="card-description">
                    <h6 className="card-subheading">Built With</h6>
                    {item.description} <br />
                    <h6 className="card-subheading">Features</h6>
                    {item.features}
                    <br />
                    {item.features2}
                  </div>

                  <div className="card-buttons">
                    <a href={item.github} className="card-button">
                      <FaGithub className="card-button-logo" /> GitHub
                    </a>
                    <a href={item.demo} className="card-button">
                      <TfiWorld className="card-button-logo" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
