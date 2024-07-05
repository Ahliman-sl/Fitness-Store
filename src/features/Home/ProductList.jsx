import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/productSlice";
import ProductListItem from "./ProductListItem";
import getImageForProduct from "../../helpers/getImageForProduct.js";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items).slice(0, 4);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;
  if (productStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (productStatus === "succeeded") {
    content = products.map((product) => (
      <ProductListItem
        key={product.id}
        product={product}
        image={getImageForProduct(product.id)}
      />
    ));
  } else if (productStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="w-full h-max ">
      <div className="flex flex-wrap justify-center p-2 gap-4 mx-auto">
        {content}
      </div>
      <div className="w-full h-max flex items-center justify-center mt-5">
        <Link to="/shop">
          <button className="px-7 py-4 text-slate-50 font-semibold transition duration-300 bg-green-500 hover:bg-green-600 rounded-md">
            All Products
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ProductList;
