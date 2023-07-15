import { Link, NavLink } from "react-router-dom";
import { pages } from "../main";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-4 w-full">
      <div className="flex items-center justify-between">
        <Link to="/" className="logo">
          <img src="/icons8-female-user-96.png" />
        </Link>
        <p className="text-2xl">Maulina Inas Nasya</p>
      </div>

      <nav className="flex gap-20 text-xl">
        {pages.map((page) => {
          return (
            <NavLink key={page.path} to={page.path}>
              {page.title}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
