import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchForm from "./SearchForm";

const Header = ({ handleModal }) => {
  return (
    <>
      <header className="flex items-center justify-between fixed top-0 left-0 z-30 p-3 w-full bg-slate-900 text-white">
        <div className="flex items-center gap-x-5">
          <Link
            className="relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-orange-400 sm:text-2xl sm:font-bold text-xl font-semibold"
            to="/"
          >
            amazona
          </Link>

          <SearchForm handleModal={handleModal} />
        </div>

        <ul className="flex gap-x-5 text-gray-400">
          <li>
            <a href="/">Cart</a>
          </li>
          <li>
            <button>Basir</button>
          </li>
          <li>
            <button>Admin</button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
Header.propTypes = {
  handleModal: PropTypes.func.isRequired,
};
