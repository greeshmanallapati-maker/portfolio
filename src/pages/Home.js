import "./Home.css";
import profile from "../assets/profile.jpg";
function Home() {
  return (
    <div className="container">

      {/* HERO CARD */}
      <div className="hero-card">
        <div className="hero-left">
          <div className="status-pill">
            <span className="status-dot"></span>
            Open to internships
          </div>
          <h1 className="hero-name">
            Greeshma <span className="accent">Nallapati</span>
          </h1>
          <p className="hero-role">
            Artificial Intelligence Student &nbsp;·&nbsp; Aspiring Data Analyst
          </p>
          <p className="hero-loc">
            Mahindra University &nbsp;·&nbsp; Hyderabad, India
          </p>
          <div className="btn-row">
            <a
              href="https://www.linkedin.com/in/greeshma-nallapati-577a21297/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill"
            >
              LinkedIn →
            </a>
            <a href="/resume.pdf" download className="resume-btn" > Download Resume </a>
          </div>
        </div>

        {/* PROFILE PHOTO */}
        <img src={profile} alt="Greeshma Nallapati" className="avatar-img" />
      </div>

      {/* STATS */}
      <div className="stats-row">
        <div className="stat">
          <div className="stat-num">3rd</div>
          <div className="stat-label">Year B.Tech AI</div>
        </div>
        <div className="stat">
          <div className="stat-num">2+</div>
          <div className="stat-label">Projects built</div>
        </div>
        <div className="stat">
          <div className="stat-num">3</div>
          <div className="stat-label">Core languages</div>
        </div>
      </div>

      {/* ABOUT ME */}
      <p className="sec-label">About me</p>
      <div className="card about-card">
        <p>
          I am a 3rd-year B.Tech student in Artificial Intelligence at Mahindra
          University, Hyderabad. I am passionate about data science and machine
          learning, with a strong interest in solving real-world problems using
          data-driven approaches. I have hands-on experience in Python, C, and
          Java, along with web development skills in HTML, CSS, and React. I am
          continuously enhancing my technical and analytical skills to build
          efficient and impactful solutions.
        </p>
      </div>

      {/* TECHNICAL SKILLS */}
      <p className="sec-label">Technical skills</p>
      <div className="card skills-card">
        {[
          { name: "Python", pct: 88 },
          { name: "Machine Learning", pct: 75 },
          { name: "NLP", pct: 70 },
          { name: "React & CSS", pct: 65 },
          { name: "Java", pct: 60 },
          { name: "C", pct: 55 },
        ].map((skill) => (
          <div className="skill-row" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.pct}%` }}
              ></div>
            </div>
            <span className="skill-pct">{skill.pct}%</span>
          </div>
        ))}
      </div>

      {/* EDUCATION TIMELINE */}
      <p className="sec-label">Education</p>
      <div className="card timeline-card">
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-circle active-circle"></div>
            <div className="tl-line"></div>
          </div>
          <div className="tl-right">
            <div className="tl-title">B.Tech in Artificial Intelligence</div>
            <div className="tl-sub">Mahindra University, Hyderabad</div>
            <div className="tl-date">2022 – Present · 3rd Year</div>
          </div>
        </div>
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-circle"></div>
          </div>
          <div className="tl-right">
            <div className="tl-title">Higher Secondary (12th)</div>
            <div className="tl-sub">Mathematics, Physics, Computer Science</div>
            <div className="tl-date">Completed 2022</div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid-2">
        <div className="info-card">
          <h3 className="info-heading">Research interests</h3>
          <ul>
            <li><span className="dot"></span>Artificial Intelligence</li>
            <li><span className="dot"></span>Machine Learning</li>
            <li><span className="dot"></span>Natural Language Processing</li>
            <li><span className="dot"></span>Software Development</li>
          </ul>
        </div>
        <div className="info-card">
          <h3 className="info-heading">Contact</h3>
          <div className="info-row">
            <span className="info-key">Email</span>
            <span className="info-val">greeshmanallapati1@gmail.com</span>
          </div>
          <div className="info-row">
            <span className="info-key">Phone</span>
            <span className="info-val">+91 7013854073</span>
          </div>
          <div className="info-row">
            <span className="info-key">Location</span>
            <span className="info-val">Hyderabad, India</span>
          </div>
          <div className="info-row">
            <span className="info-key">Degree</span>
            <span className="info-val">B.Tech AI, 3rd Year</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="home-footer">
        greeshmanallapati1@gmail.com &nbsp;·&nbsp; Hyderabad, India &nbsp;·&nbsp; © 2026 Greeshma Nallapati
      </div>

    </div>
  );
}

export default Home;
