import Copywrite from "./Copywrite";

export const dynamic = "force-static";

export default function Footer() {
  return (
    <footer
      className="text-center py-4 bg-light mt-5"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div>
        <Copywrite />
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
