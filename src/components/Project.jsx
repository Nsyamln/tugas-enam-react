import Button from "./Button";

export default function Project({ judul, deskripsi, link, image }) {
  return (
    <div className="py-2">
      <div className="flex  gap-6 px-20">
        <img src={image} width={500} className="rounded-3xl" />
        <section className="">
          <h2 className="text-4xl">{judul}</h2>
          <p className="text-xl text-justify py-2">{deskripsi}</p>
          {/* <Button onClick={link} className="text-xl">
            Lihat
          </Button> */}
          <a href={link}>
            <Button className="bg-gray-100 text-xl rounded-xl px-4 py-2">
              Lihat lebih
            </Button>
          </a>
        </section>
      </div>
    </div>
  );
}
