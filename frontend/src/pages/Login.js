import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

import { useAuth } from "../context/AuthContext";


export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();



  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const response = await loginUser({
        email,
        password,
      });

      const data = response.data;


      login(data.user, data.token);


      if (data.user.role === "admin") {

        navigate("/admin-dashboard");

      } else {

        navigate("/employee-dashboard");

      }

    } catch (error) {

      console.log(error);

      alert("Invalid credentials");

    }
  }



  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}