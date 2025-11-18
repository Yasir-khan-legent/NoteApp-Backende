import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//  import './Auth.css'

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  async function handlesignup(e) {
    e.preventDefault();

    const signupdata = { name, email, password };

    const res = await fetch("http://localhost:5000/api/auth/Signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupdata),
      credentials: "include",
    });
    navigate("/login");
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="body">
      <div className="auth-wrapper">
        <div className="left">
          <h1>Welcome!</h1>
          <p>Create your account to get started</p>
        </div>

        <div className="right">
          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button onClick={handlesignup}>Create Account</button>

          <p className="switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
