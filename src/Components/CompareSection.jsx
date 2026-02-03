import { FaCheck, FaTimes } from "react-icons/fa";
import { SiTypeform } from "react-icons/si";
import { IoVideocam } from "react-icons/io5";

const features = [
  "Dynamic copies for questions",
  "Auto-sequence of questions",
  "Followup questions on the basis",
  "AI thank you and start screen",
  "AI report generation with all important",
];



function CompareSection() {
 
  const headerH = 56; // px
  const rowH = 52; // px

  return (
    <section className="w-full bg-black py-28 overflow-hidden">
     
      <div className="text-center mb-16 px-6">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
          Focus on what matters
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <div className="min-w-[880px]">
        
          <div
            className="relative rounded-2xl border border-green-900/50 overflow-visible"
            style={{
              background: "linear-gradient(180deg, #0a1f0e 0%, #071510 100%)",
            }}
          >
            
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr]">
              <div className="py-4">
                <div style={{ height: headerH }} />

                {features.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center px-6"
                    style={{ height: rowH }}
                  >
                    <p className="text-gray-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <div className="relative py-4 mt-1 flex justify-center">
                <div
                  className="absolute rounded-xl shadow-xl shadow-green-500/20 z-10 flex flex-col  lg:h-85  items-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #166534 0%, #14532d 60%, #052e16 100%)",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                >
                

                  <div
                    className="flex items-center justify-center"
                    style={{ height: headerH + 28 }}
                  >
                    <h3 className="text-white font-semibold text-sm">
                      Metaforms
                    </h3>
                  </div>

                  {features.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center"
                      style={{ height: rowH }}
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <FaCheck
                          className="text-white"
                          style={{ fontSize: 11 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {[0, 1, 2].map((col) => (
                <div key={col} className="py-4">
                  <div
                    className="flex items-center justify-center"
                    style={{ height: headerH }}
                  >
                    <div className="flex items-center gap-1.5 text-white">
                      <IoVideocam  style={{ fontSize: 13 }} />
                      <span className="text-xs font-medium">Typeform</span>
                    </div>
                  </div>

                  {features.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center"
                      style={{ height: rowH }}
                    >
                      <FaTimes
                        className="text-green-800/70"
                        style={{ fontSize: 13 }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

          
            <div className="absolute inset-0 pointer-events-none">
              {features.map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-green-900/40"
                  style={{ top: 16 + headerH + rowH * i }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompareSection;
