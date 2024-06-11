import { SkillsData } from "../data/SkillsData.jsx";
import { ToolsData } from "../data/ToolsData.jsx";
import aboutImage2 from "../assets/about-image2.svg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-body">
        <div className="about-left">
          <h1 className="about-heading">
            Know Who <strong className="strong">I'M</strong>
          </h1>
          <div className="about-card">
            <p className="about-card-body">
              Hi Everyone, I am{" "}
              <strong className="strong-description">Farid Rashidov</strong>{" "}
              from{" "}
              <strong className="strong-description">Baku, Azerbaijan.</strong>
              <br />
              <br /> My self-study adventure commenced with an insatiable desire
              to understand the intricacies of web development. I immersed
              myself in the{" "}
              <strong className="strong-description">
                MERN Stack, MongoDB, Express.js, React.js, and Node.js
              </strong>{" "}
              through online resources, documentation, and real-world projects.{" "}
              <br />
              <br /> In the realm of front-end development, I've delved deep
              into{" "}
              <strong className="strong-description">
                HTML, CSS, and JavaScript,
              </strong>{" "}
              using these languages to craft visually appealing and responsive
              user interfaces. I'm well-versed in modern front-end libraries and
              frameworks, ensuring a seamless blend of aesthetics and
              functionality in every project.
            </p>
          </div>
        </div>
        <div className="about-right">
          <img src={aboutImage2} className="about-image" />
        </div>
      </div>
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-body">
        <div className="skills-content">
          {SkillsData.map((item, index) => {
            return (
              <div key={index} className="skills">
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="tools-heading">Tools</h1>
      <div className="tools-body">
        <div className="tools-content">
          {ToolsData.map((item, index) => {
            return (
              <div key={index} className="tools">
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
