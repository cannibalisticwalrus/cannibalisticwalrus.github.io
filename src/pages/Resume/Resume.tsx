import "./Resume.scss";

const Resume = () => {
  return (
    <div className="ReusmeRoot">
      <h1>Resume</h1>
      <div id="Job-CyberEngineer">
        <div className="JobInformation">
          <div>Ford Motor Company</div>
          <div>Cybersecurity Engineer</div>
          <div>May 2021-August 2022</div>
        </div>

        <div className="TasksContainer">
          Tasks
          <li>
            Developed software solutions in Java, Angular and SQL for automated
            vulnerability scanning of binary files in an agile and extreme
            programming environment
          </li>
          <li>
            Created human-friendly web application in Angular for better end
            user experience
          </li>
          <li>
            Worked with Jenkins Pipelines to create automated static code
            analysis and binary scan analysis steps in the build cycle
          </li>
          <li>Managed task backlog with Jira and Github Projects</li>
          <li>
            Used technical writing skills to establish documentation for
            on-boarding development hires
          </li>
        </div>
        <div className="TasksContainer">
          Tools And Technology
          <li>Frontend: Angular</li>
          <li>Backend: Java (Spring Framework)</li>
          <li>Hosted on: Local, Google Cloud Platform</li>
          <li>Other Technologies Used: </li>
        </div>
      </div>
    </div>
  );
};

export default Resume;
