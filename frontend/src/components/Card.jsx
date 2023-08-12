import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ slug, image, name, price }) => {
  return (
    <figure
      className="flex sm:flex-col justify-between bg-white rounded-md"
      key={slug}
    >
      <Link to={`/product/${slug}`}>
        <img
          className="w-48 py-10 rounded-t-md object-cover sm:w-auto"
          src={image}
          alt={name}
        />
      </Link>
      <figcaption className="flex flex-col justify-center p-5">
        <Link className="text-xl hover:underline" to={`/product/${slug}`}>
          <p>{name}</p>
        </Link>
        <p>
          <strong>${price}</strong>
        </p>
        <br />
        <button className="py-1 px-3 font-medium bg-orange-400 rounded-full">
          Add to card
        </button>
      </figcaption>
    </figure>
  );
};

Card.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
