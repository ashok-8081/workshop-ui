import React from "react";

const Propose = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4 py-10">
      <form className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl space-y-5">

        <h2 className="text-3xl font-bold text-center text-slate-800">
          Propose a Workshop
        </h2>

        {/* Workshop Title */}
        <input
          type="text"
          placeholder="Workshop Title"
          className="w-full border rounded-lg px-4 py-2"
        />

        {/* Description */}
        <textarea
          rows="4"
          placeholder="Workshop Description"
          className="w-full border rounded-lg px-4 py-2"
        ></textarea>

        {/* Category */}
        <select className="w-full border rounded-lg px-4 py-2">
          <option>Select Category</option>
          <option>Python</option>
          <option>IoT</option>
          <option>Machine Learning</option>
          <option>Presentation</option>
        </select>

        {/* Proposed Date */}
        <input
          type="date"
          className="w-full border rounded-lg px-4 py-2"
        />

        {/* Duration */}
        <input
          type="text"
          placeholder="Duration (e.g. 2 Hours / 3 Days)"
          className="w-full border rounded-lg px-4 py-2"
        />

        {/* Target Audience */}
        <input
          type="text"
          placeholder="Target Audience (e.g. Students, Faculty)"
          className="w-full border rounded-lg px-4 py-2"
        />

        {/* Resource Required */}
        <textarea
          rows="3"
          placeholder="Resources Required (Projector, Lab, Internet etc.)"
          className="w-full border rounded-lg px-4 py-2"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition"
        >
          Submit Proposal
        </button>

      </form>
    </div>
  );
};

export default Propose;