'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center py-4 bg-light mt-5"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div>
        <p className="mb-1">
          &copy; {currentYear} <span className="fw-bold">Chat Whiz</span>. All rights reserved.
        </p>
        <address className="mb-0" style={{ fontStyle: "normal" }}>
          Contact us:
          <a
            href="mailto:support@chat-whiz.com"
            className="text-decoration-underline"
            aria-label="Email support at Chat Whiz"
          >
            support@chat-whiz.com
          </a>
        </address>
      </div>
    </footer>
  );
}
