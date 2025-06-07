import Image from "next/image";

export default function OurServices() {
    return (
        <section className="row mt-5" id="services" aria-labelledby="our-services-title">
            <h2
                id="our-services-title"
                className="display-4 mb-4 text-center fw-bold"
            >
                Our Services
            </h2>
            <div className="col-12 col-md">
                <Image
                    src="/images/laptop-with-flutter-bot.svg"
                    alt="Illustration of a chatbot"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="rounded mb-3"
                />
                <h3>Creating smart bots</h3>
                <p className="mt-6 lead ff-raleway">
                    We develop customized bots for WhatsApp and other applications, capable of serving your customers quickly and efficiently, 24/7.
                </p>
            </div>
            <div className="col-12 col-md">
                <Image
                    src="/images/cellphone-with-flutter-chat.svg"
                    alt="System integration illustration"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="rounded mb-3"
                />
                <h3>Integration with systems</h3>
                <p className="lead ff-raleway">
                    We connect your bots to your company&apos;s internal systems, such as CRMs and ERPs, ensuring a fluid and automated experience.
                </p>
            </div>
            <div className="col-12 col-md">
                <Image
                    src="/images/laptop-with-chat.svg"
                    alt="Custom conversation flow illustration"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="rounded mb-3"
                />
                <h3>Custom conversation flow</h3>
                <p className="lead ff-raleway">
                    We create strategic conversation flows, optimized to engage your customers and increase conversions.
                </p>
            </div>
            <div className="col-12 col-md">
                <Image
                    src="/images/laptop-with-flutter-chat.svg"
                    alt="Monitoring and support illustration"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="rounded mb-3"
                />
                <h3>Continuous monitoring and support</h3>
                <p className="lead ff-raleway">
                    We provide ongoing support and monitoring to ensure that your bots are always running smoothly.
                </p>
            </div>
        </section>
    );
}
