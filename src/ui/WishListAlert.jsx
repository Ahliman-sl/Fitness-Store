import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWishListAlert } from "../redux/wishListSlice";

export default function WishListAlert() {
  const alert = useSelector((state) => state.wishList.alert);
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (alert) {
        const timer = setTimeout(() => {
          dispatch(removeWishListAlert());
        }, 3000);
        return () => clearTimeout(timer);
      }
    },
    [alert, dispatch]
  );

  if (!alert) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div
        className="flex items-start gap-4 rounded border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-500"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          role="graphics-symbol"
          aria-labelledby="title-01 desc-01"
        >
          <title id="title-01">Icon title</title>
          <desc id="desc-01">A more detailed description of the icon</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0118 0z"
          />
        </svg>
        <p>{alert}</p>
      </div>
    </div>
  );
}
