import aboutImage2 from "../assets/about-image2.svg";
import Skills from "../components/Skills";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-body">
        <div className="about-left">
          <h1 className="about-heading">
            Know Who <strong className="strong">I&apos;m</strong>
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
              <br /> In the realm of front-end development, I&apos;ve delved
              deep into{" "}
              <strong className="strong-description">
                HTML, CSS, and JavaScript,
              </strong>{" "}
              using these languages to craft visually appealing and responsive
              user interfaces. I&apos;m well-versed in modern front-end
              libraries and frameworks, ensuring a seamless blend of aesthetics
              and functionality in every project.
            </p>
          </div>
        </div>
        <div className="about-right">
          <img src={aboutImage2} className="about-image" />
        </div>
      </div>
      <Skills title="Languages" api="languages" />
      <Skills title="Frameworks" api="frameworks" />
      <Skills title="CSS" api="csses" />
      <Skills title="Databases / ORM" api="orms" />
      <Skills title="CI/CD VCS" api="vcs" />
      <Skills title="Design" api="designs" />
      <Skills title="Hosting / SaaS" api="hostings" />
      <Skills title="Tools" api="tools" />
    </section>
  );
}
