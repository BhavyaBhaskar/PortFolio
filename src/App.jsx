/* eslint-disable react/no-unescaped-entities */
import "./style.css";
import toggleMenu from "./script.js";

function App() {
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Bhavya Bhaskar</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Bhavya Bhaskar</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src="IMG.jpg" alt="Bhavya Bhaskar profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Bhavya Bhaskar</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick="window.open('./resume-example.pdf')"
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/bhavya-bhaskar-62245119a",
                  "_blank"
                )
              }
            />
            <img
              src="github.png"
              alt="My Github profile"
              className="icon"
              onClick={() =>
                window.open("https://github.com/BhavyaBhaskar", "_blank")
              }
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          {/* <div className="section__pic-container">
            <img
              src="./about-pic.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div> */}
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  1+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src="education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  High School Diploma
                  <br />
                  B.Tech. Bachelors Degree
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                As a dedicated student pursuing a Bachelor's in Computer
                Applications, I am deeply immersed in the dynamic realm of
                frontend web development. Proficient in HTML, CSS, JavaScript,
                React, and Tailwind, my passion lies in crafting visually
                appealing and functional user interfaces. Through hands-on
                projects, including FactForge—a fact-oriented website—and a
                pizza delivery system website, I've honed my skills in
                responsive design and frontend frameworks. I prioritize
                accessibility and seamless integration with backend
                technologies, ensuring a holistic user experience. Kept abreast
                of industry trends, I leverage emerging technologies to stay at
                the forefront. Join me on this journey as I shape digital
                landscapes, driven by a commitment to excellence,
                problem-solving, and a forward-thinking approach to the future
                of frontend development.
              </p>
            </div>
          </div>
        </div>
        <img
          src="arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#experience")}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Tailwind</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React + Vite</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>{/*  */}</article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node.JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Api fetching</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Supabase</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git / Github</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#projects")}
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="FastReactPizzaCo.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Fast React Pizza CO.
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://fast-react-pizzzza-co.netlify.app/", "_blank")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="FactForge.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Fact Forge</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://factforge.netlify.app/",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#contact")}
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:Bhavyabhaskar04@gmail.com">
                Bhavyabhaskar04@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a
                href="https://www.linkedin.com/in/bhavya-bhaskar-62245119a"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Bhavya Bhaskar. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
