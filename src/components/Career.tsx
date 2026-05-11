import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Educational
          <br /> Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-top">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>B.Sc. in CSE</h4>
                  <h5>Metropolitan University</h5>
                </div>
              </div>
              <div className="career-info-right">
                <h3 className="career-period">2023 - Present</h3>
              </div>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-top">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>HSC in Science</h4>
                  <h5>Moulvibazar Govt College</h5>
                </div>
              </div>
              <div className="career-info-right">
                <h3 className="career-period">2019 - 2021</h3>
                <p className="career-gpa">CGPA: 4.42 / 5.00</p>
              </div>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-top">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>SSC in Science</h4>
                  <h5>Shaheen Sudarshan High School</h5>
                </div>
              </div>
              <div className="career-info-right">
                <h3 className="career-period">2017 - 2019</h3>
                <p className="career-gpa">GPA: 4.72 / 5.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="career-leadership">
          <h3 className="career-leadership-heading">Leadership &amp; clubs</h3>
          <p className="career-leadership-intro">
            Roles I held in student organizations alongside my studies.
          </p>
          <ul className="career-leadership-list">
            <li className="career-leadership-item">
              <div className="career-leadership-main">
                <h4>Former Office Secretary</h4>
                <h5>MU CSE Society, Metropolitan University</h5>
                <p>
                  Served on the 2025 executive committee: documentation,
                  correspondence, and coordination between members and the panel.
                </p>
              </div>
              <span className="career-leadership-years">2025 committee</span>
            </li>
            <li className="career-leadership-item">
              <div className="career-leadership-main">
                <h4>Former Office Secretary</h4>
                <h5>MU Sports Club, Metropolitan University</h5>
                <p>
                  Records, official communication, and administrative support
                  for club operations and events.
                </p>
              </div>
              <span className="career-leadership-years">2024 committee</span>
            </li>
            <li className="career-leadership-item">
              <div className="career-leadership-main">
                <h4>Joint Secretary</h4>
                <h5>MU Cultural Club, Metropolitan University</h5>
                <p>
                  Supporting the executive team with planning, documentation,
                  and day-to-day club activities.
                </p>
              </div>
              <span className="career-leadership-years">Present</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
