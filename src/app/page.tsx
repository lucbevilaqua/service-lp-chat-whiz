import Header from "./components/Header";
import Preview from "./components/Preview";
import AboutOurBrand from "./components/AboutOurBrand";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container text-center mt-5">
        <section className="row">
          <div className="col">
            <h1 className="display-XXL">Chat Whiz</h1>
          </div>
        </section>
        <Preview />
      </main>
      <div className="container-fluid">
        <AboutOurBrand />
      </div>
    </>
  );
}
