import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    workshop: "",
    data: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.name &&
    formData.email.includes("@") &&
    formData.phone.length >= 10 &&
    formData.gender &&
    formData.workshop &&
    formData.date;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("🎉 Registration Successful!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        workshop: "",
        date: "",
      });
    }, 1500);
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Register for Workshop
      </h2>
      {success && (
        <div className="mb-4 text-green-600 text-center font-medium">
          {success}
        </div>
      )}

      <form method="POST" className="space-y-4" onSubmit={handleSubmit}>
        {/*Name*/}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />

        {/*Email*/}
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />

        {/*Mobile Number*/}
        <input
          type="text"
          name="phone"
          placeholder="Enter Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />

        {/*Gender*/}
        <div>
          <p className="text-sm mb-1">Gender</p>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
        </div>

        {/*Workshop Dropdown */}
        <select
          name="workshop"
          value={formData.workshop}
          onChange={handleChange}
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
          value={formData.date}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="Submit"
          disabled={!isFormValid || loading}
          className={`w-full py-2 rounded-lg text-white transition ${
            isFormValid
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
