import Image from "next/image";

export default function OurServices() {
    return (
        <section className="row">
            <h2 style={{ marginBottom: 16, fontSize: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200 }}>Our Services</h2>
            <div className="col">
                <Image
                    src="/image-6.png"
                    alt=""
                    width={300}
                    height={300}
                    className="img-fluid"
                    style={{ borderRadius: 16, marginBottom: 16 }}
                />
                <h4>
                    Creating smart bots
                </h4>
                <p>
                    We develop customized bots for WhatsApp and other applications, capable of serving your customers quickly and efficiently, 24/7.
                </p>
            </div>
            <div className="col">
                <Image
                    src="/image-2.png"
                    alt=""
                    width={300}
                    height={300}
                    className="img-fluid"
                    style={{ borderRadius: 16, marginBottom: 16 }}
                />
                <h4>
                    Integration with systems
                </h4>
                <p>
                    We connect your bots to your company's internal systems, such as CRMs and ERPs, ensuring a fluid and automated experience.
                </p>
            </div>
            <div className="col">
                <Image
                    src="/image-3.png"
                    alt=""
                    width={300}
                    height={300}
                    className="img-fluid"
                    style={{ borderRadius: 16, marginBottom: 16 }}
                />
                <h4>
                    Custom conversation flow
                </h4>
                <p>
                    We create strategic conversation flows, optimized to engage your customers and increase conversions.
                </p>
            </div>
            <div className="col">
                <Image
                    src="/image-4.png"
                    alt=""
                    width={300}
                    height={300}
                    className="img-fluid"
                    style={{ borderRadius: 16, marginBottom: 16 }}
                />
                <h4>
                    Continuous monitoring and support
                </h4>
                <p>
                    We provide ongoing support and monitoring to ensure that your bots are always running smoothly.
                </p>
            </div>
        </section>
    );
}