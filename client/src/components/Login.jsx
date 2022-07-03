import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../context/DataProvider";

import axios from "axios";
const Login = () => {
  const [view, setView] = useState(false);
  const [error, setError] = useState(false);
  const { setAccount, setAccountDetail } = useContext(DataContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setError(false);
      const response = await axios.post(`http://localhost:8000/login`, data);
      if (response.status === 200) {
        setAccount(response.data.data.username);
        setAccountDetail(response.data.data);
        localStorage.setItem("token", JSON.stringify(response)),
          alert("Login successful");

        navigate("/");
      }
    } catch (error) {
      setError(true);
      console.log(`Error while calling Signup API in api: ${error}`, error);
    }
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "22px", fontWeight: 600 }}>Welcome to Login</p>

      <div className="container py-2 card border-0 shadow  p-4 w-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            {error && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Please enter valid data
              </p>
            )}
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: 12 }}>Email required</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            {view == false ? (
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            ) : (
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            )}

            {view == false ? (
              <i
                className="fa fa-eye"
                onMouseEnter={() => setView(!view)}
                aria-hidden="true"
                style={{ right: 30, bottom: 90 }}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash"
                onMouseLeave={() => setView(!view)}
                style={{ right: 30, bottom: 90 }}
              ></i>
            )}
            {errors.password && (
              <p style={{ color: "red", fontSize: 12 }}>Password required</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
