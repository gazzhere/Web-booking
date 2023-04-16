import { useState } from "react";
import React from "react";

function InputParameter() {
  const [formData, setformData] = useState({
    createEvent: "",
    createEventMode: "",
    startdate: "",
    endDate: "",
    eventType: "offline",
    fileUpload:"",
  });
  function changehandler(event) {
    const { name, value,  } = event.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    // connect your backen form here
    console.log(formData);
  }
  return (
    <div className=" items-center flex place-content-around  ">
      
      <form onSubmit={submitHandler} className=" flex flex-col justify-center my-20">
        <label htmlFor="createEvent" className="text-xl font-semibold">
          Create Event
        </label>
        <br />
        <input
          type="text"
          name="createEvent"
          id="createEvent"
          placeholder="Event Name"
          value={formData.createEvent}
          onChange={changehandler}
          className=" rounded-md"
        />

        <br />
        <label htmlFor="startdate" className="text-xl font-semibold">
          Start Date
        </label>
        <br />
        <input
          type="date"
          name="startdate"
          id="startdate"
          placeholder="startdate"
          value={formData.startdate}
          onChange={changehandler}
          className=" rounded-md"
        />
        <br />
        <label htmlFor="endDate" className="text-xl font-semibold">
          End Date
        </label>
        <br />
        <input
          type="date"
          name="endDate"
          id="endDate"
          placeholder="endDate"
          value={formData.endDate}
          onChange={changehandler}
          className=" rounded-md"
        />
        <br />

        <label htmlFor="fileUpload" className="text-xl font-semibold">
          Upload Image
        </label>
        <br />
        <input
          type="file"
          name="fileUpload"
          id="fileUpload"
          placeholder="fileUpload"
          value={formData.fileUpload}
          onChange={changehandler}
          className="rounded-md"
        />
        <br />
        <label htmlFor="eventType" className="text-xl font-semibold ">
          Event Type
        </label>
        <br />
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={changehandler}
          className="rounded-md "
        >
          <option>Workshop</option>
          <option>Concert</option>
          <option>Conference</option>
        </select>
        <br />
        <br />
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Submit
        </button>
        <br />
      </form>
    </div>
  );
}

export default InputParameter;
