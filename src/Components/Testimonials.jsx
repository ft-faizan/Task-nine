const testimonials = [
  {
    text: `“We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don’t see us not using Metaforms in near future.”`,
    name: "Rohin Singh",
    role: "Chief Integrating Officer",
  },
  {
    text: `“We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don’t see us not using Metaforms in near future.”`,
    name: "Rohin Singh",
    role: "Chief Integrating Officer",
  },
  {
    text: `“We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don’t see us not using Metaforms in near future.”`,
    name: "Rohin Singh",
    role: "Chief Integrating Officer",
  },
];

function Testimonials() {
  return (
    <section className="w-full bg-black py-28">

      <div
        className="
        max-w-8xl mx-auto px-6

        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3

        text-white
        "
      >

        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`
            relative
            px-8 py-4

            ${
              index !== 0
                ? "lg:border-l border-white/15"
                : ""
            }
            `}
          >

            
            <p className="text-base leading-relaxed text-white/90 mb-10">
              {item.text}
            </p>

            
            <div className="mt-auto">

              <p className="font-medium text-white">
                {item.name}
              </p>

              <p className="text-sm text-gray-400">
                {item.role}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;
