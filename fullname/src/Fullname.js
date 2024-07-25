import React, { useState } from "react";

const Fullname = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSetFull = (e) => {
    e.preventDefault();
    if (firstname !== "" && lastname !== "") {
      setFullName(firstname + " " + lastname);
    } else {
      setFullName("");
    }
  };

  return (
    <div>
      <h1>Full Name Dispaly</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            onInput={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>last Name:</label>
          <input
            type="text"
            onInput={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={(e) => handleSetFull(e)}>
          Submit
        </button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
};

export default Fullname;
