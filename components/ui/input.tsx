"use client";
import * as React from "react";
import { useState } from 'react';

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
};

export default function Input({ label, placeholder, value: initial = '', onChange }: InputProps) {
  const [value, setValue] = useState<string>(initial);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  }
  return (
    <label className="block">
      {label && <span className="text-sm mb-1 block">{label}</span>}
      <input value={value} onChange={handleChange} placeholder={placeholder} className="w-full px-3 py-2 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]" />
    </label>
  );
}
