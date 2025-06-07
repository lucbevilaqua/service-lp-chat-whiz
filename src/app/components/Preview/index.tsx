'use client';
import Image from "next/image";

export default function Preview() {
  return (
    <section className="row mt-5" id="home" aria-labelledby="preview-title">
      <div className="col-12 col-md-4 align-self-start dvh-50 d-flex flex-column justify-content-center">
        <h2 className="text-break-word" id="preview-title">Automating connections, driving results</h2>
        <p className="text-break-word lead ff-raleway">
          Explore the frontiers of tomorrow with us,
          where technology and innovation meet to
          make the impossible a reality. Our mission
          is to redefine paradigms and lead the way
          to a bright, connected digital future.
        </p>
      </div>
      <div className="col-12 col-md position-relative dvh-50">
        <Image
          src="/images/laptop-with-chat.svg"
          alt="Laptop displaying a chat interface"
          fill
          className="rounded"
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
