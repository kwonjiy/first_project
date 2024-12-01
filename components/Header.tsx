// components/Header.tsx
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <button onClick={() => router.push('/')}>Home</button>
        <button onClick={() => router.push('/blog')}>Blog</button>
        <button onClick={() => router.push('/study')}>Study</button>
      </nav>
    </header>
  );
};

export default Header;