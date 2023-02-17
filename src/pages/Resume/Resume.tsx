import "./Resume.scss";
import FordLogo from "../../Ford_logo_flat.svg.png";

const Resume = () => {
  return (
    <div className="ReusmeRoot" id="#root">
      <h1>Resume</h1>
      <div className="AllJobsContainer">
        <div className="JobContainer" id="Ford-CyberEngineer">
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
        <div className="JobContainer" id="Ford-CyberOpsIntern">
          <div className="JobHeaders">
            <div>Ford Motor Company</div>
            <div>Cybersecurity Operations Intern</div>
            <div>May 2020-August 2020</div>
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
                  Supported company-wide email filtering and spam system using
                  Symantec’s suite of tools
                </li>
                <li>
                  Installed Symantec’s endpoint security systems on over 100
                  virtual machines as part of Ford's Data Center of the Future
                  project
                </li>
                <li>
                  Created a formal bug report and feature request process for an
                  industrial control system monitoring tool
                </li>
                <li>
                  Collaborated with a team in a design thinking methodology
                  workshop to create a prototype to improve internal Ford-Intern
                  communication for a fully digital workplace
                </li>
                <li>
                  Handled corporate support tickets for a specialized help desk
                </li>
              </div>
              <div className="AdditionalInformation">
                <div className="TasksContainer">
                  <h4>Tools And Technology</h4>
                  <li>Symantec Endpoint Security Suite</li>
                  <li>Email Filtering/Spam Detection Rules</li>
                  <li>VMWare, VCenter</li>
                  <li>Local (Private) Cloud</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="JobContainer" id="Ford-SecurityTestingIntern">
          <div className="JobHeaders">
            <div>Ford Motor Company</div>
            <div>Cybersecurity Testing Intern</div>
            <div>May 2019-August 2019</div>
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
                  Completed and maintained 100+ security test cases in a staging
                  environment for one of Ford's luxury vehicle product lines
                </li>
                <li>
                  Replicated previously failed security tests to insure no
                  regression has occured
                </li>
                <li>
                  Captured bluetooth traffic using a packet sniffers and decoded
                  the binary data
                </li>
                <li>
                  Researched simulating supplier security compliance using
                  Matlab’s Simulink
                </li>
                <li>
                  Mediated arguments to ensure a quality environment for
                  inter-team communication
                </li>
                <li>
                  Developed documentation for future test engineers and easier
                  on-boarding
                </li>
              </div>
              <div className="AdditionalInformation">
                <div className="TasksContainer">
                  <h4>Tools And Technology</h4>
                  <li>Kali Linux</li>
                  <li>Ubuntu</li>
                  <li>Wireshark</li>
                  <li>Bluetooth Low Energy</li>
                </div>
                <div className="TasksContainer">
                  <h4>Other Technologies and Techniques Used:</h4>
                  <li>Conflict Mediation and Management</li>
                  <li>Document Writing</li>
                  <li>Microsoft Excel (Macros)</li>
                  <li>Penetration Test Replication</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="JobContainer" id="Purdue-SecurityOperations">
          <div className="JobHeaders">
            <div>Purdue University</div>
            <div>Security Operations Officer</div>
            <div>May 2018-August 2018</div>
          </div>
          <div className="JobBody">
            <div className="JobInformation">
              <div className="TasksContainer">
                <h3>Tasks</h3>
                <li>
                  Supported the spam and phishing email filtering system with
                  over 40,000 accounts
                </li>
                <li>
                  Handled support tickets for malware and account security
                  requests
                </li>
                <li>
                  Responded to customer questions regarding phishing and
                  security in relation to their accounts
                </li>
              </div>
              <div className="AdditionalInformation">
                <div className="TasksContainer">
                  <h4>Tools And Technology</h4>
                  <li>Kali Linux</li>
                  <li>Ubuntu</li>
                  <li>Wireshark</li>
                  <li>Bluetooth Low Energy</li>
                </div>
                <div className="TasksContainer">
                  <h4>Other Technologies and Techniques Used:</h4>
                  <li>Conflict Mediation and Management</li>
                  <li>Document Writing</li>
                  <li>Microsoft Excel (Macros)</li>
                  <li>Penetration Test Replication</li>
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
