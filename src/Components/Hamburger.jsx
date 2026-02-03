function Hamburger({ open, setOpen }) {
  return (
    <label className="relative cursor-pointer w-[50px] h-[40px] block">
      <input
        type="checkbox"
        checked={open}
        onChange={() => setOpen(!open)}
        className="hidden"
      />

      {/* Top */}
      <span
        className={`absolute left-0 w-[45px] h-[6px] bg-white rounded-full transition-all duration-300
        ${open ? "rotate-45 top-1 left-[5px]" : "top-0"}`}
      />

      {/* Middle */}
      <span
        className={`absolute left-0 w-[45px] h-[6px] bg-white rounded-full transition-all duration-300
        ${open ? "opacity-0 -translate-x-5" : "top-[17px]"}`}
      />

      {/* Bottom */}
      <span
        className={`absolute left-0 w-[45px] h-[6px] bg-white rounded-full transition-all duration-300
        ${open ? "-rotate-45 bottom-[-1px] left-[5px]" : "bottom-0"}`}
      />
    </label>
  );
}

export default Hamburger;
