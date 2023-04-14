import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../style";
import { menu, close } from "../assets";
import { navLinks } from "../constants";
import { sectionwrapper } from "../hoc";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-black bg-opacity-40 z-40`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h2 className="font-semibold text-lg sm:text-2xl">Amperfect</h2>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary hover:text-white transition-transform duration-75 hover:scale-105 "
              }`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center ">
          <img
            src={toggle ? "src/assets/close.svg" : "src/assets/menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 my-2  z-10 rounded-xl `}
          >
            <ul className="list-none justify-end items-start flex-col space-y-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary hover:text-white transition-transform duration-75 hover:scale-105"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
