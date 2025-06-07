'use client';

export default function AboutOurBrand() {
  return (
    <section
      className="row p-5 bg-gray-500"
      id="about"
      aria-labelledby="about-brand-title"
    >
      <div className="col-12 col-md text-center align-self-center">
        <h2 id="about-brand-title">More about our brand</h2>
      </div>
      <div className="col-12 col-md">
        <p className="lead ff-raleway">
          We are specialists in communication automation,
          helping companies transform the way they interact
          with their customers. With cutting-edge technology
          and a focus on results, we create solutions that
          simplify processes, increase efficiency and provide
          memorable experiences.
        </p>
      </div>
      <div className="col-12 col-md">
        <p className="lead ff-raleway">
          Our goal is to be the ideal partner for your
          company on its digital transformation journey.
        </p>
      </div>
    </section>
  );
}
