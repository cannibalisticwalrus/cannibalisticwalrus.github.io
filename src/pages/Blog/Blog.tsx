import "./Blog.scss";

const Blog = () => {
  return (
    <div className="HomeRoot" id="#root">
      <h1 className="BlogHeader">Blog</h1>
      <p className="BlogContent">At the moment I am testing out Blogspot for my blog provider.  Interested? Click below.</p>
      <a className="BlogLink" style={{color: "aqua"}} href="https://stephenjackiw.blogspot.com/">Click Me!</a>
    </div>
  );
};

export default Blog;
