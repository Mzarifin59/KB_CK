'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-4 left-5 text-white p-2 rounded-sm shadow-lg bg-[#D9EFFB] transition-colors duration-300"
    >
      {theme === 'dark' ? (
        <Icon icon="ri:moon-line" width={24} height={24} color="#5A616A" />
      ) : (
        <Icon icon="humbleicons:sun" width={24} height={24} color="#5A616A" />
      )}
    </button>
  );
};

export default ThemeToggle;
