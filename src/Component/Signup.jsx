import { useState } from "react";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:9000/api/signup", data);
    alert(res.data.message);
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-form" onSubmit={submit}>
        <h2 style={{ textAlign: "center" }}>Signup</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
