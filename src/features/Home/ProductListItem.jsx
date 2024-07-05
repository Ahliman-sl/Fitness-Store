/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addToWishList, removeFromWishList } from "../../redux/wishListSlice";

function ProductListItem({ product, image }) {
  const { id, name, price } = product;
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.wlItems);

  function handleAddToCart() {
    dispatch(addToCart(product));
    console.log("Product added to cart", product);
  }

  function handleAddToWishList() {
    dispatch(addToWishList(product));
    console.log("Product added to wishlist", product);
  }

  function handleRemoveFromWishList() {
    dispatch(removeFromWishList({ id, name }));
    console.log("Product removed from wishlist", id);
  }

  const isWishListed = wishList.some((item) => item.id === id);

  return (
    <div
      className={`w-[18rem] h-[25rem] bg-white shadow-lg border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
    >
      <div className="w-full h-[48%]  flex items-center justify-center bg-gray-100">
        <img
          src={image}
          alt="Product"
          className="w-[10rem] h-[10rem] object-cover"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-lg font-semibold text-gray-800 mb-2">{name}</p>
        <p className="text-2xl font-bold text-gray-900 mb-4">${price}</p>
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} className="text-yellow-500 w-6 h-6" />
          ))}
          <button
            onClick={
              isWishListed ? handleRemoveFromWishList : handleAddToWishList
            }
            className="ml-2 text-gray-500 hover:text-gray-700 transition duration-300"
          >
            {isWishListed ? (
              <MdOutlineBookmarkRemove className="w-6 h-6" />
            ) : (
              <MdOutlineBookmarkAdd className="w-6 h-6" />
            )}
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-700 transition duration-300 text-white font-semibold rounded-full"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductListItem;
