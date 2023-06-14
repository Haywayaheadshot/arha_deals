import React, { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Cookie from "universal-cookie";

const SignInPage = () => {
  const cookies = new Cookie();
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    authentication: "",
  });

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation for email
    if (!userInputs.email.match(emailRegex)) {
      setErrorMessage({
        ...errorMessage,
        email: "Please input your email",
      });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, email: "" });
      }, 3000);
      return;
    }

    // Validation for password
    if (userInputs.password === "") {
      setErrorMessage({
        ...errorMessage,
        password: "Please enter your password",
      });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, password: "" });
      }, 3000);
      return;
    }

    // Send data to backend
    const data = {
      user: {
        password: userInputs.password,
        email: userInputs.email,
      },
    };

    const url = "http://127.0.0.1:5000/api/login";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          // Store the token in a secure cookie
          cookies.set("token", data.token, {
            secure: true,
            sameSite: "strict",
          });

          setSuccessMessage("Welcome!");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setErrorMessage({
            ...errorMessage,
            authentication: data.error,
          });
          setTimeout(() => {
            setErrorMessage({
              ...errorMessage,
              authentication: "",
            });
          }, 3000);
        }
      });
  };

  return (
    <div className="h-[100vh] flex flex-col justify-start items-center px-4 gap-2 bg-sign-up-bg bg-no-repeat pt-3 bg-center">
      <NavLink to="/" className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-secondary flex flex-wrap py-3">
          Tailored
          <FaCrown />
          Budget
        </h1>
      </NavLink>
      <form
        onSubmit={handleSignInSubmit}
        className="flex flex-col border-yellow-300 rounded-md border-[1px] p-4 justify-start gap-3 bg-inherit min-w-rousel desktop:min-w-[40vw] text-secondary"
      >
        <span>Sign in</span>
        <label htmlFor="email" className="text-secondary uppercase">
          Email:
          <br />
          {errorMessage.email && (
            <div className="toast toast-end">
              <p className="alert alert-error">{errorMessage.email}</p>
            </div>
          )}
          <input
            type="email"
            id="email"
            placeholder="Type in your email"
            value={userInputs.email}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                email: e.target.value,
              })
            }
            className="w-full border-2 bg-primary border-tertiary pl-2 py-1 text-sm rounded-md text-secondary"
          />
        </label>
        <label htmlFor="password" className="text-secondary uppercase">
          Password:
          <br />
          {errorMessage.password && (
            <div className="toast toast-end">
              <p className="alert alert-error">{errorMessage.password}</p>
            </div>
          )}
          <input
            type="password"
            id="password"
            value={userInputs.password}
            placeholder="Type in your password"
            className="w-full border-2 bg-primary border-tertiary pl-2 py-1 text-sm rounded-md text-secondary"
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                password: e.target.value,
              })
            }
          />
        </label>
        <section>
          {errorMessage.authentication && (
            <div className="toast toast-top desktop:toast-center desktop:w-[17vw] desktop:text-center">
              <p className="alert alert-error">{errorMessage.authentication}</p>
            </div>
          )}
          {successMessage && (
            <div className="toast toast-top desktop:toast-center desktop:w-fit desktop:text-center">
              <p className="alert alert-success">{successMessage}</p>
            </div>
          )}
          <input
            aria-label="Submit Form"
            className="bg-yellow-300 text-primary w-full uppercase font-bold cursor-pointer btn"
            id="submit"
            role="button"
            type="submit"
            data-testid="submit-button"
          />
        </section>
      </form>
      <section>
        <span className="text-secondary">
          Not a member?
          <NavLink to="/signup" className="bg-yellow-300 text-primary ml-2 btn">
            Sign up
          </NavLink>
        </span>
      </section>
    </div>
  );
};

export default SignInPage;
