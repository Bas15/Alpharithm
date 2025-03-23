import { slidesData } from "../data/constant";

const Slides = ({ activeTab }) => {
  const slide = slidesData[activeTab];

  return (
    <div
      className="flex justify-center mt-6 px-4 md:px-6"
      data-aos="fade-in"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000"
    >
      <div className="bg-primary3 rounded-xl p-6 flex flex-col md:flex-row max-w-5xl w-full items-center gap-6 md:gap-10">
      {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:order-2">
          <img
            src={slide.image}
            alt={slide.category}
            className="rounded-lg object-cover w-full h-52 md:h-72 lg:h-80"
          />
        </div>  {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
          <p className="text-lg font-medium text-text2">{slide.category}</p>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary1">
            {slide.title}
          </h2>
          <button className="mt-4 px-4 py-2 bg-btnprimary1 font-medium text-white rounded-md hover:bg-primary1 cursor-pointer transition-all duration-300">
            Learn More
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Slides;
