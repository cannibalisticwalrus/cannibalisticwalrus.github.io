import "./Layout.scss";
// import Resume from "../../resume.pdf"; 

const Layout = () => {
  return (
    <div className="Root" id="#root">
      <div className="Section">
        <div className="Introduction">
          <div className="IntroductionPreIntro">Hello, my name is</div>
          <div className="IntroductionName">Stephen Jackiw.</div>
          <div className="IntroductionOneLiner">Full-Stack Developer.</div>
          <div className="IntroductionSummary">
            Whether creating self-documenting code, a properly normalized
            relational database or creating a lovely minimalist user experience,
            I ensure that Full-Stack development is beautiful.
          </div>
          <div className="IntroductionHireMe">Interested in hiring me?</div>
          <div className="IntroductionResumeDownload">
            <a className="ResumeLink" href={require('../../resume.pdf')} target="_blank">
              I have a resume!
            </a>
          </div>
        </div>
      </div>
      <div className="Section">
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
      <div className="Section">
        <div className="ContactMe">
          <div className="ContactMeHeader">Interested in more?</div>
          <div className="ContactMeSocials">
            This site is still under construction but you can see what I am
            working on.
            <a className="ContactMeSocialsLink" href="https://github.com/cannibalisticwalrus">My Github</a>
            <a className="ContactMeSocialsLink" href="https://stephenjackiw.blogspot.com">My Blog</a>
          </div>
          <div className="ContactMeMessages">
            Have questions? Want to connect? Use one of these links:
            <a className="ContactMeMessagesLink" href="https://github.com/cannibalisticwalrus">My LinkedIn</a>
            <a className="ContactMeMessagesLink" href="mailto:website@stephenjackiw.33mail.com">My Email</a>
          </div>
          <div className="ContactMeHireMe">Interested in hiring me?</div>
          <div className="ContactMeResumeDownload">
            <a className="ResumeLink" href={require('../../resume.pdf')} target="_blank">
              I have a resume!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
