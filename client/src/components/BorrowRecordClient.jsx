function BorrowRecordClient() {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">Lenovo Thinkpad T480</td>
      <td className="px-4 py-2">Max Chavez</td>
      <td className="px-4 py-2">
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </td>
      <td className="px-4 py-2">
        {" "}
        {new Date(
          new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </td>
      <td className="px-4 py-2">
        {new Date() > new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
          ? "Yes"
          : "No"}
      </td>
      <td className="px-4 py-2">No</td>
      <td className="px-4 py-2">No</td>
    </tr>
  );
}

export default BorrowRecordClient;
