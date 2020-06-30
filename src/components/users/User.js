import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import Spinner from "../layout/Spinner";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser } = githubContext;
  const login = match.params.login;

  useEffect(() => {
    getUser(login);
    //eslint-disable-next-line
  }, []);

  const { name, html_url } = user;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1>Hello {login}</h1>
      <b>Name: </b>
      {name}
      <br />
      <a href={html_url}>Github</a>
    </div>
  );
};

export default User;
