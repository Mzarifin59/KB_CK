"use client";
import React from "react";

export default function TableContent({ linkstep, title }) {
  const handleScroll = (event) => {
    event.preventDefault();
    const element = document.getElementById(linkstep, title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
    <a
      href={`#${linkstep}`}
      onClick={handleScroll}
      className=" block mb-2 hover:border-l nunito border-blue-400
      text-secondary-gray hover:text-blue-600 text-[16px] "
    >
      {title}
    </a>
    </div>
  );
}
