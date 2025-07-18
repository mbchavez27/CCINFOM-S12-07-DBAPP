import { useNavigate } from 'react-router'
import { deleteLaptop } from '../services/laptop.services'

function LaptopCard({
  laptop_id,
  laptop,
  os,
  batteryHealth,
  staff_view,
  in_use,
}) {
  const navigate = useNavigate()
  return (
    <div className="p-5 flex flex-col gap-1 rounded-xl border-2 border-neutral-300">
      <img
        className="p-5 mb-3 bg-neutral-400 rounded-lg"
        src="/laptop.png"
        alt="Laptop Picture"
      />
      <h3 className="text-lg font-semibold">{laptop}</h3>
      <p className="font-normal">{os}</p>
      <p className="font-normal">Battery Health: {batteryHealth}%</p>
      <div
        className={`flex justify-around ${
          staff_view === true && in_use === false ? '' : 'hidden'
        }`}
      >
        <button
          className="mt-4 px-5 py-2 rounded-lg text-neutral-50 bg-red-600"
          onClick={async () => {
            const choice = confirm(
              'Are you sure you want to delete this laptop?'
            )
            if (choice) {
              try {
                const response = await deleteLaptop(laptop_id)
                alert(response.data.message)
                navigate(0)
              } catch (error) {
                alert('Failed to delete the laptop.')
                console.error(error)
              }
            }
          }}
        >
          Delete Laptop
        </button>
      </div>
      <div
        className={`flex justify-around ${
          staff_view === false ? '' : 'hidden'
        }`}
      >
        <a href={`/client/browse/checkout?laptop_id=${laptop_id}`}>
          <button className="mt-4 px-5 py-2 rounded-lg text-neutral-50 bg-neutral-600">
            Checkout
          </button>
        </a>
      </div>
    </div>
  )
}

export default LaptopCard
