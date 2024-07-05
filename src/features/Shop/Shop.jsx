import SearchBar from "../../ui/SearchBar";
import CategoryCheckboxes from "./components/CategoryCheckboxes";
import ContactUs from "../../ui/ContactUs.jsx";
import AllProducts from "./AllProducts.jsx";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../redux/productSlice.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState([]);

  function handleSearch(query) {
    dispatch(filterProducts({ query, categories: selectedCategories }));
  }

  function handleCategoryChange(category, isChecked) {
    const newSelectedCategories = isChecked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);
    setSelectedCategories(newSelectedCategories);
    dispatch(filterProducts({ query: "", categories: newSelectedCategories }));
  }

  return (
    <section className="w-full h-max bg-zinc-100 ">
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3 px-5">
            <SearchBar onSearch={handleSearch} />
            <div className="w-full h-max flex flex-col gap-2 bg-white p-5 rounded-lg shadow-lg">
              <p>Product Category</p>
              <div className="w-full h-max flex flex-col gap-2">
                <CategoryCheckboxes
                  categoryName="Proteins"
                  id="checkbox-proteins"
                  onChange={handleCategoryChange}
                />
                <CategoryCheckboxes
                  categoryName="Creatine"
                  id="checkbox-creatine"
                  onChange={handleCategoryChange}
                />
                <CategoryCheckboxes
                  categoryName="Pre-Workout"
                  id="checkbox-pre-workout"
                  onChange={handleCategoryChange}
                />
                <CategoryCheckboxes
                  categoryName="Multi-Vitamins"
                  id="checkbox-multi-vitamins"
                  onChange={handleCategoryChange}
                />
              </div>
            </div>
            <ContactUs />
          </div>
          <div className="col-span-4 lg:col-span-9">
            <div className="mb-4">
              <Link to="/" className="text-gray-800 hover:underline">
                Home
              </Link>{" "}
              &gt; <span className="font-semibold">Your Shopping Cart</span>
            </div>
            <AllProducts />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
