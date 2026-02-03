

import blog1 from "../assets/image-section-one.png";
import blog2 from "../assets/image-section-two.png";
import blog3 from "../assets/image-section-three.png";

function BlogSection() {
  return (
    
    <section className="w-full bg-black py-20 sm:py-24 lg:py-28 relative">

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(circle, rgba(34,197,94,0.25) 1px, transparent 1px)`,
      backgroundSize: "24px 24px",
      backgroundPosition: "12px 12px",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="mb-8 text-center sm:text-left">
      <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
        Blogs and newsroom updates
      </h2>

      <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-lg mt-3 sm:mt-5 mx-auto sm:mx-0">
        A community for India's investors hang out and talk about
        investments, personal finance
      </p>
    </div>

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-[3fr_2fr]
        gap-4
        mb-4
      "
    >
      <BlogCard
        img={blog1}
        title="Timely alerts & sync ups"
        desc="Pick winning stocks confidently..."
        height="h-[260px] sm:h-[320px] lg:h-[380px]"
      />

      <BlogCard
        img={blog2}
        title="Timely alerts"
        desc="Pick winning stocks confidently..."
        height="h-[260px] sm:h-[320px] lg:h-[380px]"
      />
    </div>

    <BlogCard
      img={blog3}
      title="Timely alerts & sync ups"
      desc="Pick winning stocks confidently..."
      height="h-[180px] sm:h-[220px] lg:h-[260px]"
    />

  </div>
</section>

  );
}

function BlogCard({ img, title, desc, height }) {
  return (
    <div
      className={`relative w-full ${height} rounded-xl overflow-hidden group cursor-pointer`}
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 40%, transparent 65%)",
        }}
      />

      <div className="absolute bottom-0 left-0 w-full p-5">
        <h3 className="text-white lg:text-4xl font-semibold text-base mb-1.5">
          {title}
        </h3>
        <p className="text-gray-400 text-xs lg:text-lg leading-relaxed line-clamp-3">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default BlogSection;