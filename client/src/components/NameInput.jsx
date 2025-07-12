function NameInput() {
  return (
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
  );
}

export default NameInput;
