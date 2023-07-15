import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="bg-black text-white">
      <footer className="px-10 ">
        <div className="flex justify-between py-10 gap-5">
          <div>
            <h1 className="text-3xl font-medium">Maulina Inas Nasya</h1>
            <p className="text-xl text-justify py-4">
              Saya seorang Web Developer dengan pengalaman dalam mengembangkan
              berbagai jenis aplikasi web
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-medium">SOCIAL</h1>
            <div className="flex justify-between py-4">
              <FaTwitter color="white" size={30} />
              <GrInstagram color="white" size={30} />
              <FaLinkedinIn color="white" size={30} />
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center text-xl py-4">
          &copy; 2023 Maulina Inas Nasya
        </p>
      </footer>
    </div>
  );
}
