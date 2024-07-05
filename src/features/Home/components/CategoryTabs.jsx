/* eslint-disable react/prop-types */
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function CategoryTabs({ icon, title, text }) {
  return (
    <div className="w-[20rem] h-max p-5 bg-[#111111]  flex flex-col gap-2 items-start justify-center">
      {icon}
      <h2 className="text-2xl text-slate-50 font-bold ">{title}</h2>
      <p className="text-slate-200">{text}</p>
      <Link className="w-full flex justify-end" to="/articles">
        <FaArrowAltCircleRight className="text-slate-50 text-4xl hover:scale-[1.1] hover:text-rose-500 cursor-pointer transition duration-300" />
      </Link>
    </div>
  );
}

export default CategoryTabs;
