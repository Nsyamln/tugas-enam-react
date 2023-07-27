import { FaWhatsapp } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="bg-black text-white">
      <footer className="px-20 ">
        <div className="flex justify-between py-12 gap-6">
          <div>
            <h1 className="text-3xl font-medium">Maulina Inas Nasya</h1>
            <p className="text-xl text-justify py-8">
              Saya seorang Web Developer dengan pengalaman dalam mengembangkan
              berbagai jenis aplikasi web
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-medium">SOCIAL</h1>
            <div className="flex justify-between py-8">
              <a href="https://wa.me/6285723740462">
                <FaWhatsapp color="white" size={30} />
              </a>
              <a href="https://www.instagram.com/nsymln_/">
                <GrInstagram color="white" size={30} />
              </a>
              <BsGithub color="white" size={30} />
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center text-xl py-6">
          &copy; 2023 Maulina Inas Nasya
        </p>
      </footer>
    </div>
  );
}
