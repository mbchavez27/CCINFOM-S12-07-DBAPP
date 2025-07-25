import { use } from 'react'
import Footer from '../components/Footer'
import LaptopCard from '../components/LaptopCard'
import NavBar from '../components/NavBar'
import { getAvailableLaptops } from '../services/laptop.services'
import { useEffect } from 'react'
import { useState } from 'react'

function BorrowPage() {
  const [laptops, setLaptops] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const fetchLaptops = async (currentPage = 1) => {
    setLoading(false)
    const res = await getAvailableLaptops(currentPage, 6)
    setLaptops(res.data)
    setLoading(true)
  }
  useEffect(() => {
    fetchLaptops(page)
  }, [page])

  return (
    <>
      <NavBar />
      <div className="px-50 py-10 border-y-2 border-neutral-300">
        <h1 className="font-bold text-4xl mb-10">Laptops</h1>
        <div className="grid grid-cols-3 gap-10">
          {loading ? (
            laptops.data.map((laptop, index) => {
              return (
                <LaptopCard
                  laptop_id={laptop.laptop_id}
                  laptop={laptop.product_name}
                  os={laptop.product_os}
                  batteryHealth={laptop.battery_health}
                  staff_view={false}
                  key={index}
                />
              )
            })
          ) : (
            <>loading...</>
          )}
        </div>
        <div className="flex justify-center mt-10 gap-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span className="self-center">Page {page}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default BorrowPage
