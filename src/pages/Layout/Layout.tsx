import "./Layout.scss";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { TbBrandBlogger } from "react-icons/tb";
import { Tabs, Tab, TabsList, TabPanel } from "@mui/base";

const Layout = () => {
  return (
    <div className="Root" id="#root">
      <div className="Section" id="#Introduction">
        <div className="Introduction">
          <div className="IntroductionPreIntro">Hello, my name is</div>
          <div className="IntroductionName">Stephen Jackiw.</div>
          <div className="IntroductionOneLiner">Full-Stack Developer.</div>
          <div className="IntroductionSummary">
            Whether I am creating self-documenting code, a properly normalized
            relational database or a minimalist user experience, I ensure that
            Full-Stack development is beautiful.
          </div>
          <div className="IntroductionHireMe">Interested in hiring me?</div>
          <div className="IntroductionResumeDownload">
            <a
              className="ResumeLink"
              href={require("../../resume.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              I have a resume!
            </a>
          </div>
        </div>
      </div>
      <div className="Section" id="#AboutMe">
        <div className="AboutMe">
          <div className="AboutMeHeader">A Bit About Me</div>
          <div className="AboutMeInfoContainer">
            <div className="AboutMeParagraph">
              Hello! My name is Stephen.
              <span className="AboutMeAltColor"> I like to make things. </span>
              Not very descriptive, I know. Right now, that means I am making
              sites, apps, games and tools that exist on the web and on servers.
              I got my start programming Java in high school have been
              developing things ever since.
            </div>
            <div className="AboutMeParagraph">
              My most recent position was at Ford Motor Company where{" "}
              <span className="AboutMeAltColor">
                {" "}
                I developed information security tools{" "}
              </span>
              for our company's intranet. Outside of corporations, I am working
              on a few side projects including a Tabletop RPG tool, a portfolio
              website (*hint* you are looking at it), and a super secret project
              that I will announce as soon as I can.
            </div>
          </div>

          <div className="AboutMeToolsHeader">
            I have exprience creating with:
          </div>
          <ul className="AboutMeTools">
            <li>ReactJS (this site)</li>
            <li>AngularJS</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>Python</li>
            <li>AWS S3</li>
            <li>MS SQL</li>
            <li>Godot (and GDScript)</li>
            <li>Unreal Engine 4 (and C++)</li>
            <li>Jenkins</li>
          </ul>
        </div>
      </div>
      <div className="Section" id="#Experience">
        <div className="MyExperience">
          <div className="MyExperienceHeader">My Experience</div>
          <div className="MyExperienceContainer">
            <Tabs defaultValue={0} orientation="vertical">
              <TabsList>
                <Tab>Ford 2021</Tab>
                <Tab>Ford 2020</Tab>
                <Tab>Ford 2019</Tab>
                <Tab>Purdue University</Tab>
                <Tab>Alta Via Consulting</Tab>
                <Tab>Non-technical Positions</Tab>
              </TabsList>
              <TabPanel>
                <div className="" id="Ford-CyberEngineer">
                  <div className="">
                    <div>Cybersecurity Engineer - Ford Motor Company</div>
                    <div>May 2021-August 2022</div>
                  </div>
                  <div className="">
                    <div className="">
                      <div className="">
                        <ul>
                          <li>
                            Developed software solutions in Java, Angular and
                            SQL for automated vulnerability scanning of binary
                            files in an agile and extreme programming
                            environment
                          </li>
                          <li>
                            Created human-friendly web application in Angular
                            for better end user experience
                          </li>
                          <li>
                            Worked with Jenkins Pipelines to create automated
                            static code analysis and binary scan analysis steps
                            in the build cycle
                          </li>
                          <li>
                            Led the creation of a Blue/Green deploy step in
                            Jenkins Build for continuous product availability
                          </li>
                          <li>
                            Managed task backlog with Jira and Github Projects
                          </li>
                          <li>
                            Used technical writing skills to establish
                            documentation for on-boarding development hires
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <div className="">
                          <h4>Tools And Technology</h4>
                          <li>Frontend: Angular</li>
                          <li>Backend: Java (Spring Framework)</li>
                          <li>Database: Microsoft SQL Server (SQL)</li>
                          <li>Hosted on: Local, Google Cloud Platform</li>
                        </div>
                        <div className="">
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
              </TabPanel>
              <TabPanel>
                <div className="" id="Ford-CyberOpsIntern">
                  <div className="">
                    <div>
                      Cybersecurity Operations Intern - Ford Motor Company
                    </div>
                    <div>May 2020-August 2020</div>
                  </div>
                  <div className="">
                    <div className="">
                      <div className="">
                        <ul>
                          <li>
                            Supported company-wide email filtering and spam
                            system using Symantec’s suite of tools
                          </li>
                          <li>
                            Installed Symantec’s endpoint security systems on
                            over 100 virtual machines as part of Ford's Data
                            Center of the Future project
                          </li>
                          <li>
                            Created a formal bug report and feature request
                            process for an industrial control system monitoring
                            tool
                          </li>
                          <li>
                            Collaborated with a team in a design thinking
                            methodology workshop to create a prototype to
                            improve internal Ford-Intern communication for a
                            fully digital workplace
                          </li>
                          <li>
                            Handled corporate support tickets for a specialized
                            help desk
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <div className="">
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
              </TabPanel>
              <TabPanel>
                <div className="" id="Ford-SecurityTestingIntern">
                  <div className="">
                    <div>Cybersecurity Testing Intern - Ford Motor Company</div>
                    <div>May 2019-August 2019</div>
                  </div>
                  <div className="">
                    <div className="">
                      <div className="">
                        <ul>
                          <li>
                            Completed and maintained 100+ security test cases in
                            a staging environment for one of Ford's luxury
                            vehicle product lines
                          </li>
                          <li>
                            Replicated previously failed security tests to
                            insure no regression has occured
                          </li>
                          <li>
                            Captured bluetooth traffic using a packet sniffers
                            and decoded the binary data
                          </li>
                          <li>
                            Researched simulating supplier security compliance
                            using Matlab’s Simulink
                          </li>
                          <li>
                            Mediated arguments to ensure a quality environment
                            for inter-team communication
                          </li>
                          <li>
                            Developed documentation for future test engineers
                            and easier on-boarding
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <div className="">
                          <div>Tools And Technology</div>
                          <li>Kali Linux</li>
                          <li>Ubuntu</li>
                          <li>Wireshark</li>
                          <li>Bluetooth Low Energy</li>
                        </div>
                        <div className="">
                          <div>Other Technologies and Techniques Used:</div>
                          <li>Conflict Mediation and Management</li>
                          <li>Document Writing</li>
                          <li>Microsoft Excel (Macros)</li>
                          <li>Penetration Test Replication</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="" id="Purdue-SecurityOperations">
                  <div className="">
                    <div>Security Operations Officer - Purdue University</div>
                    <div>May 2018-August 2018</div>
                  </div>
                  <div className="">
                    <div className="">
                      <div className="">
                        <ul>
                          <li>
                            Supported the spam and phishing email filtering
                            system with over 40,000 accounts
                          </li>
                          <li>
                            Handled support tickets for malware and account
                            security requests
                          </li>
                          <li>
                            Responded to customer questions regarding phishing
                            and security in relation to their accounts
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <div className="">
                          <h4>Tools And Technology</h4>
                          <li>Kali Linux</li>
                          <li>Ubuntu</li>
                          <li>Wireshark</li>
                          <li>Bluetooth Low Energy</li>
                        </div>
                        <div className="">
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
              </TabPanel>
              <TabPanel>
              <div>Software Developmer @ Alta Via Consulting</div>
                <div>May 2017 - August 2017</div>
                <div>Levereaged JavaScript, HTML and CSS to create a dynamically generated network of employee data</div>
                <div>Gathered customer requirenments</div>
              </TabPanel>
              <TabPanel>
                <div>Teacher @ Change</div>
                <div>December 2020 - June 2021</div>
                <div>Taught English as a foreign language to Spanish-speaking students</div>
                <div>Resident Assisstant @ Purdue University</div>
                <div>August 2018 - March 2020</div>
                <div>Managed the relationships and well-being of over 30+ residents in one of the oldest and largest all-male dormitory in the country</div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="Section" id="Projects">
        <div className="Projects">
          <div className="ProjectsHeader">Previous Projects</div>
          <div className="ProjectsParagraph">
            This section is under construction :/{" "}
          </div>
          <div className="ProjectsParagraph">
            Come back soon to see a few relevant projects that I am working on.
            In the meantime you can checkout my github or my blog.
          </div>
          <a
            className="ProjectsLink"
            href="https://github.com/cannibalisticwalrus"
          >
            My Github
          </a>
          <a className="ProjectsLink" href="https://stephenjackiw.blogspot.com">
            My Blog
          </a>
        </div>
      </div>
      <div className="Section" id="ContactMe">
        <div className="ContactMe">
          <div className="ContactMeHeader">Want to get a hold of me?</div>
          <div className="ContactMeParagraph">
            This site is still under construction but...
          </div>
          <div className="ContactMeParagraph">
            If you have a question, want to get a hold of me, or checkout what I
            am doing feel free to use the links below.
          </div>
          <div className="ContactMeLinksContainer">
            <a
              className="ContactMeLink"
              href="https://github.com/cannibalisticwalrus"
            >
              <FiLinkedin />
            </a>
            <a
              className="ContactMeLink"
              href="mailto:website@stephenjackiw.33mail.com"
            >
              <FiMail />
            </a>
            <a
              className="ContactMeLink"
              href="https://github.com/cannibalisticwalrus"
            >
              <FiGithub />
            </a>
            <a
              className="ContactMeLink"
              href="https://stephenjackiw.blogspot.com"
            >
              <TbBrandBlogger />
            </a>
          </div>
          <div className="ContactMeHireMe">Interested in hiring me?</div>
          <div className="ContactMeResumeDownload">
            <a
              className="ResumeLink"
              href={require("../../resume.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              I have a resume!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
