import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UI } from "./../";

export default function Navbar(props) {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeActive, setHomeActive] = useState(false);
  const [isExpActive, setExpActive] = useState(false);
  const [isCertActive, setCertActive] = useState(false);
  const [isAboutActive, setAboutActive] = useState(false);

  return (
    <nav className="bg-primary shadow-lg">
      <div className="flex items-center justify-between h-16">
        <div className="hidden md:flex flex-col justify-center h-full px-4 font-karla italic text-3xl">
          {props.navtitle}
        </div>
        <div className="flex justify-center flex-grow flex-wrap px-8 content-center h-full">
          <div className="hidden md:block">
            <motion.div className="flex justify-center space-x-4">
              <UI.MenuItem style={{ minWidth: 400 }}>
                <NavLink
                  to="/"
                  className={`p-2 ${
                    isHomeActive
                      ? "bg-transparent"
                      : "font-medium bg-gradient-to-r from-blue-700 via-pink-500 to-red-500"
                  }`}
                  style={({ isActive }) => {
                    setHomeActive(!isActive);
                    return {
                      color: isActive ? "white" : "black",
                      borderRadius: "10px",
                    };
                  }}
                >
                  Home
                </NavLink>
              </UI.MenuItem>
              <UI.MenuItem style={{ minWidth: 400 }}>
                <NavLink
                  className={`p-2 ${
                    isExpActive
                      ? "bg-transparent"
                      : "font-medium bg-gradient-to-r from-blue-700 via-pink-500 to-red-500"
                  }`}
                  to="/experiences"
                  style={({ isActive }) => {
                    setExpActive(!isActive);
                    return {
                      color: isActive ? "white" : "black",
                      borderRadius: "10px",
                    };
                  }}
                >
                  Experiences
                </NavLink>
              </UI.MenuItem>
              <UI.MenuItem style={{ minWidth: 400 }}>
                <NavLink
                  className={`p-2 ${
                    isCertActive
                      ? "bg-transparent"
                      : "font-medium bg-gradient-to-r from-blue-700 via-pink-500 to-red-500"
                  }`}
                  to="/certifications"
                  style={({ isActive }) => {
                    setCertActive(!isActive);
                    return {
                      color: isActive ? "white" : "black",
                      borderRadius: "10px",
                    };
                  }}
                >
                  Certificartions
                </NavLink>
              </UI.MenuItem>
              <UI.MenuItem style={{ minWidth: 400 }}>
                <NavLink
                  className={`p-2 ${
                    isAboutActive
                      ? "bg-transparent"
                      : "font-medium bg-gradient-to-r from-blue-700 via-pink-500 to-red-500"
                  }`}
                  to="/about"
                  style={({ isActive }) => {
                    setAboutActive(!isActive);
                    return {
                      color: isActive ? "white" : "black",
                      borderRadius: "10px",
                    };
                  }}
                >
                  About
                </NavLink>
              </UI.MenuItem>
            </motion.div>
          </div>
        </div>
        <div className="m-2 flex justify-between md:hidden w-full">
          <div className="flex flex-col justify-center">
            {location.pathname === "/"
              ? "Home"
              : location.pathname === "/experiences"
              ? "Experiences"
              : location.pathname === "/certifications"
              ? "Certifications"
              : location.pathname === "/certifications"
              ? "About"
              : "Uknow"}
          </div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="bg-purple-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-purple-100 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open Main Menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-500 transform"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden">
          <div className=" pb-2">
            <div className="ml-10 flex flex-wrap items-baseline space-x-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Experience</NavLink>
              <NavLink to="/">Certifications</NavLink>
              <NavLink to="/">About</NavLink>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
