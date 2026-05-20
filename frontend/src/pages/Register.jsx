import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../services/authService";


export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };


  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      await registerUser(form);

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

      setError(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  }


  return (

    <div className="register-container">

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />

        <br /><br />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >

          <option value="employee">
            Employee
          </option>

          <option value="admin">
            Admin
          </option>

        </select>

        <br /><br />

        <button
          type="submit"
          disabled={loading}
        >
          {
            loading
              ? "Registering..."
              : "Register"
          }
        </button>

      </form>


      {
        error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )
      }


      <p>
        Already have an account?
        <Link to="/login">
          Login
        </Link>
      </p>

    </div>
  );
}