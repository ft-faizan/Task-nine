import productHunt from "../assets/Ranking position.png"; 
import laurel from "../assets/pro-certificate.png"; 

function StatsSection() {
  return (
    <section className="w-full bg-black py-28">

      <div
        className="
        max-w-7xl mx-auto px-6

        grid grid-cols-1
        lg:grid-cols-2

        gap-12
        items-center
        "
      >

        <div className="flex justify-center">

          <div
            className="
            relative
            w-full max-w-md

            rounded-2xl
            overflow-hidden

            bg-gradient-to-br
            from-green-900
            via-green-800
            to-green-950

            shadow-2xl
            shadow-green-500/30
            border border-green-400/20
            "
          >

      
            <div className="absolute inset-0 bg-green-500/20 blur-2xl" />

            <div className="relative p-8 text-center text-white">

              <div className="flex justify-center mb-6">
                <img
                  src={productHunt}
                  alt="Product Hunt"
                  className="h-12 object-contain"
                />
              </div>

             

              <div className="flex items-center justify-center gap-4 mb-6">

                <img
                  src={laurel}
                  alt="Left Laurel"
                  className="h-20 w-full object-contain"
                />

               

              </div>

            </div>

          </div>

        </div>

        <div className="text-white space-y-10">

          <div className="text-center lg:text-left">

            <h3 className="text-4xl sm:text-5xl font-bold mb-2">
              40,00,000+
            </h3>

            <p className="text-gray-400 uppercase text-xs tracking-widest">
              Users Love Tickertape
            </p>

          </div>

          <div className="border-t border-dashed border-white/20" />

          <div
            className="
            grid grid-cols-2
            gap-8
            text-center lg:text-left
            "
          >

            <div>

              <h4 className="text-3xl font-bold mb-1">
                4.6
              </h4>

              <p className="text-gray-400 uppercase text-xs tracking-widest">
                Google Play Rating
              </p>

            </div>

            <div>

              <h4 className="text-3xl font-bold mb-1">
                100cr+
              </h4>

              <p className="text-gray-400 uppercase text-xs tracking-widest">
                Transaction Volume
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StatsSection;
