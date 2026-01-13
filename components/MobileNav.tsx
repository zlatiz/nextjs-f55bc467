"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav({ links }: { links: Array<{ href: string; label: string }> }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-2 rounded-md bg-[rgba(255,255,255,0.03)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-[var(--background)] shadow-lg p-4 z-50">
          {(Array.isArray(links) ? links : []).map((link) => (
            <Link key={link.href} href={link.href} className="block py-2 px-3 rounded-md hover:bg-[rgba(255,255,255,0.02)]" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
