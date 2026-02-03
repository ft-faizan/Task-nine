
import thumb from "../assets/lapbanner.png"; 
import { useState } from "react";
function VideoSection() {
     const [mode, setMode] = useState("creator");
  return (
    <section className="w-full bg-black py-28 overflow-hidden">

     
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">

        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Focus on what matters
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Checkout how both end of forms look like for our users
        </p>

        
         <div className="inline-flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">

          <button
            onClick={() => setMode("creator")}
            className={`
            px-4 py-2 rounded-full text-sm font-medium transition
            ${
              mode === "creator"
                ? "bg-white/10 text-white"
                : "text-gray-400"
            }
            `}
          >
            🟠 Creator View
          </button>

          <button
            onClick={() => setMode("user")}
            className={`
            px-4 py-2 rounded-full text-sm font-medium transition
            ${
              mode === "user"
                ? "bg-white/10 text-white"
                : "text-gray-400"
            }
            `}
          >
            🟣 End User View
          </button>

        </div>

      </div>

    
      <div className="relative max-w-7xl mx-auto px-6">

        
        <div
          className="
          relative
          rounded-2xl
          overflow-hidden

          border border-white/15
          bg-white/5
          backdrop-blur-xl

          shadow-2xl
          "
        >

          
          <img
            src={thumb}
            alt="Preview"
            className="w-full h-full object-cover"
          />

         
          <div className="absolute inset-0 bg-black/40" />

          
        </div>

       
     

      </div>

    </section>
  );
}

export default VideoSection;
