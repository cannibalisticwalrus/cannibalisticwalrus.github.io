import "./ResumeButton.scss";

const ResumeButton = () => {
  return (
    <a
      className="ResumeButton"
      href={require("../../Files/resume.pdf")}
      target="_blank"
      rel="noreferrer"
    >
      Resume
    </a>
  );
};
export default ResumeButton;
