import React from "react";
import { NavLink } from "react-router-dom";
import applePhones from "../../assets/apple-phones.png";
import droid from "../../assets/black_baby_feeding_bottle_3.png";
import FeaturedProducts from "../Shared/FeaturedProducts";

function HomePage() {
  return (
    <div className="bg-primary pt-10">
      <section className="bg-home-bg bg-cover mt-1 bg-no-repeat bg-center h-full">
        <h1 className="font-bold text-5xl text-center px-2 py-20 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">
          Quality Affordable Products!
        </h1>
      </section>
      <section className="py-10">
        <h2 className="text-center text-2xl">Quality Matters</h2>
        <p className="text-center p-5">
          Use devices that works for you! Not devices that you work for.
        </p>
      </section>
      <section className="mb-6 flex flex-col justify-center items-center">
        <img
          src={applePhones}
          alt="Stack of Apple phones"
          className="max-w-home-image"
        />
        <p className="text-center py-4">
          <span className="border-b-2 border-b-tertiary">
            Check Out Phones section
          </span>
        </p>
      </section>
      <section className="py-10 bg-box">
        <h2 className="text-center text-2xl text-primary">Tech Hacks</h2>
        <p className="text-center p-5 text-primary">
          Check out simple hacks to help you realize the capabilities of your
          devices.
        </p>
      </section>
      <section className="py-10 flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl">Featured Products</h2>
        <div className="text-center">See What&apos;s Trending Right Now</div>
        <FeaturedProducts />
        <span className="border-b-2 border-b-tertiary pt-3">View more</span>
      </section>
      <section className="py-10 bg-box mb-10">
        <NavLink to="/technews">
          <h2 className="text-center text-2xl text-primary">Tech News</h2>
          <p className="text-center p-5 text-primary">
            Check Out the latest news in the tech industry.
          </p>
        </NavLink>
      </section>
      <section className="py-10 mb-6 flex flex-col justify-center items-center">
        <img src={droid} alt="A Droid Robot" className="max-w-home-image" />
        <p className="text-center py-4">
          <span className="border-b-2 border-b-tertiary">
            Check out baby products from Turkey.
          </span>
        </p>
      </section>
      <section className="py-10 bg-box mb-10">
        <h2 className="text-center text-2xl text-primary">Exclusive Items</h2>
        <p className="text-center p-5 text-primary">
          This is a category of items that are not necessarily tech but
          authentic.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
