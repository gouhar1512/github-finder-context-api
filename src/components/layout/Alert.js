import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Alert = () => {
  const githubContext = useContext(GithubContext);
  const { alert } = githubContext;

  return (
    alert != null && (
      <div>
        <b>Please enter something</b>
      </div>
    )
  );
};

export default Alert;
