
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{title}</h2>

        <div className="card-actions">
          <p className="text-orange-600 font-bold">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
          <button className="  text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
               
              />
            </svg>
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
