function StatusCard({ header, text, subtext }) {
  return (
    <div className="w-75 border-2 border-neutral-300 rounded-md p-5 flex flex-col">
      <h1 className="mb-3 font-bold text-2xl">{header}</h1>
      <div>
        <p className="text-neutral-600 text-sm font-medium">{text}</p>
        <p className="text-neutral-400 text-sm ">{subtext}</p>
      </div>
    </div>
  );
}

export default StatusCard;
