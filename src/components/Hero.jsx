import Orb from "../components/reactbits/Orb";
import SplashCursor from "../components/reactbits/SplashCursor";

const Hero = () => {
  return (
    <div className="relative py-16 px-4 sm:px-10 bg-primary1 bg-radial-[at_50%_110%] from-btnprimary1 via-btnprimary1/50 to-primary1">
      {/* <SplashCursor className="hidden lg:flex" /> */}
      {/* Content */}
      <div className="flex flex-col items-center justify-center mt-6 sm:mt-10 space-y-4 sm:space-y-6">
        <div
          className="text-text1 text-lg sm:text-xl text-center"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          Leverage on Automation
        </div>

        <div className="text-primary2 text-4xl sm:text-6xl flex flex-col items-center gap-2 font-semibold text-center">
          <span
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
          >
            AI Models for
          </span>
          <span
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
          >
            Business Solutions
          </span>
        </div>

        <div className="text-primary2 text-base sm:text-xl flex flex-col items-center text-center">
          <span data-aos="fade-up" data-aos-duration="1000">
            Leverage the power of AI to automate, analyze, and optimize your
            workflows.
          </span>
          <span data-aos="fade-up" data-aos-duration="1000">
            Our specialized models are designed to fit different business needs.
          </span>
        </div>

        {/* Button with Orb inside */}
        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-primary2 text-btntext1 rounded-lg hover:cursor-pointer font-semibold flex items-center gap-2 text-lg sm:text-xl">
            Get Started Now
            <div className="relative w-5 sm:w-6 h-5 sm:h-6">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
