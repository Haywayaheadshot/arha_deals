import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { RxEyeClosed } from "react-icons/rx";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-[100vh] flex flex-col justify-start items-center px-4 gap-2 bg-sign-up-bg bg-no-repeat bg-center">
      <NavLink to="/">
        <h1 className="text-xl text-tertiary flex flex-wrap py-3">
          Tailored
          <FaCrown />
          Budget
        </h1>
      </NavLink>
      <form className="flex flex-col border-yellow-300 rounded-md border-[1px] p-4 justify-start gap-3 bg-inherit">
        <span className="text-2xl">Sing up</span>
        <label htmlFor="name" className="text-lg uppercase">
          Name:
          <br />
          <input
            type="text"
            id="name"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md uppercase"
          />
        </label>
        <label htmlFor="email" className="text-lg uppercase">
          Email:
          <br />
          <input
            type="email"
            id="email"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md uppercase"
          />
        </label>
        <label htmlFor="user-name" className="text-lg uppercase">
          User Name:
          <br />
          <input
            type="text"
            id="user-name"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md uppercase"
          />
        </label>
        <label htmlFor="display-picture" className="text-lg uppercase">
          Profile Picture:
          <br />
          <input
            type="file"
            id="display-picture"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md uppercase"
          />
        </label>
        <label htmlFor="dob" className="text-lg uppercase">
          Date Of Birth:
          <br />
          <input
            type="date"
            id="dob"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md uppercase"
          />
        </label>
        <label htmlFor="password" className="flex flex-col uppercase text-lg">
          Password:
          <span className="flex flex-row gap-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              <RxEyeClosed />
            </button>
          </span>
        </label>
        <label htmlFor="confirm-password" className="uppercase text-lg">
          Confirm Password:
          <br />
          <input
            type={showPassword ? "text" : "password"}
            id="confirm-password"
            className="w-full border-2 border-tertiary pl-2 py-1 text-sm rounded-md uppercase"
          />
        </label>
        <label htmlFor="submit">
          <input
            type="submit"
            id="submit"
            className="bg-yellow-300 text-primary rounded-md w-full uppercase"
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
