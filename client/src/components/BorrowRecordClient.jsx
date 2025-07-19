function BorrowRecordClient({ borrowedLaptop }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">{borrowedLaptop.product_name}</td>
      <td className="px-4 py-2">{borrowedLaptop.assigned_staff}</td>
      <td className="px-4 py-2">
        {new Date(borrowedLaptop.pickup_date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td className="px-4 py-2">
        {' '}
        {new Date(
          new Date(borrowedLaptop.pickup_date).getTime() +
            7 * 24 * 60 * 60 * 1000
        ).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td className="px-4 py-2">
        {new Date(borrowedLaptop.return_date) >
        new Date(
          new Date(borrowedLaptop.pickup_date).getTime() +
            7 * 24 * 60 * 60 * 1000
        )
          ? 'Yes'
          : 'No'}
      </td>
      <td className="px-4 py-2">
        {borrowedLaptop.return_date == null ? 'No' : 'Yes'}
      </td>
      <td className="px-4 py-2">
        {borrowedLaptop.penalty_id == null ? 'No' : 'Yes'}
      </td>
    </tr>
  )
}

export default BorrowRecordClient
