import React, { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ScrollLinkProps {
  toRef: React.RefObject<HTMLElement>;
  children: ReactNode;
  path: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ toRef, children, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      navigate(path);
    }
  };

  const isCurrentPath = location.pathname === path;

  return (
    <button
      className={`text-white ${isCurrentPath ? "font-bold" : "font-extralight"}`}
      onClick={() => scrollToRef(toRef)}
    >
      {children}
    </button>
  );
};

export default ScrollLink;
