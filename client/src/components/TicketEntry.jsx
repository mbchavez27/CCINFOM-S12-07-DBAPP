import { useNavigate } from 'react-router'
import { closeTicket, deleteTicket } from '../services/tickets.services'

function TicketEntry({
  ticket_id,
  laptop,
  staff,
  type,
  category,
  date_submitted,
  resolved,
}) {
  const navigate = useNavigate(0)
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">{ticket_id}</td>
      <td className="px-4 py-2">{laptop}</td>
      <td className="px-4 py-2">{staff}</td>
      <td className="px-4 py-2">{type}</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2">
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td
        className={`px-4 py-2 text-center ${resolved == false ? 'hidden' : ''}`}
      >
        {' '}
        {new Date(
          new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        ).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td
        className={`px-4 py-2 text-center ${resolved == true ? 'hidden' : ''}`}
      >
        <button
          className={`bg-red-600 text-neutral-50 px-3 py-1 rounded-md`}
          onClick={async () => {
            const choice = confirm(
              'Are you sure you want to delete this ticket?'
            )
            if (choice) {
              try {
                const response = await deleteTicket(ticket_id)
                alert(response.data.message)
                navigate(0)
              } catch (error) {
                alert('Failed to delete the ticket.')
                console.error(error)
              }
            }
          }}
        >
          Delete
        </button>
      </td>
      <td
        className={`px-4 py-2 text-center ${resolved === true ? 'hidden' : ''}`}
      >
        <button
          className="bg-neutral-600 text-neutral-50 px-3 py-1 rounded-md"
          onClick={async () => {
            const today = new Date().toISOString().split('T')[0]
            const choice = confirm(
              'Are you sure you want to resolve the ticket?'
            )
            if (!choice) return

            try {
              const response = await closeTicket(ticket_id, today)

              if (response.status === 201) {
                alert('Ticket closed successfully')
                navigate(0)
              } else {
                alert('Failed to close the ticket.')
              }
            } catch (error) {
              console.error('Close ticket error:', error)
              alert(
                'Server error while closing ticket.\n' +
                  (error.response?.data?.error || 'Unexpected error')
              )
            }
          }}
        >
          Mark Resolved
        </button>
      </td>
    </tr>
  )
}

export default TicketEntry
