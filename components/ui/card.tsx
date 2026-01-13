import React from 'react';

type CardProps = { title: string; children: React.ReactNode };

export default function Card({ title, children }: CardProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="text-[var(--muted-foreground)] text-sm">{children}</div>
    </div>
  );
}
