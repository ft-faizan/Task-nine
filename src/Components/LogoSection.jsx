


import LogoLoop from "../Components/LogoLoop.jsx";

import netflix   from "../assets/item-5.png";
import disney    from "../assets/item -4.png";
import airbnb    from "../assets/item -2.png";
import microsoft from "../assets/item -3.png";
import duolingo  from "../assets/item-1.png";

const logos = [
  { src: netflix,   alt: "Netflix",   href: "https://netflix.com" },
  { src: disney,    alt: "Disney",    href: "https://disney.com" },
  { src: airbnb,    alt: "Airbnb",    href: "https://airbnb.com" },
  { src: microsoft, alt: "Microsoft", href: "https://microsoft.com" },
  { src: duolingo,  alt: "Duolingo",  href: "https://duolingo.com" },
];

function LogoSection() {
  return (
    <section className="w-full rounded-3xl bg-black py-16 overflow-hidden">
      {/* label */}
      {/* <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-gray-400 text-sm uppercase tracking-wider">
          Trusted by leading companies
        </p>
      </div> */}

      {/* loop – fadeOutColor MUST match the bg exactly */}
      <LogoLoop
        logos={logos}
        speed={80}
        direction="left"
        logoHeight={40}
        gap={60}
        fadeOut
        fadeOutColor="#000000"   // ← key fix: matches bg-black perfectly
        scaleOnHover
        pauseOnHover            // clean pause instead of undefined hover speed
        ariaLabel="Partner logos"
      />
    </section>
  );
}

export default LogoSection;