import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { RxEyeClosed } from "react-icons/rx";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    userName: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    signUp: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    signUp: "",
  });
  const dateOfBirth = useRef<HTMLInputElement | null>(null);
  const [userInputs, setUserInputs] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    userName: "",
    dateOfBirth: new Date().toISOString().substr(0, 10),
    photo: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputs({ ...userInputs, password: e.target.value });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInputs({ ...userInputs, confirmPassword: e.target.value });
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userInputs.name.length < 5) {
      setErrorMessage({
        ...errorMessage,
        name: "Please enter at least 5 characters",
      });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, name: "" });
      }, 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userInputs.email.match(emailRegex)) {
      setErrorMessage({
        ...errorMessage,
        email: "Please enter a valid email address",
      });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, email: "" });
      }, 3000);
      return;
    }

    if (userInputs.userName.length < 3 || userInputs.userName.length > 8) {
      setErrorMessage({
        ...errorMessage,
        userName: "Please enter between 3 to 8 characters",
      });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, userName: "" });
      }, 3000);
      return;
    }

    const dobInput = dateOfBirth.current;

    if (!dobInput) {
      return;
    }

    const dobValue = dobInput.value;
    const currentDate = new Date();
    const selectedDate = new Date(dobValue);
    const ageDifference =
      currentDate.getFullYear() - selectedDate.getFullYear();

    if (ageDifference < 15) {
      setErrorMessage({
        ...errorMessage,
        dateOfBirth: "You must be at least 15 years old to register.",
      });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, dateOfBirth: "" });
      }, 3000);
      return;
    }

    if (
      !userInputs.password.match(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/
      )
    ) {
      setErrorMessage({
        ...errorMessage,
        password:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long",
      });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, password: "" });
      }, 5000);
      return;
    }

    if (userInputs.password !== userInputs.confirmPassword) {
      setErrorMessage({
        ...errorMessage,
        confirmPassword: "Password and confirm password do not match.",
      });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, confirmPassword: "" });
      }, 3000);
      return;
    }

    const data = {
      user: {
        password: userInputs.password,
        date_of_birth: userInputs.dateOfBirth,
        name: userInputs.name,
        email: userInputs.email,
        photo: userInputs.photo,
        user_name: userInputs.userName,
      },
    };

    const url = "http://127.0.0.1:5000/api/signup";
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
        if (data.status === 201) {
          setSuccessMessage({ ...successMessage, signUp: data.message });
          setTimeout(() => {
            setSuccessMessage({
              ...successMessage,
              signUp: "",
            });
          }, 3000);
          setUserInputs({
            password: "",
            confirmPassword: "",
            name: "",
            email: "",
            userName: "",
            dateOfBirth: "",
            photo: "",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            signUp: data.errors,
          });
          setTimeout(() => {
            setErrorMessage({
              ...errorMessage,
              signUp: "",
            });
          }, 3000);
        }
      });
  };

  return (
    <div className="h-[100vh] flex flex-col justify-start items-center px-4 gap-2 bg-sign-up-bg bg-no-repeat bg-center">
      <NavLink to="/">
        <h1 className="text-xl text-secondary flex flex-wrap py-3">
          Tailored
          <FaCrown />
          Budget
        </h1>
      </NavLink>
      <form
        onSubmit={handleSignUpSubmit}
        className="flex flex-col border-yellow-300 rounded-md border-[1px] p-4 justify-start gap-3 bg-inherit min-w-[30vw] text-secondary"
      >
        <span className="text-2xl">Sign up</span>
        <label htmlFor="name" className="text-lg uppercase">
          Name:
          <br />
          {errorMessage.name && (
            <div className="chat chat-end">
              <p className="chat-bubble chat-bubble-secondary">
                {errorMessage.name}
              </p>
            </div>
          )}
          <input
            type="text"
            id="name"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md bg-primary"
            value={userInputs.name}
            placeholder="Please enter your full name here"
            onChange={(e) => {
              setUserInputs({ ...userInputs, name: e.target.value });
            }}
          />
        </label>
        <label htmlFor="email" className="text-lg uppercase">
          Email:
          <br />
          {errorMessage.email && (
            <div className="chat chat-end">
              <p className="chat-bubble chat-bubble-secondary">
                {errorMessage.email}
              </p>
            </div>
          )}
          <input
            type="email"
            id="email"
            placeholder="Please enter your email here"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md bg-primary"
            value={userInputs.email}
            onChange={(e) => {
              setUserInputs({ ...userInputs, email: e.target.value });
            }}
          />
        </label>
        <label htmlFor="user-name" className="text-lg uppercase">
          User Name:
          <br />
          {errorMessage.userName && (
            <div className="chat chat-end">
              <p className="chat-bubble chat-bubble-secondary">
                {errorMessage.userName}
              </p>
            </div>
          )}
          <input
            type="text"
            id="user-name"
            placeholder="Please enter atleast 3 characters"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md bg-primary"
            value={userInputs.userName}
            onChange={(e) => {
              setUserInputs({ ...userInputs, userName: e.target.value });
            }}
          />
        </label>
        <label htmlFor="display-picture" className="text-lg uppercase">
          Profile Picture:
          <br />
          <input
            type="file"
            id="display-picture"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md bg-primary"
            value={userInputs.photo}
            onChange={(e) => {
              setUserInputs({ ...userInputs, photo: e.target.value });
            }}
          />
        </label>
        <label htmlFor="dob" className="text-lg uppercase">
          Date Of Birth:
          <br />
          {errorMessage.dateOfBirth && (
            <div className="chat chat-end">
              <p className="chat-bubble chat-bubble-secondary">
                {errorMessage.dateOfBirth}
              </p>
            </div>
          )}
          <input
            ref={dateOfBirth}
            type="date"
            id="dob"
            data-testId="date-of-birth"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md text-primary"
            value={userInputs.dateOfBirth}
            onChange={(e) => {
              setUserInputs({ ...userInputs, dateOfBirth: e.target.value });
            }}
          />
        </label>
        <label htmlFor="password" className="flex flex-col uppercase text-lg">
          Password:
          {errorMessage.password && (
            <div className="chat chat-end">
              <p className="chat-bubble chat-bubble-secondary">
                {errorMessage.password}
              </p>
            </div>
          )}
          <span className="flex flex-row gap-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              data-testId="password"
              className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md bg-primary"
              value={userInputs.password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
              className="bg-yellow-300 text-primary rounded-md p-2"
            >
              <RxEyeClosed />
            </button>
          </span>
        </label>
        <label htmlFor="confirm-password" className="uppercase text-lg">
          Confirm Password:
          <br />
          {errorMessage.confirmPassword && (
            <div className="chat chat-end">
              <p className="chat-bubble chat-bubble-secondary">
                {errorMessage.confirmPassword}
              </p>
            </div>
          )}
          <input
            type={showPassword ? "text" : "password"}
            id="confirm-password"
            data-testId="confirm-password"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md bg-primary"
            value={userInputs.confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <label htmlFor="submit">
          {errorMessage.signUp && (
            <div className="chat chat-end">
              <p className="chat-bubble chat-bubble-secondary">
                {errorMessage.signUp}
              </p>
            </div>
          )}
          {successMessage.signUp && (
            <div className="chat chat-end">
              <p className="chat-bubble chat-bubble-success">
                {successMessage.signUp}
              </p>
            </div>
          )}
          <input
            aria-label="Submit Form"
            className="bg-yellow-300 text-primary rounded-md w-full uppercase py-1 font-bold cursor-pointer"
            id="submit"
            role="button"
            type="submit"
            data-testid="submit-button"
          />
        </label>
      </form>
      <section>
        <span className="text-xl text-secondary">
          Already have an account?
          <NavLink
            to="/singin"
            className="rounded-md bg-yellow-300 text-primary ml-2 px-2 py-1"
          >
            Sign in
          </NavLink>
        </span>
      </section>
    </div>
  );
};

export default SignUpPage;
