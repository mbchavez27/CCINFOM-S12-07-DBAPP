function CustomerSignUp() {
  return (
    <div className="bg-[url(/hero.jpg)] h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <form
          action="/insert-path"
          method="post"
          className="flex flex-col gap-3"
        >
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
              />
            </p>
          </div>

          <p className="flex flex-col grow">
            <label htmlFor="type-select" className="ml-5">
              Student or Faculty
            </label>
            <select
              id="type-select"
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
            >
              <option value="" disabled selected hidden>
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
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
            >
              <option value="" disabled selected hidden>
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
            type="submit"
            className="mt-5 py-2 text-neutral-50 bg-blue-500 rounded-md"
          >
            Sign Up
          </button>
        </form>

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
