import Header from "./components/Header";
import OurServices from "./components/OurServices";
import Preview from "./components/Preview";
import AboutOurBrand from "./components/AboutOurBrand";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Reviews from "./components/Reviews";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container text-center mt-5">
        <section className="row">
          <div className="col">
            <h1 className="display-XXL">
              Chat Whiz: AI Automation for Business
            </h1>
            <h2 className="display-6 mt-2">
              WhatsApp Bots & Intelligent Chatbots
            </h2>
            <p className="lead mt-3">
              Intelligent automation, AI-powered chatbots, and WhatsApp bots to streamline operations, boost customer engagement, and drive business growth in the US and Europe.
            </p>
          </div>
        </section>

        <Preview />

        <OurServices />
      </main>
      <div className="container-fluid">
        <AboutOurBrand />
        <ContactUs />
        <Reviews />
        <Faq />
      </div>
      <Footer />
    </>
  );
}
