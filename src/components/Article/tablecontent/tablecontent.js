"use client";
import React from "react";
import '../tablecontent/toc.css';

export default function TableContent({ linktitle, title, activeLink, setActiveLink }) {
  const handleScroll = (event) => {
    event.preventDefault();
    const element = document.getElementById(linktitle);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setActiveLink(linktitle);
  };

  return (
    <div>
      <a
        href={`#${linktitle}`}
        onClick={handleScroll}
        className={`pl-4 block mb-2 ${
          activeLink === linktitle
          ? 'border-l-4 border-blue-700 text-blue-600'
          : 'hover:border-l border-blue-400 text-gray-700 hover:text-blue-600'
        }`}
      >
        {title}
      </a>
    </div>
  );
}
