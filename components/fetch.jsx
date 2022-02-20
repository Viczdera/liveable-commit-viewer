import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetch() {
  const [commit, setCommits] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultScreen, setResultScreen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      const res = await axios.get(
        " https://api.github.com/repos/octocat/hello-world"
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResultScreen(true);

    try {
      const res = await axios.get(` https://api.github.com/repos/${input}/commits`);
      setLoading(false);

      console.log(res);
    } catch (err) {
      console.log(err);
      setError(true);
      setResultScreen(false)
    }
  };

  return (
    <div>
      <div className="form_cont">
        <form className="form">
          <input
            placeholder="Eg. facebook/react"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button onClick={handleSearch}>See commits</button>
        </form>
      </div>
      {resultScreen ? (
        <div className="resultss">
          <span>CommitViewer</span>
          <h2>{input}</h2>
          {loading ? <h3>Loading</h3> : ""}
          <button className="closeBtn" onClick={() => setResultScreen(false)} >Close</button>
        </div>
      ) : (
        ""
      )}
      {error ? (
        <div className="error">
          <h1>NOT FOUND</h1>
          <button className="closeBtn" onClick={() => setError(false)} >X</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Fetch;
