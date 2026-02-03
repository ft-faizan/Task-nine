import { useEffect, useState } from "react";
import logo from "../assets/LOGO.png";
import Hamburger from "./Hamburger";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-300
      ${
        scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg border-b border-green-900"
          : "bg-transparent"
      }
      `}
    >
      {/* // max-w-7xl
      //  mx-auto 
      //  px-6*/}
      <div
        className="
       w-full
        h-24 
          px-6
         lg:px-36
         flex
          items-center
           justify-between
           "
      >
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-15 text-white font-normal text-xl">
          <li className="cursor-pointer hover:text-green-400">
      <a href="#Home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-green-400"><a href="#Features">Features</a></li>
          <li className="cursor-pointer hover:text-green-400"><a href="#Blogs">Blogs</a></li>
          <li className="cursor-pointer hover:text-green-400"><a href="#Contact">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger open={open} setOpen={setOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md text-white">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li> <a href="#Home">Home</a></li>
            <li> <a href="#Features">Features</a></li>
            <li> <a href="#Blogs">Blogs</a></li>
            <li> <a href="#Contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
