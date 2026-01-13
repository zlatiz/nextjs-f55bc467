"use client";
import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export default function Button({ children, href, onClick }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className="gradient-btn inline-flex items-center justify-center" onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className="gradient-btn inline-flex items-center justify-center">
      {children}
    </button>
  );
}
