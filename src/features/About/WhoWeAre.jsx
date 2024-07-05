import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import hwaBack from "../../images/hwaBack.webp";

function WhoWeAre() {
  const backgroundStyle = {
    backgroundImage: `url(${hwaBack})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    opacity: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="relative min-h-screen bg-gray-100 text-slate-50">
      <div style={backgroundStyle}></div>
      <div className="relative z-10 p-6 container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About FS (Fitness Store)
        </h1>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-slate-200">
            At FS, our mission is to provide the highest quality fitness
            supplements to help you achieve your health and fitness goals. We
            are committed to delivering products that are safe, effective, and
            backed by science.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-slate-200">
            Our vision is to become a leading name in the fitness industry by
            offering a wide range of products that cater to the diverse needs of
            fitness enthusiasts. We strive to inspire and support individuals in
            their journey towards a healthier lifestyle.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Branches</h2>
          <p className="text-lg text-slate-200">
            We have multiple branches across the country, providing convenient
            access to our premium products. Visit us at any of our locations for
            personalized advice and exceptional customer service.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Product Guarantee</h2>
          <p className="text-lg text-slate-200">
            We stand behind the quality of our products. All our supplements
            come with a satisfaction guarantee, ensuring you get the best value
            for your investment. If you’re not satisfied, we offer hassle-free
            returns.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Product Variety</h2>
          <p className="text-lg text-slate-200">
            FS offers a wide variety of supplements, including protein powders,
            pre-workout formulas, vitamins, and more. Each product is carefully
            formulated to meet the highest standards of quality and efficacy.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Health Licenses</h2>
          <p className="text-lg text-slate-200">
            Our products are certified by health authorities, ensuring they meet
            rigorous safety and quality standards. We are dedicated to providing
            supplements that you can trust.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2 text-gray-600" />
            <span className="text-lg text-slate-200">
              Phone: (123) 456-7890
            </span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2 text-gray-600" />
            <span className="text-lg text-slate-200">
              Email: contact@fitnessstore.com
            </span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-600" />
            <span className="text-lg text-slate-200">
              Address: 123 Fitness St, Health City, Fitland
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhoWeAre;
