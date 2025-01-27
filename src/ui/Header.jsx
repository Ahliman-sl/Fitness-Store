import { useState, useEffect, useRef } from "react";
import CartButton from "../features/Cart/components/CartButton";
import { useMediaQuery } from "react-responsive";
import { GiMuscleUp } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import WishList from "../features/WishList/WishList";
import Athlets from "../features/Athlets/Athlets";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isWishListOpen, setIsWishListOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsToggleOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    setIsToggleOpen(false);
  }, [location]);

  return (
    <>
      <header className="border-b-1 fixed z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
            ref={menuRef}
          >
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="relative flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/shop"
                >
                  <span>All shops</span>
                  <span className="absolute top-5 right-4 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                    - 50%
                  </span>
                </Link>
              </li>

              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4  transition-colors duration-300 hover:text-orange-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/articles"
                >
                  <span>Articles</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>For Athlets</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  to="/about"
                >
                  <span>Who WE are?</span>
                </Link>
              </li>
              {isMobile && (
                <>
                  <li role="none" className="flex items-stretch">
                    <FaBookmark
                      className="text-2xl wishlist-icon cursor-pointer mx-auto my-4"
                      onClick={() => setIsWishListOpen(!isWishListOpen)}
                    />
                  </li>
                  <li role="none" className="flex items-stretch">
                    <div className="mx-auto my-4">
                      <CartButton />
                    </div>
                  </li>
                </>
              )}
            </ul>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            <div className="flex items-center justify-center">
              <Link
                id="WindUI"
                aria-label="WindUI logo"
                aria-current="page"
                className="flex items-center gap-2 whitespace-nowrap py-3 text-3xl focus:outline-none lg:flex-1"
                to="/"
              >
                <GiMuscleUp className="text-7xl" />
                {isMobile ? "FS" : "Fitness Store"}
              </Link>
            </div>
            {!isMobile && (
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <FaBookmark
                    className="text-2xl wishlist-icon cursor-pointer"
                    onClick={() => setIsWishListOpen(!isWishListOpen)}
                  />
                </div>
                <div className="relative">
                  <CartButton />
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
      {isWishListOpen && <WishList onClose={() => setIsWishListOpen(false)} />}
      <Athlets isShowing={isModalOpen} setIsShowing={setIsModalOpen} />
    </>
  );
}
