import { useState } from 'react'
import { customerLogin } from '../services/customer.services'
import { staffLogin } from '../services/staff.services'

function LandingPageHero() {
  const [user, setUser] = useState('Customer')
  const [last_name, setLast_name] = useState('')
  const [first_name, setFast_name] = useState('')

  return (
    <div className="bg-[url(/hero.jpg)] h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Nice to meet you again</h1>
        <div className="flex rounded-md-l">
          <div
            className={`bg-gray-900 text-neutral-50 rounded-l-xl w-75 py-3 text-lg text-center font-semibold 
                                    ${
                                      user === 'Customer'
                                        ? 'bg-gray-900/100 text-neutral-50/100'
                                        : 'bg-gray-900/25 text-neutral-50/25'
                                    }`}
            onClick={() => setUser('Customer')}
          >
            Customer
          </div>
          <div
            className={`bg-gray-900 text-neutral-50 rounded-r-xl w-75 py-3 text-lg text-center font-semibold 
                                    ${
                                      user === 'Staff'
                                        ? 'bg-gray-900/100 text-neutral-50/100'
                                        : 'bg-gray-900/25 text-neutral-50/25'
                                    }`}
            onClick={() => setUser('Staff')}
          >
            Staff
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5">
            <p className="flex flex-col grow">
              <label htmlFor="first-name" className="ml-5">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
                required
                onChange={(e) => {
                  setFast_name(e.target.value)
                }}
              />
            </p>
            <p className="flex flex-col grow">
              <label htmlFor="last-name" className="ml-5">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
                required
                onChange={(e) => {
                  setLast_name(e.target.value)
                }}
              />
            </p>
          </div>

          <button
            className="mt-10 py-2 text-neutral-50 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-md"
            onClick={() => {
              if (user == 'Customer') {
                customerLogin(last_name, first_name)
              } else {
                staffLogin(last_name, first_name)
              }
            }}
          >
            Log In
          </button>
        </div>
        <p className="text-center">
          First time customer?{' '}
          <a className="text-blue-500" href="/signup">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LandingPageHero
