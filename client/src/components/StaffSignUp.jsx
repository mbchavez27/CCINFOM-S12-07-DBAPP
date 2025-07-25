import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'
import { staffRegister } from '../services/staff.services'

function StaffSignUp() {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [tel, setTel] = useState('')
  const [cookies, setCookies] = useState(['user'])

  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col gap-3">
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
                setFirstName(e.target.value)
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
                setLastName(e.target.value)
              }}
            />
          </p>
        </div>
        <p className="flex flex-col grow">
          <label htmlFor="college" className="ml-5">
            Telephone Number
          </label>
          <input
            type="tel"
            id="college"
            value={tel}
            className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
            pattern="^09\d{9}$"
            placeholder="09XXXXXXXXX"
            onChange={(e) => {
              setTel(e.target.value)
            }}
            required
          />
        </p>

        <button
          className="mt-10 py-2 text-neutral-50 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-md"
          onClick={async () => {
            if ((lastName, firstName, tel)) {
              const userDetails = await staffRegister(lastName, firstName, tel)

              if (userDetails.status != 404) {
                setCookies('user', userDetails, { path: '/' })
                navigate('/staff')
              }
            }
          }}
        >
          Sign Up
        </button>
      </div>

      <p className="text-center mt-3">
        Returning Staff?{' '}
        <a className="text-blue-500" href="/">
          Log in
        </a>
      </p>
    </>
  )
}

export default StaffSignUp
