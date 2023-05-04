import React from "react";
import { NavLink } from "react-router-dom";
import applePhones from "../../assets/apple-phones.png";
import droid from "../../assets/black_baby_feeding_bottle_3.png";
import FeaturedProducts from "../Shared/FeaturedProducts";

const HomePage = () => {
  return (
    <div className="bg-primary pt-10 tablet:pt-15">
      <section className="bg-home-bg bg-cover mt-1 bg-no-repeat bg-center h-full">
        <h1 className="tablet:text-7xl font-bold text-5xl text-center px-2 py-20 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">
          Quality Affordable Products!
        </h1>
      </section>
      <section className="py-10">
        <h2 className="text-center text-2xl tablet:text-5xl">
          Quality Matters
        </h2>
        <p className="text-center p-5 tablet:text-2xl">
          Use devices that works for you! Not devices that you work for.
        </p>
      </section>
      <section className="mb-6 flex flex-col justify-center items-center">
        <img
          src={applePhones}
          alt="Stack of Apple phones"
          className="max-w-home-image tablet:max-w-tab-image"
        />
        <p className="text-center py-4">
          <span className="border-b-2 border-b-tertiary tablet:text-2xl">
            Check Out Phones section
          </span>
        </p>
      </section>
      <section className="py-10 bg-box tablet:px-5">
        <NavLink to="/phonehacks">
          <h2 className="text-center text-2xl text-primary tablet:text-5xl">
            Phone Hacks
          </h2>
          <p className="text-center p-5 text-primary tablet:text-2xl">
            Check out simple hacks to help you realize the capabilities of your
            devices.
          </p>
        </NavLink>
      </section>
      <section className="py-10 flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl tablet:text-5xl">
          Featured Products
        </h2>
        <div className="text-center tablet:text-2xl">
          See What&apos;s Trending Right Now
        </div>
        <FeaturedProducts />
        <span className="border-b-2 border-b-tertiary pt-3 tablet:text-2xl">
          View more
        </span>
      </section>
      <section className="py-10 bg-box mb-10">
        <NavLink to="/technews">
          <h2 className="text-center text-2xl text-primary tablet:text-5xl">
            Tech News
          </h2>
          <p className="text-center p-5 text-primary tablet:text-2xl">
            Check Out the latest news in the tech industry.
          </p>
        </NavLink>
      </section>
      <section className="py-10 mb-6 flex flex-col justify-center items-center">
        <img
          src={droid}
          alt="A Droid Robot"
          className="max-w-home-image tablet:min-w-tab-image"
        />
        <p className="text-center py-4">
          <span className="border-b-2 border-b-tertiary tablet:text-2xl">
            Check out baby products from Turkey.
          </span>
        </p>
      </section>
      <section className="py-10 bg-box mb-10 tablet:px-5">
        <NavLink to="/exclusiveItems">
          <h2 className="text-center text-2xl text-primary tablet:text-5xl">
            Exclusive Items
          </h2>
          <p className="text-center p-5 text-primary tablet:text-2xl">
            This is a category of items that are not necessarily tech but
            authentic.
          </p>
        </NavLink>
      </section>
    </div>
  );
};

export default HomePage;
