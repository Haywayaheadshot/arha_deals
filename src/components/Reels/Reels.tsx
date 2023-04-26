import React from "react";

const Reels = () => {
  return (
    <div className="py-10">
      <section className="pt-5">
        <h1 className="pt-2 text-center text-3xl">
          Welcome to our reels page.
        </h1>
        <p className="text-center py-2 px-7">
          Check out interracting content we created just for you.
        </p>
      </section>
      <section className="flex flex-col gap-5 justify-center items-center px-10">
        <div className="border-2 px-3 py-5 rounded-lg flex flex-col gap-2 justify-center items-center">
          <h1>Reel Video</h1>
          <h2>Real Title</h2>
          <ul className="flex flex-row justify-between gap-4">
            <li>Video Description</li>
            <li>Duration</li>
          </ul>
          <ul className="flex flex-row justify-between gap-2">
            <li>Like Count</li>
            <li>Comment Count</li>
            <li>Share Count</li>
            <li>Views Count</li>
          </ul>
          <span>share url</span>
        </div>
        <div className="border-2 px-3 py-5 rounded-lg flex flex-col gap-2 justify-center items-center">
          <h1>Reel Video</h1>
          <h2>Real Title</h2>
          <ul className="flex flex-row justify-between gap-4">
            <li>Video Description</li>
            <li>Duration</li>
          </ul>
          <ul className="flex flex-row justify-between gap-2">
            <li>Like Count</li>
            <li>Comment Count</li>
            <li>Share Count</li>
            <li>Views Count</li>
          </ul>
          <span>share url</span>
        </div>
        <div className="border-2 px-3 py-5 rounded-lg flex flex-col gap-2 justify-center items-center">
          <h1>Reel Video</h1>
          <h2>Real Title</h2>
          <ul className="flex flex-row justify-between gap-4">
            <li>Video Description</li>
            <li>Duration</li>
          </ul>
          <ul className="flex flex-row justify-between gap-2">
            <li>Like Count</li>
            <li>Comment Count</li>
            <li>Share Count</li>
            <li>Views Count</li>
          </ul>
          <span>share url</span>
        </div>
      </section>
    </div>
  );
};

export default Reels;
