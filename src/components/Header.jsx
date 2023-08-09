import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 bg-slate-900 text-white">
      <Link
        className="relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-orange-400 sm:text-lg"
        to="/"
      >
        amazon
      </Link>
    </header>
  );
};

export default Header;
