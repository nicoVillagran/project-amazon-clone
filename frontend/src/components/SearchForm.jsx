import PropTypes from "prop-types";
const SearchForm = ({ handleModal }) => {
  return (
    <form className="flex">
      <input
        className="py-1 pl-2 text-slate-900 rounded-s border border-orange-400 border-r-0 outline-none"
        onClick={handleModal}
        type="search"
        name="search"
        placeholder="Search products"
      />
      <button
        className="px-2 bg-orange-400 rounded-e text-slate-950"
        type="submit"
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  handleModal: PropTypes.func.isRequired,
};
