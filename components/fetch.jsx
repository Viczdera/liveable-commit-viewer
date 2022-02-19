import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetch(props) {
  const [commit, setCommits] = useState([]);
  const [input, setInput] =useState('')
  useEffect(async () => {
    try {
      const res = await axios.get(" https://api.github.com/repos/octocat/hello-world" );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    useEffect(async () => {
      try {
        const res = await axios.get(` https://api.github.com/repos/${input}` );
        console.log(res);
        setCommits(res);
      } catch (err) {
        console.log(err);
      }
    }, []);

    
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

    </div>
  );
}

export default Fetch;
