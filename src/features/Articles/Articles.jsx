import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import getImageForProduct from "../../helpers/getImageForProduct.js";

const articles = [
  {
    id: "1",
    title: "Protein Powders: The Essential Supplement",
    content:
      "Protein powders are an essential supplement for those looking to build muscle and recover quickly after workouts. They provide the necessary protein that our bodies need to repair and grow. Extended information: Protein powders come in various forms, including whey, casein, soy, and plant-based options, catering to different dietary needs.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: "2",
    title: "Creatine: Boost Your Performance",
    content:
      "Creatine is one of the most researched and effective supplements for enhancing athletic performance. It helps in increasing muscle mass, strength, and overall exercise performance. Extended information: Creatine monohydrate is the most common form, and it's widely used by athletes and bodybuilders.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: "3",
    title: "BCAAs: Essential Amino Acids for Recovery",
    content:
      "Branched-Chain Amino Acids (BCAAs) are crucial for muscle recovery and reducing muscle soreness. They also help in maintaining muscle mass during periods of caloric deficit. Extended information: BCAAs include leucine, isoleucine, and valine, which are essential for protein synthesis and muscle repair.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: "4",
    title: "Pre-Workout Supplements: Increase Energy",
    content:
      "Pre-workout supplements are designed to boost your energy, focus, and endurance during workouts. They usually contain ingredients like caffeine, beta-alanine, and nitric oxide boosters. Extended information: These supplements help improve performance by increasing blood flow and energy levels.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: "5",
    title: "Multivitamins: Comprehensive Nutrient Support",
    content:
      "Multivitamins are an excellent way to ensure that you are getting all the essential vitamins and minerals your body needs for optimal health and performance. Extended information: Multivitamins can help fill nutritional gaps in your diet and support overall health.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: "6",
    title: "Omega-3 Fatty Acids: Essential for Heart Health",
    content:
      "Omega-3 fatty acids are crucial for heart health and reducing inflammation in the body. They can also aid in improving brain function and joint health. Extended information: Omega-3s are found in fatty fish, flaxseeds, and walnuts, and are vital for cardiovascular health.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
];

function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleExpand = (article) => {
    setSelectedArticle(article);
  };

  const handleClose = () => {
    setSelectedArticle(null);
  };

  // Modal penceresinin dışına tıklama olayını yakalamak için kullanılır
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal-overlay") {
        handleClose();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <section className="p-6 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Fitness Supplements Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => handleExpand(article)}
            >
              <img
                src={getImageForProduct(article.id)}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-700">
                  {article.content.slice(0, 80)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={handleClose}
            >
              <AiOutlineClose size={24} />
            </button>
            <img
              src={getImageForProduct(selectedArticle.id)}
              alt={selectedArticle.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">
                {selectedArticle.title}
              </h2>
              <p className="text-gray-700">{selectedArticle.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Articles;
