import "./App.scss";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { TbBrandBlogger } from "react-icons/tb";
import { Tabs, Tab, TabsList, TabPanel } from "@mui/base";
//import ResumeButton from "./Components/ResumeButton/ResumeButton";
import Header from "./Components/Header/Header";
import GodotImage from "./Files/Image_GodotFramework.png";
import TTRPGImage from "./Files/Image_TTRPGSite.png";
import PokerChips from "./Files/PokerChipTeaser.png";

const App = () => {
  return (
    <div className="Root">
      <Header></Header>
      <div className="PageContainer">
        <div className="Section" id="Introduction">
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
                href={require("./Files/resume.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                I have a resume!
              </a>
            </div>
          </div>
        </div>
        <div className="Section" id="AboutMe">
          <div className="AboutMe">
            <div className="AboutMeHeader">A Bit About Me</div>
            <div className="AboutMeInfoContainer">
              <div className="AboutMeParagraph">
                Hello! My name is Stephen.
                <span className="AboutMeAltColor">
                  {" "}
                  I like to make things.{" "}
                </span>
                Not very descriptive, I know. I have made sites, apps, games and
                tools that (mostly) exist on the web. I am even working on a
                mobile app! I have worked in a variety of tech stacks from
                Java+Angular to Python+ReactJS and I am constantly excited to
                learn new ones.
              </div>
              <div className="AboutMeParagraph">
                My most recent position was at Ford Motor Company where{" "}
                <span className="AboutMeAltColor">
                  {" "}
                  I developed information security tools{" "}
                </span>
                for our company's intranet. I am working on a few side projects
                including a Tabletop RPG tool, a portfolio website (*hint* you
                are looking at it), and a super secret project that I will
                announce as soon as I can.
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
        <div className="Section" id="Experience">
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
                      <div>
                        Cybersecurity Engineer{" "}
                        <span className="MyExperienceAltColor">
                          @ Ford Motor Company
                        </span>{" "}
                      </div>
                      <div>May 2021-August 2022</div>
                    </div>
                    <div className="">
                      <div className="">
                        <div className="">
                          <ul>
                            <li>
                              Developed software solutions in{" "}
                              <span className="MyExperienceAltColor">
                                Java, Angular and SQL
                              </span>{" "}
                              for automated vulnerability scanning of binary
                              files in an{" "}
                              <span className="MyExperienceAltColor">
                                agile and extreme programming
                              </span>{" "}
                              environment
                            </li>
                            <li>
                              Worked with{" "}
                              <span className="MyExperienceAltColor">
                                Jenkins
                              </span>{" "}
                              Pipelines to create automated static code analysis
                              and binary scan analysis steps in the build cycle
                            </li>
                            <li>
                              Led the creation of a Blue/Green deploy step in
                              Jenkins Build for continuous product availability
                            </li>
                            <li>
                              Managed task backlog with{" "}
                              <span className="MyExperienceAltColor">Jira</span>{" "}
                              and{" "}
                              <span className="MyExperienceAltColor">
                                Github
                              </span>{" "}
                              Projects
                            </li>
                            <li>
                              Used technical writing skills to establish
                              documentation for on-boarding development hires
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="" id="Ford-CyberOpsIntern">
                    <div className="">
                      <div>
                        Cybersecurity Operations Intern @ Ford Motor Company
                      </div>
                      <div>May 2020-August 2020</div>
                    </div>
                    <div className="">
                      <div className="">
                        <div className="">
                          <ul>
                            <li>
                              Supported company-wide{" "}
                              <span className="MyExperienceAltColor">
                                email and spam filtering
                              </span>{" "}
                              system using Symantec’s suite of tools
                            </li>
                            <li>
                              Installed Symantec’s{" "}
                              <span className="MyExperienceAltColor">
                                endpoint security
                              </span>{" "}
                              systems on over 100 virtual machines as part of
                              Ford's Data Center of the Future project
                            </li>
                            <li>
                              Created a formal bug report and feature request
                              process for an industrial control system
                              monitoring tool
                            </li>
                            <li>
                              Collaborated with a team in a{" "}
                              <span className="MyExperienceAltColor">
                                design thinking
                              </span>{" "}
                              methodology workshop to create a prototype to
                              improve internal Ford-Intern communication for a
                              fully digital workplace
                            </li>
                            <li>
                              Handled corporate support tickets for a
                              specialized help desk
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="" id="Ford-SecurityTestingIntern">
                    <div className="">
                      <div>
                        Cybersecurity Testing Intern{" "}
                        <span className="MyExperienceAltColor">
                          @ Ford Motor Company
                        </span>
                      </div>
                      <div>May 2019-August 2019</div>
                    </div>
                    <div className="">
                      <div className="">
                        <div className="">
                          <ul>
                            <li>
                              Completed and maintained 100+{" "}
                              <span className="MyExperienceAltColor">
                                security test
                              </span>{" "}
                              cases in a staging environment for one of Ford's
                              luxury vehicle product lines
                            </li>
                            <li>
                              Replicated previously failed security tests to
                              insure no regression has occured
                            </li>
                            <li>
                              Captured bluetooth traffic using a{" "}
                              <span className="MyExperienceAltColor">
                                packet sniffers
                              </span>{" "}
                              and decoded the binary data
                            </li>
                            <li>
                              Researched simulating{" "}
                              <span className="MyExperienceAltColor">
                                supplier security compliance
                              </span>{" "}
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
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="" id="Purdue-SecurityOperations">
                    <div className="">
                      <div>
                        Security Operations Officer{" "}
                        <span className="MyExperienceAltColor">
                          @ Purdue University
                        </span>
                      </div>
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
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    Software Developmer{" "}
                    <span className="MyExperienceAltColor">
                      @ Alta Via Consulting
                    </span>
                  </div>
                  <div>May 2017 - August 2017</div>
                  <ul>
                    <li>
                      Levereaged JavaScript, HTML and CSS to create a
                      dynamically generated network of employee data
                    </li>
                    <li>Gathered customer requirenments</li>
                    <li>
                      Utilized open-source libraries and legacy code to create a
                      modern system
                    </li>
                  </ul>
                </TabPanel>
                <TabPanel>
                  <div>
                    Teacher{" "}
                    <span className="MyExperienceAltColor">@ Change</span>
                  </div>
                  <div>December 2020 - June 2021</div>
                  <ul>
                    <li>
                      Taught English as a foreign language to Spanish-speaking
                      students
                    </li>
                    <li>
                      Developed lesson plans for students of all skill-levels
                    </li>
                  </ul>

                  <div>
                    Resident Assisstant{" "}
                    <span className="MyExperienceAltColor">
                      @ Purdue University
                    </span>
                  </div>
                  <div>August 2018 - March 2020</div>
                  <ul>
                    <li>
                      Managed the relationships and well-being of over 30+
                      residents in one of the oldest and largest all-male
                      dormitory in the country
                    </li>
                    <li>
                      Scheduled regular activities and porgrams for resident's
                      personal development and entertainment
                    </li>
                  </ul>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="Section" id="Projects">
          <div className="Projects">
            <div className="ProjectsHeader">Previous Projects</div>

            <div className="ProjectsParagraph">Here are a few of the most visible projects that I am/have worked on.  Links are provided once a project is accessable</div>
            <div className="ProjectContainer">
              <div className="ProjectItem">
                <img
                  className="ProjectItemImage"
                  src={GodotImage}
                  alt="Failed to Render"
                ></img>
                <div className="ProjectItemTextContainer">
                  <div className="ProjectItemTextHeader">
                    Gameboard Resources for Godot Creators
                  </div>
                  <div className="ProjectItemTextPara">
                    In developing a personal project (the thing on the right), I
                    realized that a lot of the functions and resources I was
                    making was foundational to the creation of ANY type of
                    gameboard simulating game. As a result, I open-sourced it
                    and have given it back to the community. It occasionally
                    sees new features as I develop features for my project that
                    fit the theme of the framework/library/resources.
                  </div>
                  <div className="ProjectTag">GDScript (Python)</div>
                  <div className="ProjectTag">Game Dev</div>
                  <div className="ProjectTag">Multi-Platform</div>
                </div>
              </div>
              <div className="ProjectItem">
                <img
                  className="ProjectItemImage-scale"
                  src={TTRPGImage}
                  alt="Failed to Render"
                ></img>
                <div className="ProjectItemTextContainer">
                  <div className="ProjectItemTextHeader">
                    A Landing Page for a Tabletop RPG Combat Manager
                  </div>
                  <div className="ProjectItemTextPara">
                    This project is a responsive landing page for a Tablettop
                    RPG Combat Manager that I am working on as a side project.
                    It uses a fun, brutalist-ish, design and is inspired by
                    80s-90s rollerrinks.
                  </div>
                  <div className="ProjectTag">ReactJS</div>
                  <div className="ProjectTag">TailwindCSS</div>
                </div>
              </div>
              <div className="ProjectItem">
                <img
                  className="ProjectItemImage-scale"
                  src={PokerChips}
                  alt="Failed to Render"
                ></img>
                <div className="ProjectItemTextContainer">
                  <div className="ProjectItemTextHeader center">
                    Coming soon...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Section" id="ContactMe">
          <div className="ContactMe">
            <div className="ContactMeHeader">Want to get a hold of me?</div>
            <div className="ContactMeParagraph">
              This site is still under construction but...
            </div>
            <div className="ContactMeParagraph">
              If you have a question, want to get a hold of me, or checkout what
              I am doing feel free to use the links below.
            </div>
            <div className="ContactMeLinksContainer">
              <a
                className="ContactMeLink"
                href="https://linkedin.com/in/jackiw-stephen"
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
                href={require("./Files/resume.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                I have a resume!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
