import { useState } from 'react'
import BorrowRecord from '../components/BorrowRecord'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { getBorrowedLaptops } from '../services/borrow.services'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

function RecordList() {
  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState([])
  const [cookies] = useCookies(['user'])

  const fetchCurrentLaptops = async () => {
    setLoading(false)
    const res = await getBorrowedLaptops()
    setRecords(res.data)
    setLoading(true)
  }

  useEffect(() => {
    fetchCurrentLaptops()
  }, [])
  return (
    <>
      <NavBar />
      <div className="min-h-screen py-24 flex flex-col gap-5 border-y-2 border-neutral-400 items-center justify-start">
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
              <th className="px-4 py-2">Returned?</th>
              <th className="px-4 py-2">Penalized?</th>
              <th className="px-4 py-2">Incur Penalty</th>
              <th className="px-4 py-2">Mark Returned</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              records.data.map((record, index) => {
                return (
                  <BorrowRecord
                    record={record}
                    returned={record.return_date != null}
                    key={index}
                  />
                )
              })
            ) : (
              <tr>
                <td colSpan={11} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}

export default RecordList
