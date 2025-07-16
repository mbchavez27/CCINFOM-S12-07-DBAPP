import { useNavigate } from 'react-router'
import { returnLaptop } from '../services/borrow.services'

function BorrowRecord({ record, returned }) {
  const navigate = useNavigate()
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">{record.borrow_id}</td>
      <td className="px-4 py-2">{record.product_name}</td>
      <td className="px-4 py-2">{record.customer_name}</td>
      <td className="px-4 py-2">{record.assigned_staff}</td>
      <td className="px-4 py-2">
        {new Date(record.pickup_date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td className="px-4 py-2">
        {' '}
        {new Date(
          new Date(record.pickup_date).getTime() + 7 * 24 * 60 * 60 * 1000
        ).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td className="px-4 py-2">
        {new Date() >
        new Date(
          new Date(record.pickup_date).getTime() + 7 * 24 * 60 * 60 * 1000
        )
          ? 'Yes'
          : 'No'}
      </td>
      <td className="px-4 py-2">{returned == true ? 'Yes' : 'No'}</td>
      <td className="px-4 py-2">No</td>
      <td className="px-4 py-2 text-center">
        <a href={`/staff/records/penalty?borrow_id=${record.borrow_id}`}>
          <button className="bg-red-600 text-neutral-50 px-3 py-1 rounded-md">
            Add Penalty
          </button>
        </a>
      </td>
      <td className="px-4 py-2 text-center">
        <button
          className={`bg-neutral-600 text-neutral-50 px-3 py-1 rounded-md`}
          onClick={async () => {
            if (!returned) {
              const today = new Date().toISOString().split('T')[0]

              const choice = confirm(
                'Are you sure you want to return this laptop?'
              )
              if (choice) {
                const returnedStatus = await returnLaptop(
                  record.borrow_id,
                  today
                )

                if (returnedStatus.status == 201) {
                  alert('Laptop return successful')
                  navigate(0)
                }
              }
            }
          }}
        >
          {returned ? 'Returned' : 'Mark as Returned'}
        </button>
      </td>
    </tr>
  )
}

export default BorrowRecord
