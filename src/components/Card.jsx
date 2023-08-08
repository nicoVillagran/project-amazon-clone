const Card = ({ slug, image, name, price }) => {
  return (
    <figure
      className="flex sm:flex-col justify-between bg-white rounded-md"
      key={slug}
    >
      <a href={`/product/${slug}`}>
        <img
          className="w-48 py-10 rounded-t-md object-cover sm:w-auto"
          src={image}
          alt={name}
        />
      </a>
      <figcaption className="flex flex-col justify-center p-5">
        <a className="text-xl hover:underline" href={`/product/${slug}`}>
          <p>{name}</p>
        </a>
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

export default Card;
