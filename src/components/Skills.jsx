import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Skills = ({ title, api }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${apiUrl}/api/${api}`);
      const data = await response.json();
      setSkills(data);
    }
    fetchData();
  }, [apiUrl, api]);

  return (
    <div>
      <h1 className="skills-heading">{title}</h1>
      <div className="skills-body">
        <div className="skills-content">
          {skills.map((item, index) => {
            return (
              <div className="skills-card" key={index}>
                <div className="skills">
                  <Icon
                    icon={item.icon}
                    className="skills-icon"
                    width="70"
                    height="70"
                  />
                </div>
                <span className="skills-name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

Skills.propTypes = {
  title: PropTypes.string,
  api: PropTypes.string,
};
