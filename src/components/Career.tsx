import "./styles/Career.css";

const careers = [
  {
    company: "Tata Motors",
    year: "2022 - 2025",
    details:
      "Worked as a team leader, helping coordinate daily work, guide team members, and keep tasks moving on schedule. Built strong communication, responsibility, and leadership skills while working in a fast-paced company environment.",
  },
  {
    company: "Jay Ambe Electricals",
    year: "July 2021 - Nov 2021",
    details:
      "Worked as a salesperson, assisting customers with product information, sales support, and day-to-day shop responsibilities. Gained experience in customer handling, product explanation, and practical business communication.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careers.map((career) => (
            <div className="career-info-box" key={`${career.company}-${career.year}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h5>{career.company}</h5>
                </div>
                <h3>{career.year}</h3>
              </div>
              <p>{career.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
