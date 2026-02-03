

import bigImage from "../assets/list-of-media.png";
import notifyImg from "../assets/works.png";
import secureImg from "../assets/bar-code-scan.png";

function AdvancedFeatures() {
  return (
    <section className="w-full bg-black py-28">
      <div className="  w-10/12 mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] relative">

          
          <div className="flex flex-col lg:pr-10">

           
            <div className="flex flex-col pb-10">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-5">
                Timely alerts &amp; sync ups
              </h3>
              <p className="text-gray-500 text-sm  lg:text-lg leading-relaxed max-w-sm mb-6">
                Pick winning stocks confidently with 130+ filters or
                create your own goal-based screens.
              </p>

              
              <div className="w-full  rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={notifyImg}
                  alt="Notification"
                  className="w-full block"
                />
              </div>
            </div>

          
            <div className="w-full border-t border-dashed border-white/15 my-2" />

            
            <div className="flex flex-col pt-10">
              <h3 className="text-2xl sm:text-3xl  lg:text-5xl font-bold text-white mb-5">
                Encrypted integrations across
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed lg:text-lg max-w-sm mb-6">
                Pick winning stocks confidently with 130+ filters or
                create your own goal-based screens.
              </p>

              
              <div className="w-full  rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={secureImg}
                  alt="Security"
                  className="w-full block"
                />
              </div>
            </div>
          </div>

          
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px border-l border-dashed border-white/15" />

          
          <div className="relative flex items-start justify-center lg:pl-10 mt-12 lg:mt-0">

           
            <div className="w-full flex flex-col">
              <h3 className="text-2xl sm:text-3xl  lg:text-5xl font-bold text-white mb-5 ">
                AI suggested optimisation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed lg:text-lg max-w-sm mb-6">
                Pick winning stocks confidently with 130+ filters or
                create your own goal-based screens.
              </p>

            
              <div className="relative flex justify-center">

                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full pointer-events-none blur-3xl"
                  style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.2) 0%, transparent 70%)" }}
                />

              
                <img
                  src={bigImage}
                  alt="AI Dashboard"
                  className="relative z-10 w-full  rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdvancedFeatures;