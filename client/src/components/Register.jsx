import React, { useRef, useState } from "react";
import { authenticateSignup } from "../service/api.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const url = "http://localhost:8000";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`http://localhost:8000/signup`, data);
      console.log(response);
      if (response.status === 201) {
        alert(response.data.message);
        console.log(response.data.message);
        navigate("/login");
      } else {
        console.log(response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error while calling Signup API in api: ", error);
    }

    // console.log(data);
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <p style={{ fontSize: "22px", fontWeight: 600 }}>Welcome to SignUp</p>
      <div className="container mt-2 card border-0 shadow w-50 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 ">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              // type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your name"
              {...register("username", { required: true, maxLength: 20 })}
            />
            {errors.username && (
              <p style={{ color: "red", fontSize: 12 }}>Name required</p>
            )}
          </div>

          <div className="mb-3">
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
            <label htmlFor="mobile" className="form-label">
              Mobile No
            </label>
            <input
              type="number"
              className="form-control"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile no"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && (
              <p style={{ color: "red", fontSize: 12 }}>Mobile required</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  message: "Please enter password in mix format",
                },
              })}
            />

            <p style={{ color: "red", fontSize: 12 }}>
              {errors?.password && errors.password.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Enter password again"
              {...register(
                "confirmPassword",

                {
                  required: "Password required",
                  validate: (value) =>
                    value === getValues("password") ||
                    "password is not matching",
                  minLength: {
                    value: 8,
                    message: "Password must be match",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                    message: "Please enter password in mix format",
                  },
                }
              )}
            />

            <p style={{ color: "red", fontSize: 12 }}>
              {errors.confirmPassword && errors.confirmPassword.message}
            </p>
          </div>

          <div className="mb-2 d-flex justify-content-between">
            <label className="text-right">Gender</label>
            <div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio1"
                  value="male"
                  {...register("gender", { required: true })}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value="female"
                  {...register("gender", { required: true })}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio3"
                  value="other"
                  {...register("gender", { required: true })}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  Other
                </label>
              </div>
            </div>
          </div>
          {errors.gender && (
            <p style={{ color: "red", fontSize: 12 }}>Gender required</p>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button onClick={() => reset()} className="btn btn-secondary">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
