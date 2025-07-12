import { use, useState } from 'react'
import { customerRegister } from '../services/customer.services'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'
function CustomerSignUp() {
  const [cookies, setCookies] = useCookies(['user'])
  const [last_name, setLast_name] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [type, setType] = useState('')
  const [college, setCollege] = useState('')

  const navigate = useNavigate()

  return (
    <div className="bg-[url(/hero.jpg)] h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Welcome!</h1>
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
                  setFirst_name(e.target.value)
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
                onChange={(e) => {
                  setLast_name(e.target.value)
                }}
              />
            </p>
          </div>

          <p className="flex flex-col grow">
            <label htmlFor="type-select" className="ml-5">
              Student or Faculty
            </label>
            <select
              id="type-select"
              value={type}
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
              onChange={(e) => {
                setType(e.target.value)
              }}
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
            </select>
          </p>
          <p className="flex flex-col grow">
            <label htmlFor="college" className="ml-5">
              College
            </label>
            <select
              id="college"
              value={college}
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
              onChange={(e) => {
                setCollege(e.target.value)
              }}
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              <option value="CCS">College of Computer Studies</option>
              <option value="GCOE">College of Engineering</option>
              <option value="COS">College of Science</option>
              <option value="RVRCOB">College of Business</option>
              <option value="CLA">College of Liberal Arts</option>
              <option value="BAGCED">College of Education</option>
              <option value="SOE">School of Economics</option>
              <option value="TDSOL">School of Law</option>
            </select>
          </p>

          <button
            className="mt-10 py-2 text-neutral-50 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-md"
            onClick={async () => {
              if (last_name && first_name) {
                const userDetails = await customerRegister(
                  last_name,
                  first_name,
                  type,
                  college
                )
                if (userDetails.status != 404) {
                  setCookies('user', userDetails.data, {
                    path: '/',
                  })
                  navigate('/client')
                }
              }
            }}
          >
            Sign Up
          </button>
        </div>

        <p className="text-center">
          Returning Customer?{' '}
          <a className="text-blue-500" href="/">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}

export default CustomerSignUp
