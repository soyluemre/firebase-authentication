import React, { useContext, useState } from "react";
import { login } from "../auth/firebase";
import "../css/login.css";
import { LoginContext } from "../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setGiris } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      setGiris(true);
      navigate("/firebase-authentication");
      toast.success(`Welcome ${user?.displayName}`);
    } else {
      toast.error("Please enter the information correctly.");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <i className="login-icon fas fa-solid fa-user fa-4x"></i>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Pasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />

        <button className="button" disabled={!email && !password} type="submit">
          Login
        </button>
        <br />
        <br />
        <Link className="register-link" to="/register">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Login;
