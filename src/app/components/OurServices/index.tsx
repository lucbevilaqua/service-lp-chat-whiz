import Image from "next/image";

export const dynamic = "force-static";

export default function OurServices() {
    return (
        <section className="row mt-5" id="services" aria-labelledby="our-services-title">
            <h2
                id="our-services-title"
                className="display-4 mb-4 text-center fw-bold"
            >
                AI-Powered WhatsApp Bots & Intelligent Automation Services for Business
            </h2>
            <div className="col-12 col-md">
                <Image
                    src="/images/laptop-with-flutter-bot.svg"
                    alt="AI-powered WhatsApp chatbot for business automation"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="rounded mb-3"
                />
                <h3>Creating smart bots</h3>
                <p className="mt-6 lead ff-raleway">
                    We build AI-powered WhatsApp bots and intelligent chatbots for business automation, enabling your company to deliver instant, 24/7 customer support and boost operational efficiency.
                </p>
            </div>
            <div className="col-12 col-md">
                <Image
                    src="/images/social-medias.svg"
                    alt="System integration for chatbots with CRMs and ERPs"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="rounded mb-3"
                />
                <h3>Seamless Integration with CRMs & ERPs</h3>
                <p className="lead ff-raleway">
                    We connect your bots to your company’s internal systems, such as Salesforce, HubSpot, and ERPs, ensuring a seamless and fully automated experience across all platforms.
                </p>
            </div>
            <div className="col-12 col-md">
                <Image
                    src="/images/cellphone-with-flutter-chat.svg"
                    alt="Custom conversation flow for AI chatbots to increase conversions"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="rounded mb-3"
                />
                <h3>Custom Conversation Flows to Boost Engagement</h3>
                <p className="lead ff-raleway">
                    We design strategic conversation flows for your AI chatbots, optimized to engage customers, qualify leads, and increase conversions for your business.
                </p>
            </div>
            <div className="col-12 col-md">
                <Image
                    src="/images/laptop-with-flutter-chat.svg"
                    alt="Continuous monitoring and proactive support for business chatbots"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="rounded mb-3"
                />
                <h3>Continuous Monitoring & Proactive Bot Support</h3>
                <p className="lead ff-raleway">
                    We provide ongoing monitoring and proactive support to ensure your WhatsApp bots and automation solutions are always running smoothly and delivering results.
                </p>
            </div>
        </section>
    );
}
