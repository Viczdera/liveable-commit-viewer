import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ErrorSvg from "../Asssets/404-error.svg"

function Fetch() {
  const [commit, setCommits] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultScreen, setResultScreen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      const res = await axios.get(
        " https://api.github.com/repos/Viczdera/profile/commits"
      );
      console.log(res.data);
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

      console.log(res.data);
      setCommits(res.data)
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
          <div className="commitlist">
            {commit.map((c)=>(
              <div className="commits">
                <img src={c.committer.avatar_url} alt="avatar" width="30px" height="30px" style={{borderRadius:"50%"}}/>
              <a href={c.html_url}>

                <h5>{c.commit.message}</h5>
               
              </a>
              <span>
                {c.commit.committer.date}
              </span>

              </div>
            ))}

          </div>

          {loading ? <h3>Loading</h3> : ""}
          <button className="closeBtn" onClick={() => setResultScreen(false)} >Close</button>
        </div>
      ) : (
        ""
      )}
      {error ? (
        <div className="error">
          <Image src={ErrorSvg} width="500px"  alt="error"/>
          <button className="closeBtn" onClick={() => setError(false)} >X</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Fetch;
