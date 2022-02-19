import Fetch from "../components/fetch";

export default function Home() {
  return (
    <div className="viewer_cont">
      <div className="nav">
        <h2>CommitViewer</h2>
        <span className="navlinks">
          <h3>About</h3>
          <h3>Contact</h3>
        </span>
      </div>

      <div className="body">
        <h1>
          Discover the <br /> world of code
        </h1>
        <p>
          Explore open source projects from GitHub, and read their commit
          history to see the story of how they were built.
        </p>
      </div>

      <Fetch />
      <h5>Or pick one of these suggested repos</h5>
    
    </div>
  );
}
