import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Card = ({ slug, image, name, price, rating, numReviews }) => {
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
        <Link
          className="text-xl text-blue-600 font-medium underline leading-relaxed"
          to={`/product/${slug}`}
        >
          <p>{name}</p>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <p>
          <strong>${price}</strong>
        </p>
        <br />
        <button className="py-1 px-3 font-medium bg-orange-400 rounded">
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
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
};

export default Card;
