/* eslint-disable react/prop-types */
function SearchBar({ onSearch }) {
  return (
    <>
      {/*<!-- Component: Rounded basic search input --> */}
      <div className="lg:relative my-6">
        <input
          id="id-s03"
          type="search"
          name="id-s03"
          placeholder="Search here"
          aria-label="Search content"
          onChange={(e) => onSearch(e.target.value)}
          className="peer relative h-10 w-full rounded-2xl border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-orange-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-label="Search icon"
          role="graphics-symbol"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      {/*<!-- End Rounded search input --> */}
    </>
  );
}

export default SearchBar;
