import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import ProductListItem from "../Home/ProductListItem";
import getImageForProduct from "../../helpers/getImageForProduct";
import Pagination from "./components/Pagination.jsx";
import Loader from "../../ui/Loader.jsx";

function AllProducts() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const filteredItems = useSelector((state) => state.products.filteredItems);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, productStatus]);

  let content;
  if (productStatus === "loading") {
    content = <Loader />;
  } else if (productStatus === "succeeded") {
    const products = filteredItems.length > 0 ? filteredItems : items;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    content = currentItems.map((product) => (
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
    <section className="w-full h-max">
      <div className="flex flex-wrap justify-center p-2 gap-4 mx-auto">
        {content}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={
          filteredItems.length > 0 ? filteredItems.length : items.length
        }
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default AllProducts;
