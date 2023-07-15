import Project from "../components/Project";

export default function Portofolio() {
  const projects = [
    {
      id: 1,
      judul: "Integer Store",
      image: "/wilsonport.jpeg",
      deskripsi:
        "Integer Store adalah marketplace yang menjual produk-produk Apple.",
      link: "https://uts-react-six.vercel.app/",
    },
    {
      id: 2,
      judul: "Boreal Coffee",
      image: "/boreal-coffee-clone.jpeg",
      deskripsi:
        "Saya telah membuat ulang bagian frontend dari aplikasi web resmi Boreal Coffee karena tertarik dengan antarmuka pengguna (UI) yang indah. Ini adalah pengalaman yang sangat baik bagi saya untuk membangun keseluruhan frontend.",
      link: "https://uts-react-six.vercel.app/",
    },
  ];
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}
