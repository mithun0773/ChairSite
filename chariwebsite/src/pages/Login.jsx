import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import api from "../api";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const { loginUser } = useContext(AuthContext);

  axios.post("http://localhost:5000/api/auth/login", form).then((res) => {
    loginUser(res.data.user);
    navigate("/");
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      setMsg("Login successful");

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn-fill">Login</button>
      </form>
      {msg && <p>{msg}</p>}
      <p>
        Don’t have an account?
        <a href="/signup" className="auth-link">
          {" "}
          Create one
        </a>
      </p>
    </div>
  );
}
