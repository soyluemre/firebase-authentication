import React, { useContext, useState } from "react";
import { register } from "../auth/firebase";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { LoginContext } from "../context/LoginContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();
  const { setGiris } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = fullname;
    const user = await register(email, password, displayName);
    if (user) {
      setGiris(true);
      navigate("/firebase-authentication");
      localStorage.setItem("username", user?.displayName);
      toast.success(`Welcome ${user?.displayName}`);
    } else {
      toast.error("Please Enter Your Information Correctly.");
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <i className="register-icon fas fa-solid fa-unlock-keyhole fa-4x"></i>
        <br />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        ></input>
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
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />

        <button
          className="button"
          disabled={!email && !password && fullname}
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
