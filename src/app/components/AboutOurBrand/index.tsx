export const dynamic = "force-static";

export default function AboutOurBrand() {
  return (
    <section
      className="row p-5 bg-gray-500"
      id="about"
      aria-labelledby="about-brand-title"
    >
      <div className="col-12 col-md text-center align-self-center">
        <h2 id="about-brand-title">
          About Chat Whiz: Experts in AI Automation & Digital Transformation
        </h2>
      </div>
      <div className="col-12 col-md">
        <p className="lead ff-raleway">
          Chat Whiz specializes in AI-powered communication automation, helping businesses in the US and Europe revolutionize customer interactions.
          Our advanced technology and results-driven approach deliver solutions that streamline processes, increase operational efficiency, and create memorable customer experiences.
        </p>
      </div>
      <div className="col-12 col-md">
        <p className="lead ff-raleway">
          Our mission is to be your trusted partner on the journey to digital transformation, providing intelligent automation, WhatsApp bots, and seamless integration with your existing business systems.
        </p>
      </div>
    </section>
  );
}
