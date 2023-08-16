import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
import toast from "react-hot-toast";
import axios from "axios";
import "../../Styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const location = useLocation();

  //Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,email,phone,address,password);
    // toast.success("Register successfully..");
    try {
      const res = await axios.post(`/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        // toast.success("user register successfully");
        toast.success("res.data && res.data.message");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong....");
    }
  };

  return (
    <Layout title={"Login - FOODERA"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="mb-3">
            <button
              type="button"
              className="btn btn-success"
              onCanPlay={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
