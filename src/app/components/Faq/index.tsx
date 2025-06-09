export const dynamic = "force-static";

export default function Faq() {
  return (
    <>
      <section className="row my-5" id="faq" aria-labelledby="faq-title">
        <div className="col-12 col-md-10 offset-md-1">
          <h2 id="faq-title" className="display-6 mb-4 text-center fw-bold">
            Frequently Asked Questions about AI Automation & WhatsApp Bots
          </h2>
          <dl>
            <dt className="fw-bold mb-2">What is an AI-powered WhatsApp bot?</dt>
            <dd className="mb-4 lead ff-raleway">
              An AI-powered WhatsApp bot is an automated system that uses artificial intelligence to interact with customers, answer questions, and automate business processes via WhatsApp.
            </dd>
            <dt className="fw-bold mb-2">How can chatbots improve customer support?</dt>
            <dd className="mb-4 lead ff-raleway">
              Chatbots provide instant, 24/7 responses, reduce wait times, and automate repetitive tasks, improving customer satisfaction and operational efficiency.
            </dd>
            <dt className="fw-bold mb-2">Can Chat Whiz integrate bots with my CRM or ERP?</dt>
            <dd className="mb-0 lead ff-raleway">
              Yes, our solutions seamlessly integrate with popular CRMs and ERPs like Salesforce and HubSpot, automating workflows and data synchronization.
            </dd>
          </dl>
        </div>
      </section>

      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is an AI-powered WhatsApp bot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An AI-powered WhatsApp bot is an automated system that uses artificial intelligence to interact with customers, answer questions, and automate business processes via WhatsApp."
              }
            },
            {
              "@type": "Question",
              "name": "How can chatbots improve customer support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chatbots provide instant, 24/7 responses, reduce wait times, and automate repetitive tasks, improving customer satisfaction and operational efficiency."
              }
            },
            {
              "@type": "Question",
              "name": "Can Chat Whiz integrate bots with my CRM or ERP?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our solutions seamlessly integrate with popular CRMs and ERPs like Salesforce and HubSpot, automating workflows and data synchronization."
              }
            }
          ]
        })}
      </script>
    </>
  );
}
