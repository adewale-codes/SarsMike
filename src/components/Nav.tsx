import React, { useState, useEffect, MutableRefObject } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollLink from "./ScrollLink";

interface NavProps {
  homeRef: MutableRefObject<HTMLDivElement | null>;
  productRef: MutableRefObject<HTMLDivElement | null>;
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  contactRef: MutableRefObject<HTMLDivElement | null>;
  blogRef: MutableRefObject<HTMLDivElement | null>;
}

const Nav: React.FC<NavProps> = ({ homeRef, productRef, aboutRef, contactRef, blogRef }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (ref: React.RefObject<HTMLElement>, path: string) => {
    if (pathname !== "/") {
      navigate("/", { replace: true, state: { target: path } });
    } else {
      window.scrollTo({
        top: ref.current?.offsetTop ?? 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (location.state?.target) {
      const targetPath = location.state.target;
      const targetRef =
        targetPath === '/home' ? homeRef :
        targetPath === '/about' ? aboutRef :
        targetPath === '/contact' ? contactRef :
        targetPath === '/blog' ? blogRef : null;

      if (targetRef?.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop,
          behavior: 'smooth',
        });
      }
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, homeRef, aboutRef, contactRef, blogRef, navigate]);

  return (
    <nav>
      <div className="p-5 md:py-10 md:px-24 flex justify-between items-center">
        <ScrollLink path="/" toRef={homeRef}>
          <p className="text-white font-bold text-xl">SARSMIKE</p>
        </ScrollLink>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
          <button onClick={() => handleScroll(homeRef, "/home")} className="text-white font-extralight">
            Home
          </button>
          <button onClick={() => navigate('/products')} className="text-white font-extralight">
            Products
          </button>
          <button onClick={() => handleScroll(aboutRef, "/about")} className="text-white font-extralight">
            About
          </button>
          <button onClick={() => handleScroll(contactRef, "/contact")} className="text-white font-extralight">
            Contact
          </button>
          <button onClick={() => handleScroll(blogRef, "/blog")} className="text-white font-extralight">
            Blog
          </button>
        </div>
        <div className="lg:hidden flex justify-self-end cursor-pointer">
          {isOpen ? (
            <img
              src="/assets/xmark.svg"
              alt="close-icon"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src="/assets/bars.svg"
              alt="bars-icon"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      <div
        className={`block lg:hidden fixed h-64 mt-4 transform left-0 w-full bg-black transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}
      >
        <div className="flex flex-col space-y-5 ml-5">
          <button onClick={() => handleScroll(homeRef, "/home")} className="text-white font-extralight">
            Home
          </button>
          <button onClick={() => navigate('/products')} className="text-white font-extralight">
            Products
          </button>
          <button onClick={() => handleScroll(aboutRef, "/about")} className="text-white font-extralight">
            About
          </button>
          <button onClick={() => handleScroll(contactRef, "/contact")} className="text-white font-extralight">
            Contact
          </button>
          <button onClick={() => handleScroll(blogRef, "/blog")} className="text-white font-extralight">
            Blog
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
