import "./Portfolio.scss";
import PortfolioGridItem from "../../components/PortfolioGridItem/PortfolioGridItem";

const Portfolio = () => {
  return (
    <div className="PortfolioRoot">
      <h1>Portfolio</h1>
      <div className="PortfolioBody">
        <div>Coming Soon! But you can see the test below!</div>
        <div className="PortfolioDisplay">
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/350" description="This is a short description about the project"></PortfolioGridItem>
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/351" description="This is a short description about the project"></PortfolioGridItem>
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/352" description="This is a short description about the project"></PortfolioGridItem>
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/353" description="This is a short description about the project"></PortfolioGridItem>
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/354" description="This is a short description about the project"></PortfolioGridItem>
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/355" description="This is a short description about the project"></PortfolioGridItem>
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/356" description="This is a short description about the project"></PortfolioGridItem>
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/357" description="This is a short description about the project"></PortfolioGridItem>
          <PortfolioGridItem title="A Title for the Grid Item" imgPath="https://picsum.photos/358" description="This is a short description about the project"></PortfolioGridItem>
</div>
      </div>
    </div>
  );
};

export default Portfolio;
