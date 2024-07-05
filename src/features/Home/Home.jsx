import homeImage from "../../images/home_img.webp";
import CategoryTabs from "./components/CategoryTabs";
import { GiEmbrassedEnergy, GiPowerLightning } from "react-icons/gi";
import { SiWorldhealthorganization } from "react-icons/si";
import ProductList from "./ProductList.jsx";
import GuaranteeSection from "./components/GuaranteeSection.jsx";
import News from "./components/News.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="homeOverlay">
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 font-prompt">
            <div className="col-span-4 lg:col-span-6 flex flex-col p-10 lg:p-0 gap-5 items-start px-5 justify-center z-10">
              <h1 className="text-5xl 2xl:text-7xl font-semibold text-orange-500 ">
                <span className="font-bold text-green-400">Eat</span> well,
                <span className="font-bold text-green-400">move</span> more,
                <span className="font-bold text-green-400">Live</span> longer.
              </h1>
              <p className="text-slate-50 font-semibold">
                Having balanced nutritionis also very important to keep my body
                in shape and healthy
              </p>
              <Link to="/shop">
                <button className="px-7 py-4 text-slate-50 font-semibold transition duration-300 bg-green-500 hover:bg-green-600 rounded-md">
                  Shop now
                </button>
              </Link>
            </div>
            <div className="col-span-4 lg:col-span-6 z-10">
              <img src={homeImage} className="w-[40rem] h-auto" alt="Home" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5 flex flex-col sm:flex-wrap md:flex-row gap-4 items-center justify-center">
        <CategoryTabs
          icon={<GiEmbrassedEnergy className="text-5xl text-green-400 " />}
          title="Crazy Energy"
          text="But I must explain to you how all this mistaken idea pleasure"
        />
        <CategoryTabs
          icon={<GiPowerLightning className="text-5xl text-green-400 " />}
          title="Maximum power"
          text="But I must explain to you how all this mi denouncing pleasure"
        />
        <CategoryTabs
          icon={
            <SiWorldhealthorganization className="text-5xl text-green-400 " />
          }
          title="Crazy Energy"
          text="But I must explain to you how all this mistaken idea of pleasure"
        />
      </section>
      <ProductList />
      <GuaranteeSection />
      <News />
    </>
  );
}

export default Home;
