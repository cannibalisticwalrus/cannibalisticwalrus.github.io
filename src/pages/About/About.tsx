import "./About.scss";
import SpanishSelfie from "../../SpanishSelfie.jpg";

const About = () => {
  return (
    <div className="AboutRoot" id="#root">
      <div className="AboutHeader">About Me</div>
      <div className="AboutContainer">
              <img
        className="ImageContainer"
        src={SpanishSelfie}
        alt="Me in A Coruna Spain"
      />
      <div className="AboutDescriptionBlock">
        Hello! My name is Stephen Jackiw and this is my personal resume and
        portfolio site for my web-development and cybersecurity research. I
        recently recieved my Security+ and have created this site as a way to
        learn a completely new Web Development Stack. I have professional
        experience with Angular, Java (Spring), Microsoft SQL Server and GCP as
        my previous stack. This site is built on React, Python (Flask), NoSQL?
        and AWS?, addmittedly I am still designing the backend for this site so
        I will confirm the stack when I start adding the functionality.
      </div>
      <div className="AboutDescriptionBlock">
        A bit more personal, my hobbies include Rock Climbing, Painting, Acting
        and Directing plays and movies, traveling, hacking in HackTheBox and
        TryHackMe, and programming video games. These will be featured in the
        blog section when that feature is added. (The blog is one of the last
        features to be scheduled so it might be a bit.)
      </div>
      </div>

    </div>
  );
};

export default About;
