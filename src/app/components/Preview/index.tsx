import Image from "next/image";

export const dynamic = "force-static";

export default function Preview() {
  return (
    <section className="row mt-5" id="home" aria-labelledby="preview-title">
      <div className="col-12 col-md-4 align-self-start dvh-50 d-flex flex-column justify-content-center">
        <h2 className="text-break-word" id="preview-title">
          AI Automation & WhatsApp Bots for Business Growth
        </h2>
        <p className="text-break-word lead ff-raleway">
          Empower your business with intelligent automation and AI-powered WhatsApp bots.
          Enhance customer engagement, streamline operations, and drive results with cutting-edge technology designed for modern enterprises in the US and Europe.
        </p>
      </div>
      <div className="col-12 col-md position-relative dvh-50">
        <Image
          src="/images/laptop-with-chat.svg"
          alt="AI-powered WhatsApp chatbot interface for business automation"
          fill
          priority
          className="rounded"
          style={{ objectFit: "contain", zIndex: 1 }}
        />
      </div>
    </section>
  );
}
