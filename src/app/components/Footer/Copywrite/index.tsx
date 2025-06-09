'use client';

export default function Copywrite() {
  const currentYear = new Date().getFullYear();
  return (
    <p className="mb-1">
      &copy; {currentYear} <span className="fw-bold">Chat Whiz</span>. All rights reserved.
    </p>
  );
}
