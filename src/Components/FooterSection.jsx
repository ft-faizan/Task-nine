
import bg from "../assets/footer-img.png";
import arrow from "../assets/arrow.png";

import { FaLinkedinIn, FaInstagram, FaXTwitter, FaApple, FaGoogle } from "react-icons/fa6";

function FooterSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black overflow-hidden flex flex-col justify-between">

      <img src={bg} alt="earer" className="absolute inset-0 w-full h-full object-fill opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-8xl mx-auto w-full px-10 pt-14 lg:pl-14 flex flex-col flex-1">

        <h2 className="text-white text-sm sm:text-xl lg:text-6xl font-bold leading-tight" style={{ maxWidth: "99%" }}>
          Manage your sales<br />
          and analytics at one
          place
        </h2>

       
        <div className="flex-1 flex items-center mt-6">
  <div
    className="
      w-full
      grid
      grid-cols-1
      sm:grid-cols-[1fr_auto_1fr]
      gap-6
      sm:gap-0
      items-center
      text-center sm:text-left
    "
  >
    {/* Left Section */}
    <div className="flex flex-col gap-5 sm:pr-8 items-center sm:items-start">
      <img src={arrow} alt="" className="w-7 opacity-60" />

      <p
        className="text-gray-400 text-xs leading-relaxed"
        style={{ maxWidth: 170 }}
      >
        Empowering Your Projects,<br />
        Enhancing Your Success, Every<br />
        Step of the Way.
      </p>

      <div className="flex gap-3">
        <IconBtn><FaLinkedinIn /></IconBtn>
        <IconBtn><FaXTwitter /></IconBtn>
        <IconBtn><FaInstagram /></IconBtn>
      </div>
    </div>

    {/* Divider */}
    <div
      className="
        w-full h-px
        sm:w-px sm:h-40
        border-t sm:border-l
        border-dashed
        border-white/15
        my-4 sm:my-0
        sm:mx-6
      "
    />

    {/* Right Section */}
    <div className="flex flex-col gap-3 justify-center items-center sm:items-start">
      <p className="text-white text-xs font-medium mb-1">
        Download our App
      </p>

      <StoreBtn
        icon={<FaGoogle style={{ fontSize: 17 }} />}
        line1="Get It On"
        line2="Google Play"
      />

      <StoreBtn
        icon={<FaApple style={{ fontSize: 19 }} />}
        line1="Download on the"
        line2="App Store"
      />
    </div>
  </div>
</div>

      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-5 flex justify-between">
        <p className="text-gray-600 text-xs">© ropflow.in</p>
        <p className="text-gray-500 text-xs cursor-pointer hover:text-gray-300 transition">Privacy Policy</p>
      </div>
    </section>
  );
}

function StoreBtn({ icon, line1, line2 }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 cursor-pointer hover:bg-white/10 transition"
      style={{ minWidth: 190 }}
    >
      <div className="text-white flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <span className="text-gray-400" style={{ fontSize: 9 }}>{line1}</span>
        <span className="text-white text-sm font-semibold leading-tight mt-0.5">{line2}</span>
      </div>
    </div>
  );
}

function IconBtn({ children }) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-sm cursor-pointer hover:bg-white/10 transition">
      {children}
    </div>
  );
}

export default FooterSection;