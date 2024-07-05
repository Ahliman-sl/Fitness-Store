import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import getImageForProduct from "../../helpers/getImageForProduct.js";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector((state) => state.cart.subTotal);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-4 md:p-8 bg-gray-900 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Your Shopping Cart
      </h1>
      <div className="mb-4">
        <a href="/" className="text-gray-400 hover:underline">
          Home
        </a>{" "}
        &gt; <span>Your Shopping Cart</span>
      </div>
      <div className="w-full">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 mb-4 rounded-lg"
            >
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src={getImageForProduct(item.id)}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg md:text-xl font-semibold">
                    {item.name}
                  </h2>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="px-2 py-1 bg-gray-700 text-white rounded-l-lg"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-800 text-white">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="px-2 py-1 bg-gray-700 text-white rounded-r-lg"
                >
                  +
                </button>
                <span className="ml-4 text-lg font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 p-4 bg-gray-800 rounded-lg">
        <div className="mb-4 md:mb-0">
          <Link
            to="/shop"
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-semibold rounded-lg"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
        <div className="text-center md:text-right">
          <p className="text-lg">Subtotal</p>
          <p className="text-2xl font-bold">${subTotal.toFixed(2)}</p>
          <p className="text-gray-400">
            Taxes and shipping calculated at checkout
          </p>
          <Link to="/checkout">
            <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-semibold rounded-lg">
              CHECK OUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
