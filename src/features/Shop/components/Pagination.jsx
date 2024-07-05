/* eslint-disable react/prop-types */
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

function Pagination({ itemsPerPage, totalItems, currentPage, setCurrentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className="mt-6 mb-2"
    >
      <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
        <li>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            aria-label="Previous Page"
            className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
          >
            <FiArrowLeft className="transform hover:rotate-180 transition duration-300" />
            {!isMobile && <span className="order-2">Prev</span>}
          </button>
        </li>
        {!isMobile &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => setCurrentPage(number)}
                className={`h-10 items-center justify-center rounded stroke-slate-700 px-4 text-sm font-medium transition duration-300 ${
                  number === currentPage
                    ? "bg-emerald-500 text-white"
                    : "text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
                }`}
                aria-label={`Goto Page ${number}`}
                aria-current={number === currentPage ? "true" : "false"}
              >
                {number}
              </button>
            </li>
          ))}
        <li>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
            }
            aria-label="Next Page"
            className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
          >
            <FiArrowRight className="transform hover:rotate-180 transition duration-300" />
            {!isMobile && <span>Next</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
