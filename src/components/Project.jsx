import Button from "./Button";

export default function Project({ judul, deskripsi, link, image }) {
  return (
    <div className="py-2 px-52  ">
      <div className="flex  gap-6 px-4 py-6 bg-zinc-200 rounded-xl hover:bg-gray-100">
        <div className="bg-white px-14 py-0 rounded-xl ">
          <img src={image} width={200} height={100} className="rounded-3xl" />
        </div>
        <section className="">
          <h2 className="text-4xl">{judul}</h2>
          <p className="text-xl text-justify py-2">{deskripsi}</p>
          <a href={link}>
            <Button className="bg-white text-xl rounded-xl px-4 py-2">
              Lihat lebih
            </Button>
          </a>
        </section>
      </div>
    </div>
  );
}
