function LaptopCard({ laptop, os, batteryHealth }) {
  return (
    <div className="p-5 flex flex-col gap-1 rounded-xl border-2 border-neutral-300">
      <img
        className="p-5 mb-3 bg-neutral-400 rounded-lg"
        src="/laptop.png"
        alt="Laptop Picture"
      />
      <h3 className="text-lg font-semibold">{laptop}</h3>
      <p className="font-normal">{os}</p>
      <p className="font-normal">{batteryHealth}%</p>
    </div>
  );
}

export default LaptopCard;
