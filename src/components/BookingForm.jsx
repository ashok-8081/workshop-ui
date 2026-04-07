import React from "react";

const BookingForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Register for Workshop
      </h2>

      <form method="POST" className="space-y-4">
        {/*Name*/}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />

        {/*Email*/}
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />

        {/*Mobile Number*/}
        <input
          type="text"
          name="phone"
          placeholder="Enter Mobile Number"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />

        {/*Gender*/}
        <div>
          <p className="text-sm mb-1">Gender</p>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
        </div>

        {/*Workshop Dropdown */}
        <select
          name="workshop"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Workshop</option>
          <option value="python">Select Workshop</option>
          <option value="scilab">Select Workshop</option>
          <option value="iot">Select Workshop</option>
        </select>

        {/*Data Selection */}
        <input
          type="date"
          name="date"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />
        <input type="Submit" value="submit" />
      </form>
    </div>
  );
};

export default BookingForm;
