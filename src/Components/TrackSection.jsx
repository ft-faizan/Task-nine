import transImg from "../assets/history-card.png";
import friendsImg from "../assets/combine-card.png";
import remindImg from "../assets/date-card.png";

const cards = [
  {
    title: "Transactions",
    desc: "Pick winning stocks confidently with 130+ filters or create your",
    img: transImg,
    bg: "linear-gradient(180deg, #1a5c35 0%, #0d3b24 100%)",
 height: "h-[480px] sm:h-[530px]",  },
  {
    title: "Friends and family",
    desc: "Pick winning stocks confidently with 130+ filters or create your own",
    img: friendsImg,
    bg: "linear-gradient(180deg, #4338ca 0%, #5b21b6 50%, #6d28d9 100%)",
    height: "h-[520px] sm:h-[630px]", 
  },
  {
    title: "Timely reminders",
    desc: "Pick winning stocks confidently with 130+ filters or creat",
    img: remindImg,
    bg: "linear-gradient(180deg, #78716c 0%, #6b5a2f 40%, #44350f 100%)",
     height: "h-[480px] sm:h-[530px]",
  },
];

function TrackSection() {
  return (
    <section className="w-full bg-black py-28">

     
      <div className="max-w-8xl mx-auto px-6 mb-14">
        <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl lg:pl-25 font-bold leading-tight">
          Track what<br />matters to you
        </h2>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-5 items-end">

        {cards.map((card, i) => (
          <div
            key={i}
            className={`
              relative w-full sm:flex-1
              ${card.height}
              rounded-2xl overflow-hidden
            `}
            style={{ background: card.bg }}
          >
           
            <div className="relative z-10 p-5 pt-6">
              <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-xs lg:text-lg leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="w-full object-contain object-bottom"
                style={{ maxHeight: "75%" }}
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default TrackSection;