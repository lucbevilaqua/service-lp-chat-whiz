import Image from "next/image";

export const dynamic = "force-static";

export default function Reviews() {
  return (
    <>
      <section className="row my-5 justify-content-center align-items-center bg-gray-500 p-5" id="reviews" aria-labelledby="reviews-title">
        <div className="col-12 col-md-8">
          <h2 id="reviews-title" className="display-6 mb-4 text-center fw-bold">
            What Our Clients Say
          </h2>
          <div className="d-flex align-items-center bg-white rounded shadow-sm p-4">
            <Image
              src="/images/aliffer-avatar.jpeg"
              alt="Aliffer Araujo, CEO of Climarc"
              width={72}
              height={72}
              className="rounded-circle me-4 border"
              style={{ objectFit: "cover" }}
            />
            <div>
              <blockquote className="mb-2">
                <p className="lead ff-raleway mb-1">
                  “Chat Whiz transformed our customer support with their AI WhatsApp bots. Our response time dropped from hours to seconds! The bot learned to recommend the best air conditioning products to our clients, providing 24/7 personalized support.”
                </p>
              </blockquote>
              <cite className="fw-bold text-secondary">
                — Aliffer Araujo, CEO, Climarc
              </cite>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Organization",
            "name": "Chat Whiz"
          },
          "author": {
            "@type": "Person",
            "name": "Aliffer Araujo"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Chat Whiz transformed our customer support with their AI WhatsApp bots. Our response time dropped from hours to seconds! The bot learned to recommend the best air conditioning products to our clients, providing 24/7 personalized support.",
          "publisher": {
            "@type": "Organization",
            "name": "Climarc"
          }
        })}
      </script>
    </>
  );
}
