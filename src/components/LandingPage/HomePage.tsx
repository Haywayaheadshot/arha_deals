import React from "react";
import applePhones from "../../assets/apple-phones.png";
// import FeaturedProducts from "../Shared/FeaturedProducts";

function HomePage() {
  return (
    <div className="bg-primary">
      <section className="bg-home-bg bg-cover bg-no-repeat bg-center h-full">
        <h1 className="font-bold text-5xl text-center px-2 py-20 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400">
          Quality Products. Best Prices!
        </h1>
      </section>
      <section className="py-10">
        <h2 className="text-center text-2xl">Quality Matters</h2>
        <p className="text-center p-5">
          Use devices that works for you! Not devices that you work for.
        </p>
      </section>
      <section>
        <img src={applePhones} alt="Stack of Apple phones" />
        <p className="text-center py-4">
          <span className="border-b-2 border-b-tertiary">
            Check out iProducts
          </span>
        </p>
      </section>
      <section className="py-10 bg-tertiary">
        <h2 className="text-center text-2xl text-primary">Tech Hacks</h2>
        <p className="text-center p-5 text-primary">
          Check out simple hacks to help you realize the capabilities of your
          devices.
        </p>
      </section>
      {/* <FeaturedProducts /> */}
    </div>
  );
}

export default HomePage;
