import React from "react";
import useForm from "../hooks/useForm";
import { connect } from "react-redux";
import { login } from "../actions";
import { useHistory } from "react-router-dom";

const initialLogin = {
  username: "",
  password: "",
};

export function Login(props) {
  const { login } = props;
  const [loginData, handleChange] = useForm(initialLogin);
  const { push } = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    //   axios post
    login(loginData)
    push("/plantlist")
    // set token to localstorage
    //push to plantlist
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={loginData.username}
          ></input>
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={loginData.password}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default connect(null, { login })(Login);
