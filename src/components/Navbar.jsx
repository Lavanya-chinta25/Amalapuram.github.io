import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pubOpen, setPubOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Detect desktop with resize listener
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      // Close menus on resize to prevent stuck menus
      setOpen(false);
      setPubOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeClass =
    "bg-white/10 backdrop-blur-sm shadow-[0_0_10px_#3b82f6] rounded px-2 py-1";

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center relative">
      <div className="font-semibold text-lg">
        <Link
          to="/"
          className={isActive("/") ? activeClass : "hover:bg-white/10 rounded px-2 py-1"}
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="lg:hidden focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation links */}
      <div
        className={`flex-col lg:flex-row lg:flex items-center lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent z-50 transition-all duration-300 ease-in-out ${
          open ? "flex" : "hidden lg:flex"
        }`}
      >
        {/* Publications dropdown wrapper */}
        <div
        className="relative w-full lg:w-auto"
        onMouseEnter={() => {
            if (isDesktop) setPubOpen(true);
        }}
         onClick={() => {
            setPubOpen(false);
          }}
        >
        <button
            onClick={() => {
            if (!isDesktop) setPubOpen(!pubOpen);
            }}
            className={`flex items-center px-2 py-1 w-full lg:w-auto justify-between lg:justify-center ${
            isActive("/publications/all") ||
            isActive("/publications/selected") ||
            isActive("/publications/under-review")
                ? activeClass
                : "hover:bg-white/10 rounded"
            } focus:outline-none`}
            type="button"
        >
            Publications
            <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            >
            <path d="M6 9l6 6 6-6" />
            </svg>
        </button>

        {(pubOpen) && (
            <div
            className={`${
                isDesktop
                ? "absolute bg-white text-black mt-2 rounded shadow-lg py-2 w-48 z-50 left-0 top-full"
                : "relative bg-black text-white mt-1 rounded py-1 w-full"
            }`}
            >
            <Link
                to="/publications/all"
                className={`block px-4 py-2 hover:bg-gray-200 ${
                isActive("/publications/all")
                    ? activeClass.replace("bg-white/10", "bg-blue-200/30")
                    : ""
                }`}
                onClick={() => {
                setPubOpen(false);
                setOpen(false);
                }}
            >
                All
            </Link>
            <Link
                to="/publications/selected"
                className={`block px-4 py-2 hover:bg-gray-200 ${
                isActive("/publications/selected")
                    ? activeClass.replace("bg-white/10", "bg-blue-200/30")
                    : ""
                }`}
                onClick={() => {
                setPubOpen(false);
                setOpen(false);
                }}
            >
                Selected
            </Link>
            <Link
                to="/publications/under-review"
                className={`block px-4 py-2 hover:bg-gray-200 ${
                isActive("/publications/under-review")
                    ? activeClass.replace("bg-white/10", "bg-blue-200/30")
                    : ""
                }`}
                onClick={() => {
                setPubOpen(false);
                setOpen(false);
                }}
            >
                Under Review
            </Link>
            </div>
        )}
        </div>

        {/* Other links */}
        <Link
          to="/teaching-service"
          className={`${isActive("/teaching-service") ? activeClass : "hover:bg-white/10 rounded px-2 py-1"} w-full lg:w-auto`}
          onClick={() => {
            setOpen(false);
            setPubOpen(false);
          }}
        >
          Teaching & Academic Services
        </Link>
        <Link
          to="/projects"
          className={`${isActive("/projects") ? activeClass : "hover:bg-white/10 rounded px-2 py-1"} w-full lg:w-auto`}
          onClick={() => {
            setOpen(false);
            setPubOpen(false);
          }}
        >
          Projects
        </Link>
        <Link
          to="/academichonors"
          className={`${isActive("/academichonors") ? activeClass : "hover:bg-white/10 rounded px-2 py-1"} w-full lg:w-auto`}
          onClick={() => {
            setOpen(false);
            setPubOpen(false);
          }}
        >
          Academic Honors
        </Link>
      </div>
    </nav>
  );
}
