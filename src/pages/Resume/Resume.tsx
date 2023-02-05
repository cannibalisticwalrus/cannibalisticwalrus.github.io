import "./Resume.scss";
import FordLogo from "../../Ford_logo_flat.svg.png";

const Resume = () => {
  return (
    <div className="ReusmeRoot">
      <h1>Resume</h1>
      <div className="AllJobsContainer">
        <div className="JobContainer" id="Job-CyberEngineer">
          <div className="JobHeaders">
            <div>Ford Motor Company</div>
            <div>Cybersecurity Engineer</div>
            <div>May 2021-August 2022</div>
          </div>
          <div className="JobBody">
            <img
              className="Logo"
              src={FordLogo}
              alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
            />
            <div className="JobInformation">
              <div className="TasksContainer">
                <h3>Tasks</h3>
                <li>
                  Developed software solutions in Java, Angular and SQL for
                  automated vulnerability scanning of binary files in an agile
                  and extreme programming environment
                </li>
                <li>
                  Created human-friendly web application in Angular for better
                  end user experience
                </li>
                <li>
                  Worked with Jenkins Pipelines to create automated static code
                  analysis and binary scan analysis steps in the build cycle
                </li>
                <li>
                  Led the creation of a Blue/Green deploy step in Jenkins Build
                  for continuous product availability
                </li>
                <li>Managed task backlog with Jira and Github Projects</li>
                <li>
                  Used technical writing skills to establish documentation for
                  on-boarding development hires
                </li>
              </div>
              <div className="AdditionalInformation">
                <div className="TasksContainer">
                  <h4>Tools And Technology</h4>
                  <li>Frontend: Angular</li>
                  <li>Backend: Java (Spring Framework)</li>
                  <li>Database: Microsoft SQL Server (SQL)</li>
                  <li>Hosted on: Local, Google Cloud Platform</li>
                </div>
                <div className="TasksContainer">
                  <h4>Other Technologies Used:</h4>
                  <li>Jenkins</li>
                  <li>Jira</li>
                  <li>Git/Github</li>
                  <li>Groovy (to program Jenkins Pipelines)</li>
                  <li>AWS S3</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
