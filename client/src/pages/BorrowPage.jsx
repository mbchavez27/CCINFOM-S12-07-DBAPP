import { use } from 'react'
import Footer from '../components/Footer'
import LaptopCard from '../components/LaptopCard'
import NavBar from '../components/NavBar'
import { getLaptops } from '../services/laptop.services'
import { useEffect } from 'react'
import { useState } from 'react'

function BorrowPage() {
  const [laptops, setLaptops] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchLaptops = async () => {
      const data = await getLaptops()
      setLaptops(data.data)
      setLoading(true)
    }
    fetchLaptops()
  }, [])

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
      </div>
      <Footer />
    </>
  )
}

export default BorrowPage
