import BorrowRecord from "../components/BorrowRecord";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function RecordList() {
    return (
        <>
            <NavBar />
            <div className="py-5 flex flex-col gap-5 border-y-2 border-neutral-400 items-center justify-center">
                <h1 className="font-bold text-3xl">Borrow Record</h1>
                <table className="min-w-[85%] text-lg bg-white border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-600 tracking-wider">
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Laptop</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Staff</th>
                            <th className="px-4 py-2">Pick-up Date</th>
                            <th className="px-4 py-2">Return Date</th>
                            <th className="px-4 py-2">Late</th>
                            <th className="px-4 py-2">Incur Penalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BorrowRecord />
                        <BorrowRecord />
                        <BorrowRecord />
                        <BorrowRecord />
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default RecordList;
