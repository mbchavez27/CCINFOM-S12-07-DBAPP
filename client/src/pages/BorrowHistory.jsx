import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BorrowRecordClient from "../components/BorrowRecordClient";

function BorrowHistory() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen py-24 flex flex-col gap-5 border-y-2 border-neutral-400 items-center justify-start">
        <h1 className="font-bold text-3xl">Borrow History</h1>
        <table className="min-w-[85%] text-lg bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-600 tracking-wider">
            <tr>
              <th className="px-4 py-2">Laptop</th>
              <th className="px-4 py-2">Staff</th>
              <th className="px-4 py-2">Pick-up Date</th>
              <th className="px-4 py-2">Return Date</th>
              <th className="px-4 py-2">Late?</th>
              <th className="px-4 py-2">Returned?</th>
              <th className="px-4 py-2">Penalized?</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <BorrowRecordClient />
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default BorrowHistory;
