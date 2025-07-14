function BorrowRecord({ record, returned }) {
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
        <button className="bg-red-600 text-neutral-50 px-3 py-1 rounded-md">
          Add Penalty
        </button>
      </td>
      <td className="px-4 py-2 text-center">
        <button
          className={`bg-neutral-600 text-neutral-50 px-3 py-1 rounded-md ${
            returned === true ? 'hidden' : ''
          }`}
        >
          Mark Returned
        </button>
      </td>
    </tr>
  )
}

export default BorrowRecord
