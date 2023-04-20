import React from "react";
// import FeaturedProducts from "../Shared/FeaturedProducts";

function HomePage() {
  return (
    <div className="bg-primary">
      <section className="bg-home-bg bg-cover bg-no-repeat bg-center h-full">
        <h1 className="text-5xl text-center px-2 py-20 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Quality Products. Best Prices!
        </h1>
      </section>
      <section className="py-10">
        <h2 className="text-center text-2xl">Quality Matters</h2>
        <p className="text-center p-5">
          Use devices that works for you! Not devices that you work for.
        </p>
      </section>
      {/* <FeaturedProducts /> */}
    </div>
  );
}

export default HomePage;
