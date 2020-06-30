import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
const Search = (props) => {
  const githubContext = useContext(GithubContext);

  const { showClear } = props;

  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    githubContext.searchUsers(text);
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} />
        <button>Search</button>
      </form>
      {showClear && <button onClick={githubContext.clearUsers}>Clear</button>}
    </div>
  );
};

export default Search;
