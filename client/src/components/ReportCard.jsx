function ReportCard({ title, rows, columns }) {
  return (
    <div className="w-96 border-2 border-neutral-300 rounded-md p-5 flex flex-col">
      <h1 className="mb-4 font-bold text-xl text-center">{title}</h1>
      <div className="flex font-semibold text-sm border-b pb-1 mb-2">
        {columns.map((col, idx) => (
          <div key={idx} className="w-full text-neutral-600">
            {col.label}
          </div>
        ))}
      </div>
      {rows.slice(0, 5).map((row, idx) => (
        <div key={idx} className="flex text-sm py-1 border-b last:border-b-0">
          {columns.map((col, cidx) => (
            <div key={cidx} className="w-full text-neutral-800">
              {row[col.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ReportCard;
