import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container text-center">
        <section className="row">
          <div className="col">
            <h1 className="display-1">Chat Whiz</h1>
          </div>
        </section>

        <section className="row">
          <div className="col align-self-start">
            <h1>Automating connections, driving results</h1>
            <p>
              Explore the frontiers of tomorrow with us,
              where technology and innovation meet to
              make the impossible a reality. Our mission
              is to redefine paradigms and lead the way
              to a bright, connected digital future.
            </p>
          </div>
          <div className="col">
            <Image
              src="/image-1.png"
              alt="Chat Whiz Logo"
              width={300}
              height={300}
              className="img-fluid"
            />
          </div>
        </section>

        <OurServices />
      </div>

      <div className="container-fluid">
        <section className={`${styles.bookFreeConsultingContainer} row`}>
          <div className="col">
            <h2>Book a free consultation</h2>
            <p>
              Transform the way you interact with technology by scheduling your
              consultation today. Discover innovative solutions that go beyond the
              conventional and take your projects to the next level.
            </p>

            <button type="button" className="btn btn-primary">Book Now</button>
          </div>
        </section>

        <section className="row">
          <div className="col">
            <h2>More about our brand</h2>
          </div>
          <div className="col">
            <p>
              We are specialists in communication automation,
              helping companies transform the way they interact
              with their customers. With cutting-edge technology
              and a focus on results, we create solutions that
              simplify processes, increase efficiency and provide
              memorable experiences.
            </p>
          </div>
          <div className="col">
            <p>
              Our goal is to be the ideal partner for your
              company on its digital transformation journey.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
