"use client";
import React from "react";
import { Icon } from '@iconify/react';

const ScrollToTopButton = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 bg-gray-200 text-white p-2 rounded-sm shadow-lg"
    >
      <Icon icon="ep:arrow-up-bold" width={24} height={24} color="#5A616A" />
    </button>
  );
};

export default ScrollToTopButton;
