import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-20 py-4 w-full">
      <div className="flex items-center justify-between">
        <Link to="/" className="logo">
          <img src="/icons8-female-user-96.png" />
        </Link>
        <p className="text-2xl">Maulina Inas Nasya</p>
      </div>

      <nav className="flex gap-20 text-xl ">
        <ul className="flex gap-20 text-xl">
          <li className="hover:font-bold">
            <a href="#home">Home</a>
          </li>
          <li className="hover:font-extrabold">
            <a href="#project">Project</a>
          </li>
          <li className="hover:font-extrabold">
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
