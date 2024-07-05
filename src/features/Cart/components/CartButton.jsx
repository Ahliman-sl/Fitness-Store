import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartButton() {
  const cartProductQuantity = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      {/*<!-- Component: Large primary button with badge  --> */}
      <Link to="/cart">
        <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
          <span>Open Cart</span>
          <span className="relative only:-mx-6 items-center justify-center">
            <FaCartArrowDown className="text-xl" />
            {cartProductQuantity ? (
              <span className="absolute -top-2 inline-flex items-center justify-center gap-1 rounded-full bg-pink-500 px-1.5 text-xs text-white">
                {cartProductQuantity}
                <span className="sr-only">new products</span>
              </span>
            ) : null}
          </span>
        </button>
      </Link>
      {/*<!-- End Large primary button with badge  --> */}
    </>
  );
}
