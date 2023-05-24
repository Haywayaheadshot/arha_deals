import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { RxEyeClosed } from "react-icons/rx";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dateOfBirth = useRef<HTMLInputElement | null>(null);
  const confirmPasswordDiv = useRef<HTMLInputElement | null>(null);
  const signUpDiv = useRef<HTMLInputElement | null>(null);
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
    const dobInput = dateOfBirth.current;
    const passwordInput = confirmPasswordDiv.current;

    if (!dobInput) {
      return;
    }

    if (!passwordInput) {
      return;
    }

    const dobValue = dobInput.value;
    const currentDate = new Date();
    const selectedDate = new Date(dobValue);
    const ageDifference =
      currentDate.getFullYear() - selectedDate.getFullYear();

    if (ageDifference < 15) {
      const errorMessage = document.createElement("p");
      errorMessage.className =
        "bg-red-400 text-primary rounded-md text-center text-sm py-1 max-w-[79vw]";
      errorMessage.innerHTML = "You must be at least 15 years old to register.";

      const parentElement = dobInput.parentNode;
      if (parentElement) {
        parentElement.appendChild(errorMessage);
        setTimeout(() => {
          parentElement.removeChild(errorMessage);
        }, 3000);
      }
      return;
    }

    if (userInputs.password !== userInputs.confirmPassword) {
      const errorMessage = document.createElement("p");
      errorMessage.className =
        "bg-red-400 text-primary rounded-md text-center text-sm py-1 max-w-[79vw]";
      errorMessage.innerHTML = "Password and confirm password do not match.";
      const parentElement = passwordInput.parentNode;
      if (parentElement) {
        parentElement.appendChild(errorMessage);
        setTimeout(() => {
          parentElement.removeChild(errorMessage);
        }, 3000);
        return;
      }
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
        const signUpInput = signUpDiv.current;
        const parentElement = signUpInput?.parentNode;
        if (!parentElement) {
          return;
        }
        if (data.status === 201) {
          const successMessage = document.createElement("p");
          successMessage.innerHTML = data.message;
          successMessage.className =
            "bg-green-600 text-primary rounded-md text-center text-sm py-1 max-w-[79vw]";
          parentElement.appendChild(successMessage);
          setTimeout(() => {
            parentElement.removeChild(successMessage);
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
          const errorMessage = document.createElement("p");
          errorMessage.innerHTML = data.errors;
          errorMessage.className =
            "bg-red-400 text-primary rounded-md text-center text-sm py-1 max-w-[79vw]";
          parentElement.appendChild(errorMessage);
          setTimeout(() => {
            parentElement.removeChild(errorMessage);
          }, 3000);
        }
      });
  };

  return (
    <div className="h-[100vh] flex flex-col justify-start items-center px-4 gap-2 bg-sign-up-bg bg-no-repeat bg-center">
      <NavLink to="/">
        <h1 className="text-xl text-tertiary flex flex-wrap py-3">
          Tailored
          <FaCrown />
          Budget
        </h1>
      </NavLink>
      <form
        onSubmit={handleSignUpSubmit}
        className="flex flex-col border-yellow-300 rounded-md border-[1px] p-4 justify-start gap-3 bg-inherit min-w-[30vw]"
      >
        <span className="text-2xl">Sing up</span>
        <label htmlFor="name" className="text-lg uppercase">
          Name:
          <br />
          <input
            type="text"
            id="name"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md"
            pattern=".{5,}"
            title="Please enter at least 5 characters"
            value={userInputs.name}
            onChange={(e) => {
              setUserInputs({ ...userInputs, name: e.target.value });
            }}
            required
          />
        </label>
        <label htmlFor="email" className="text-lg uppercase">
          Email:
          <br />
          <input
            type="email"
            id="email"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md"
            value={userInputs.email}
            onChange={(e) => {
              setUserInputs({ ...userInputs, email: e.target.value });
            }}
            required
          />
        </label>
        <label htmlFor="user-name" className="text-lg uppercase">
          User Name:
          <br />
          <input
            type="text"
            id="user-name"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md"
            pattern="[A-Za-z]{3,8}"
            title="Please enter between 3 to 8 characters"
            value={userInputs.userName}
            onChange={(e) => {
              setUserInputs({ ...userInputs, userName: e.target.value });
            }}
            required
          />
        </label>
        <label htmlFor="display-picture" className="text-lg uppercase">
          Profile Picture:
          <br />
          <input
            type="file"
            id="display-picture"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md"
            value={userInputs.photo}
            onChange={(e) => {
              setUserInputs({ ...userInputs, photo: e.target.value });
            }}
          />
        </label>
        <label htmlFor="dob" className="text-lg uppercase">
          Date Of Birth:
          <br />
          <input
            ref={dateOfBirth}
            type="date"
            id="dob"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md"
            value={userInputs.dateOfBirth}
            onChange={(e) => {
              setUserInputs({ ...userInputs, dateOfBirth: e.target.value });
            }}
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col uppercase text-lg">
          Password:
          <span className="flex flex-row gap-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md"
              pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}"
              title="Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
              value={userInputs.password}
              onChange={handlePasswordChange}
              required
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
          <input
            ref={confirmPasswordDiv}
            type={showPassword ? "text" : "password"}
            id="confirm-password"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md"
            value={userInputs.confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </label>
        <label htmlFor="submit">
          <input
            type="submit"
            id="submit"
            className="bg-yellow-300 text-primary rounded-md w-full uppercase py-1 font-bold cursor-pointer"
            ref={signUpDiv}
          />
        </label>
      </form>
      <section>
        <span className="text-xl">
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
