

import realtime from "../assets/icons-1.png";
import report from "../assets/icons-2.png";
import alert from "../assets/icons-3.png";

const features = [
  {
    icon: realtime,
    title: "Real-Time Tracking",
    desc: "Monitor usage as it happens to stay updated with the latest data.",
  },
  {
    icon: report,
    title: "Detailed Reporting",
    desc: "Generate in-depth reports that provide insights into usage patterns and trends.",
  },
  {
    icon: alert,
    title: "Customizable Alerts",
    desc: "Set up notifications for specific usage thresholds or unusual activity.",
  },
];

function FeatureCards() {
  return (
    <section className="w-full bg-black py-24">
      <div className=" w-11/12 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 relative">

          {features.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start text-left px-8 py-6"
            >
             
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-0 h-full w-px border-l border-dashed border-white/15" />
              )}

             
              <div
                className="absolute top-4 left-6 w-35 h-35  rounded-full blur-xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)" }}
              />

              
              <div className="relative z-10 mb-5 w-11 h-11 lg:w-15 lg:h-15 flex items-center justify-center rounded-lg border border-green-500/40 bg-green-500/8">
                <img
                  src={item.icon}
                  alt=""
                  className="w-5 h-5 lg:w-10 lg:h-10   object-contain"
                  style={{ filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(90deg)" }}
                />
              </div>

            
              <h3 className="relative z-10 text-white text-base font-semibold mb-2 lg:text-4xl">
                {item.title}
              </h3>

              
              <p className="relative z-10 text-gray-500 text-sm leading-relaxed lg:text-2xl">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeatureCards;