import Header from "./components/Header";

import OurServices from "./components/OurServices";
import Preview from "./components/Preview";
import AboutOurBrand from "./components/AboutOurBrand";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container text-center mt-5">
        <section className="row">
          <div className="col">
            <h1 className="display-XXL">Chat Whiz</h1>
          </div>
        </section>

        <Preview />

        <OurServices />

      </main>
      <div className="container-fluid">
        <AboutOurBrand />
        <ContactUs />
      </div>
      <footer
        className="text-center py-4 bg-light mt-5"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div>
          <p className="mb-1">
            &copy; {new Date().getFullYear()} <span className="fw-bold">Chat Whiz</span>. All rights reserved.
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
    </>
  );
}
