import Project from "../components/Project";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
export default function Home() {
  const projects = [
    {
      id: 1,
      judul: "Integer Store",
      image: "/icons8-laptop-100.png",
      deskripsi:
        "Integer Store adalah marketplace yang menjual produk-produk Apple.",
      link: "https://uts-react-six.vercel.app/",
    },
    {
      id: 2,
      judul: "Integer Store",
      image: "/icons8-laptop-100.png",
      deskripsi:
        "Integer Store adalah marketplace yang menjual produk-produk Apple.",
      link: "https://uts-react-six.vercel.app/",
    },
    {
      id: 3,
      judul: "Integer Store",
      image: "/icons8-laptop-100.png",
      deskripsi:
        "Integer Store adalah marketplace yang menjual produk-produk Apple.",
      link: "https://uts-react-six.vercel.app/",
    },
  ];
  const name = "I'm Maulina Inas Nasya";
  return (
    <div>
      <section
        id="home"
        className="text-center px-5 items-center flex flex-col gap-12 py-40 pb-40 bg-gray-100"
      >
        <img
          className="rounded-full "
          width={300}
          src="/profile.jpeg"
          alt="my photos"
        />
        <h1 className="font-sans text-8xl font-medium">
          Hej, <br />
          {name}
        </h1>
        <p className="text-2xl">
          Saya seorang Web Developer dengan pengalaman dalam mengembangkan
          berbagai jenis aplikasi web
        </p>
      </section>
      <section className="pb-12">
        <h1 id="project" className="text-4xl text-center font-medium py-10">
          Projects
        </h1>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
      <section>
        <div id="about" className="px-20 ">
          <div className="py-10 pb-10">
            <h1 className="text-4xl text-center font-medium ">Tentang Saya</h1>
            <p className="text-2xl text-center py-6">
              Di sini Anda akan menemukan informasi lebih lanjut tentang saya,
              apa yang saya lakukan, dan keterampilan saya saat ini terutama
              dalam hal pemrograman dan teknologi.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <h2 className="text-3xl  font-semibold pb-6">
                Kenali saya lebih jauh!
              </h2>
              <p className="text-2xl text-justify">
                Saya seorang Frontend Web Developer yang membangun bagian
                Front-end dari Website dan Aplikasi Web yang mengarah pada
                kesuksesan produk secara keseluruhan. Lihat beberapa hasil kerja
                saya di bagian Proyek.
              </p>
              <p className="text-2xl text-justify  ">
                Saya juga suka berbagi konten terkait hal-hal yang telah saya
                pelajari selama bertahun-tahun dalam pengembangan Web sehingga
                dapat membantu anggota komunitas pengembang lainnya. Silakan
                terhubung atau mengikuti saya di <a href="/">LinkedIn</a> di
                mana saya memposting konten berguna terkait pengembangan Web dan
                pemrograman.
              </p>
              <p className="text-2xl text-justify  pb-10">
                Saya terbuka untuk kesempatan kerja di mana saya dapat
                berkontribusi, belajar, dan berkembang. Jika Anda memiliki
                kesempatan yang baik yang sesuai dengan keterampilan dan
                pengalaman saya, jangan ragu untuk menghubungi saya.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">Keahlian</h2>
            <div className="text-2xl flex gap-2 flex-wrap py-8">
              <div className="bg-gray-300 rounded-xl px-8 py-3 flex justify-between gap-4 items-center">
                <DiJavascript1 size={52} />
                Javascript
              </div>
              <div className="bg-gray-300 rounded-xl px-6 py-3 flex justify-between gap-4 items-center">
                <BsGithub size={48} />
                GIT & GitHub
              </div>
              <div className="bg-gray-300 rounded-xl px-8 py-3 flex justify-between gap-4 items-center">
                <FaReact size={48} />
                ReactJS
              </div>
              <div className="bg-gray-300 rounded-xl px-10 py-3 flex justify-between gap-4 items-center">
                <FaHtml5 size={50} />
                HTML
              </div>
              <div className="bg-gray-300 rounded-xl px-16 py-3 flex justify-between gap-4 items-center">
                <FaCss3 size={50} />
                CSS
              </div>
              <div className="bg-gray-300 rounded-xl px-8 py-3 flex justify-between gap-4 items-center">
                <SiMysql size={52} />
                MySQL
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
