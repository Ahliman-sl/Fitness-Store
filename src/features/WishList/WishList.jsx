/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart } from "../../redux/cartSlice.js";
import { removeFromWishList } from "../../redux/wishListSlice.js";
import empty from "../../images/empty.png";
import getImageForProduct from "../../helpers/getImageForProduct.js";

function WishList({ onClose }) {
  const wishList = useSelector((state) => state.wishList.wlItems);
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative w-80 h-full bg-white shadow-lg p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center">WishList</h2>
        {wishList.length === 0 ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <p className="lg:text-3xl text-gray-800 font-semibold">
              Wishlist is empty
            </p>
            <p className="text-gray-500">Add new some items to wishlisht</p>
            <img src={empty} className="w-[10rem]" />
          </div>
        ) : (
          wishList.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img
                src={getImageForProduct(item.id)}
                alt={item.name}
                className="w-16 h-16 mr-4"
              />
              <div className="flex-1">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
                <button
                  className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </button>
              </div>
              <button
                className="ml-4 text-red-500"
                onClick={() => dispatch(removeFromWishList(item))}
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WishList;
