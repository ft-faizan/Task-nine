import bg from "../assets/banner-avater.png";
import dash from "../assets/main-dashboard.png";
import SplitText from "../Components/SplitText.jsx";
import LogoSection from "../components/LogoSection.jsx";
import dashboard from "../assets/manage-dashboard.png";
import FeatureCards from "../components/FeatureCards.jsx";
import AdvancedFeatures from "../Components/AdvancedFeatures.jsx";
import TrackSection from "../components/TrackSection.jsx";
import VideoSection from "../components/VideoSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CompareSection from "../components/CompareSection.jsx";
import StatsSection from "../components/StatsSection";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import FooterSection from "../components/FooterSection";
import FloatingLines from "../components/FloatingLines.jsx";
import Nav from '../Components/Nav.jsx';
function FirstDiv() {
  return (
    <>
              <Nav />

      <div  id="Home" className=" relative w-full min-h-screen bg-black  flex justify-center items-center flex-col  ">
         {/* <Nav /> */}
        {/* <img src={bg} className=" w-full h-full relative  " /> */}
        <div id="Home" className=" w-full h-[150vh] relative  shadow-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-5 after:bg-green-500/30 after:blur-md ">
          <FloatingLines
            linesGradient={["#00884A", "#050505", "#012811"]}
            animationSpeed={0.8}
            interactive
            bendRadius={10.5}
            bendStrength={1.3}
            mouseDamping={0.18}
            parallax
            parallaxStrength={0.1}
          />
        </div>
        {/* first half st*/}
        <div className="w-full min-h-screen absolute top-0 left-0 flex flex-col justify-center items-center pt-20  ">
          {/* btn st*/}

          <div
            className="
    inline-flex flex-wrap items-center justify-center
    gap-1.5 sm:gap-2 md:gap-3

    px-3 py-2
    sm:px-4 sm:py-2.5
    md:px-6 md:py-3
    lg:px-8 lg:py-4

    text-sm
    sm:text-base
    md:text-lg
    lg:text-xl

    font-semibold text-white

    bg-white/10
    border border-green-100
    rounded-lg sm:rounded-xl

    backdrop-blur-md
    shadow-lg shadow-black/20

    hover:bg-white/20
    transition
    cursor-pointer
  "
          >
            <span>Raised $1.5M Funding</span>

            <span className="text-gray-300 hidden sm:inline">·</span>

            <span className="text-gray-300">Read More →</span>
          </div>

          {/* btn end */}
          {/* slpeting text animation st */}

          <div className=" md:max-w-3xl lg:max-w-6xl  min-h-[30vh] p-5 flex justify-center items-center  ">
            <SplitText
              text="Manage your sales and analytics at one place"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight font-poppins"
              delay={60}
              duration={1.4}
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>
          {/* slpeting text animation ed*/}
          {/* p div st */}
          <div className=" min-h-[10vh] flex justify-center items-center max-w-xl lg:max-w-3xl px-4 text-center ">
            <p className=" text-gray-300  mx-auto text-sm sm:text-base lg:text-2xl">
              Track performance, manage subscriptions, and grow your business
              with our modern analytics platform.
            </p>
          </div>
          {/* p div ed */}
          {/* button div st */}
          <div className="min-h-[10vh] flex flex-col sm:flex-row gap-4 justify-center max-w-xl px-4 mt-10  items-center ">
            <button className="px-6 py-2 bg-white lg:text-3xl text-[gray] border-[5px] border-gray-200 rounded-lg font-medium hover:bg-gray-200 transition">
              Buy Template
            </button>

            <button
              className="
              px-7 py-3
              lg:text-3xl
  text-white
  rounded-lg
  font-medium

  bg-white/5
  backdrop-blur-md

  border border-gray-400/60

  shadow-md shadow-green-500/20

  hover:bg-white/10
  hover:border-green-400
  hover:shadow-green-400/40

  transition-all duration-300
  "
            >
              Book Demo
            </button>
          </div>

          {/* button div ed */}
        </div>
        {/* first half ed */}
        {/* second half st */}
        <div className="  w-full min-h-screen absolute top-230 left-0 flex flex-col justify-center items-center p-5 ">
          <div className=" flex justify-center items-center">
            <img
              src={dash}
              alt="Dashboard"
              className="w-10/12 rounded-xl shadow-2xl"
            />
          </div>
          {/* corasul div st */}

          <div className="w-full rounded-3xl min-h-[10vh] mt-20 shadow-[0_-100px_25px_rgba(0,0,0,0.6)] ">
            <LogoSection />
          </div>
          {/* corasul div ed */}
          {/* last div st underfirst di  */}
          <section className="w-full bg-black py-24 overflow-hidden">
            <div
              className="
        w-full
         mx-auto
          px-10
          
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-20

        items-center
        "
            >
              <div className="text-white space-y-6 lg:pl-15">
                <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold leading-tight ">
                  Keep track of <br /> all usage
                </h2>

                <p className="text-gray-400 max-w-md leading-relaxed">
                  Tracking all usages for efficient management and comprehensive
                  oversight.
                </p>

                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    Comprehensive Usage Monitoring
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    Efficient Management
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    Enhanced Oversight
                  </li>
                </ul>

                <button
                  className="
            mt-6
            px-6 py-3
            rounded-lg
            text-white
            font-medium

            bg-white/5
            backdrop-blur-md
            border border-white/15

            hover:bg-white/10
            transition-all duration-300

            flex items-center gap-2
            "
                >
                  Go to Watchlist →
                </button>
              </div>

              <div className="relative flex md:justify-center lg:justify-start items-center">
                <div
                  className="
            absolute
            inset-0
            bg-green-500/20
            blur-3xl
            rounded-full
            "
                />

                <img
                  src={dashboard}
                  alt="Usage Dashboard"
                  className="
            relative
            w-full
            max-w-md sm:max-w-lg lg:max-w-xl

            rounded-2xl
            shadow-2xl
            border border-white/10
            "
                />
              </div>
            </div>
          </section>
          {/* last div ed under first di */}
          <FeatureCards />
           <div className="w-full" id="Features">
          <AdvancedFeatures />
          </div>
          <TrackSection />
          <VideoSection />
          <Testimonials />
          <CompareSection />
          <StatsSection />
          <div className="w-full" id="Blogs">
          <BlogSection />
          </div>
          <FAQSection />
           <div className="w-full" id="Contact">
          <FooterSection />
          </div>
        </div>
        {/* second half ed */}
      </div>
    </>
  );
}
export default FirstDiv;
