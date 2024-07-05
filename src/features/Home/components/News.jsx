import NewsItem from "./NewsItem";
import newsImage1 from "../../../images/newsImage1.webp";
import newsImage2 from "../../../images/newsImage2.webp";
import newsImage3 from "../../../images/newsImage3.webp";

const newsData = [
  {
    image: newsImage1,
    title: "How to Smoke MonRocks, Cannabis",
    description:
      "We were recently contacted by a world-renowned interior designer as their client required a narrow...",
  },
  {
    image: newsImage2,
    title: "Slim & Sleek: Top 10 Treadmills to fit into Narrow Spaces",
    description:
      "We were recently contacted by a world-renowned interior designer as their client required a narrow...",
  },
  {
    image: newsImage3,
    title: "Tips for caring and maintaining your wood floor",
    description:
      "We were recently contacted by a world-renowned interior designer as their client required a narrow...",
  },
];

const News = () => {
  return (
    <section className="w-full h-max flex flex-col gap-5 lg:flex-row items-center justify-center mt-5 ">
      {newsData.map((item, index) => (
        <NewsItem
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default News;
