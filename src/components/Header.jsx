import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/webicon.png";
import ShinyText from "./reactbits/ShinyText";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navMenu = [
    { id: 1, label: "Models", link: "/" },
    { id: 2, label: "Pricing", link: "/" },
    { id: 3, label: "About Us", link: "/" },
    { id: 4, label: "Contact Us", link: "/" },
    { id: 5, label: "Custom Models", link: "/" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-10 py-5 md:py-7 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="website logo"
          className="h-10"
          data-aos="fade-right"
          data-aos-duration="500"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="mr-3 lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white text-3xl"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Centered Navigation for Desktop */}
      <div
        className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2"
        data-aos="fade-in"
        data-aos-duration="500"
      >
        <div className="flex gap-x-6 text-white">
          {navMenu.map((item) => (
            <Link key={item.id} to={item.link} className="hover:text-gray-300">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Login & Register Buttons */}
      <div
        className="hidden lg:flex justify-end items-center gap-4"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <ShinyText
          text="Login"
          disabled={false}
          speed={3}
          className="px-6 py-2 border border-primary2 text-primary2 rounded-lg hover:cursor-pointer"
        />

        <button className="px-6 py-2 bg-primary2 text-btntext1 rounded-lg hover:cursor-pointer font-semibold">
          Get Started Now
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center gap-4 py-5 lg:hidden">
          {navMenu.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="text-white text-lg hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ShinyText
            text="Login"
            disabled={false}
            speed={3}
            className="px-6 py-2 border border-primary2 text-primary2 rounded-lg hover:cursor-pointer"
          />
          <button className="px-6 py-2 bg-primary2 text-btntext1 rounded-lg hover:cursor-pointer font-semibold">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
