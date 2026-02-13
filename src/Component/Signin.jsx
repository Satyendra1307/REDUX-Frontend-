import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://reduxb.onrender.com/api/login",
        data
      );
      alert(res.data.message);

      // ✅ login ke baad home page
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={submit}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
