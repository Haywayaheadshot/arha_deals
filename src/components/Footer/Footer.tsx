import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <section className="bg-footer-one w-full text-primary flex flex-col justify-center items-center py-3 gap-2">
        <BsArrowUpCircleFill
          data-testid="arrow-up"
          onClick={handleScrollToTop}
        />
        <h2 className="text-primary">TOP OF PAGE</h2>
      </section>
      <section className="bg-footer-two w-full text-primary py-5">
        <ul className="grid grid-cols-2 w-screen place-items-center gap-2">
          <li>Phones</li>
          <li>
            <NavLink to="/reels">Reels</NavLink>
          </li>
          <li>Baby Products</li>
          <li>
            <NavLink to="/technews">Tech News</NavLink>
          </li>
          <li>
            <NavLink to="/exclusiveitems">Exclusive Items</NavLink>
          </li>
          <li>
            <NavLink to="/phonehacks">Phone Hacks</NavLink>
          </li>
        </ul>
      </section>
      <section className="bg-black text-primary w-full py-5 flex flex-col justify-center items-center gap-10">
        <h3>Follow Us On Social Media</h3>
        <ul className="flex flex-row gap-10 py-3">
          <li>
            <a
              href="https://www.tiktok.com/@arhadeals"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <FaTiktok />
              <span>Tik Tok</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/arha_deals/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/arha_deals"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </li>
        </ul>
        <span className="flex flex-row justify-center items-center gap-2 py-5">
          <FaRegCopyright />
          <i>2023. Designed By Abubakar Ummar</i>
        </span>
      </section>
    </div>
  );
};

export default Footer;
