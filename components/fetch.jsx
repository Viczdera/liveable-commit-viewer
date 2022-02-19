import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetch(props) {
  const [commit, setCommits] = useState("");

  const handleSearch = () => {
     useEffect(async () => {
        try {
          const res = await axios.get(" https://api.github.com/repos/" + input);
          console.log(res);
          setCommits(res);
        } catch (err) {
          console.log(err);
        }
      }, []);
  };

  return (
    <div className="form_cont">
      <form className="form">
        <input
          placeholder="Eg. facebook/react"
          onChange={(e) => {
            setCommits(e.target.value);
          }}
          value={commit}
        />
        <button onClick={handleSearch}>See commits</button>
      </form>
    </div>
  );
}

export default Fetch;
