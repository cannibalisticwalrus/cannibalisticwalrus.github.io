import "./Layout.scss";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { TbBrandBlogger } from "react-icons/tb";

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
            relational database or a minimalist user experience,
            I ensure that Full-Stack development is beautiful.
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
          <div className="MyExperienceParagraph">
            I have had the opportunity to work for a small business, a leading
            Cybersecurity School and a Fortune 50 company providing information
            security and developing for the web. More information is coming
            soon! For now, download my resume.
          </div>
          <div className="MyExperienceDownload">
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
            If you have a question, want to get a hold of me, or checkout what I am doing feel free to use the links below.
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
