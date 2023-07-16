import About from "./About";
import Portofolio from "./Portofolio";

export default function Home() {
  const name = "I'm Maulina Inas Nasya";
  return (
    <div>
      <section className="text-center px-5  flex flex-col gap-12 py-60 pb-60 bg-gray-100">
        <h1 className="font-sans text-8xl font-medium">
          Hej, <br />
          {name}
        </h1>
        <p className="text-2xl">
          Saya seorang Web Developer dengan pengalaman dalam mengembangkan
          berbagai jenis aplikasi web
        </p>
      </section>
      <section>
        <h1 className="text-4xl text-center font-medium py-10">Projects</h1>
        <Portofolio />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
}
