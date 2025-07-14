import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import LaptopCard from '../components/LaptopCard'
import { useEffect, useState } from 'react'
import {
  getAvailableLaptops,
  getUsedLaptops,
} from '../services/laptop.services'

function LaptopInventory() {
  const [availableLaptops, setAvailableLaptops] = useState([])
  const [usedLaptops, setUsedLaptops] = useState([])
  const [loading1, setLoading1] = useState(false)
  const [availablePage, setAvailablePage] = useState(1)
  const [loading2, setLoading2] = useState(false)
  const [usedPage, setUsedPage] = useState(1)

  const fetchAvailableLaptops = async (currentPage = 1) => {
    setLoading1(false)
    const res = await getAvailableLaptops(currentPage, 6)
    setAvailableLaptops(res.data)
    setLoading1(true)
  }

  useEffect(() => {
    fetchAvailableLaptops(availablePage)
  }, [availablePage])

  const fetchUsedLaptops = async (currentPage = 1) => {
    setLoading2(false)
    const res = await getUsedLaptops(currentPage, 6)
    setUsedLaptops(res.data)
    setLoading2(true)
  }

  useEffect(() => {
    fetchUsedLaptops(usedPage)
  }, [usedPage])

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
        <div className="grid grid-cols-3 gap-10">
          {loading2 ? (
            usedLaptops.data.map((laptop, index) => {
              return (
                <LaptopCard
                  laptop_id={laptop.laptop_id}
                  laptop={laptop.product_name}
                  os={laptop.product_os}
                  batteryHealth={laptop.battery_health}
                  staff_view={true}
                  in_use={true}
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
            disabled={usedPage === 1}
            onClick={() => setUsedPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span className="self-center">Page {usedPage}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => setUsedPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
        <h1 className="text-green-600 font-bold text-2xl">Available</h1>
        <div className="grid grid-cols-3 gap-10">
          {loading1 ? (
            availableLaptops.data.map((laptop, index) => {
              return (
                <LaptopCard
                  laptop_id={laptop.laptop_id}
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
            disabled={availablePage === 1}
            onClick={() => setAvailablePage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span className="self-center">Page {availablePage}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => setAvailablePage((prev) => prev + 1)}
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
