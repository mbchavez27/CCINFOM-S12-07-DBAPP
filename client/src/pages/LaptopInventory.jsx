import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import LaptopCard from '../components/LaptopCard'
import { useEffect, useState } from 'react'
import { getLaptops } from '../services/laptop.services'

function LaptopInventory() {
  const [laptops, setLaptops] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const fetchLaptops = async (currentPage = 1) => {
    setLoading(false)
    const res = await getLaptops(currentPage, 6)
    setLaptops(res.data)
    setLoading(true)
  }

  useEffect(() => {
    fetchLaptops(page)
  }, [page])

  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-5 px-50 py-10 border-y-2 border-neutral-300">
        <h1 className="font-bold text-4xl">Laptops</h1>
        <a href="/staff/laptops/add">
          <button className="px-5 py-2 rounded-lg text-neutral-50 bg-neutral-800">
            Add Laptop
          </button>
        </a>
        <h1 className="text-red-600 font-bold text-2xl">In Use</h1>
        <div className="grid grid-cols-3 gap-10"></div>
        <h1 className="text-green-600 font-bold text-2xl">Available</h1>
        <div className="grid grid-cols-3 gap-10">
          {loading ? (
            laptops.data.map((laptop, index) => {
              return (
                <LaptopCard
                  laptop={laptop.product_name}
                  os={laptop.product_os}
                  batteryHealth={laptop.battery_health}
                  staff_view={true}
                  in_use={false}
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

export default LaptopInventory
