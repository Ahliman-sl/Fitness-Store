import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsItem = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden p-5 sm:p-0 sm:w-[40rem] sm:h-[30rem] lg:w-[20rem] lg:h-[30rem]">
      <img src={image} alt={title} className="w-full h-[15rem] object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to="/articles"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
