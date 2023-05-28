import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const State = () => {
  // State Creation
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");

  // useEffect Creation
  useEffect(() => {
    console.log("useEffect Called");
  }, [name, address]);

  return (
    <div>
      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        placeholder="Enter Address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
          console.log(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        placeholder="Enter Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
          console.log(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        placeholder="Enter Salary"
        value={salary}
        onChange={(e) => {
          setSalary(e.target.value);
          console.log(e.target.value);
        }}
      />
      <br />
      <br />
      <input type="file" />
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          console.log("Name : ", name);
          console.log("Address : ", address);
          console.log("Age : ", age);
          console.log("Salary : ", salary);
        }}
      >
        Success
      </Button>
    </div>
  );
};

export default State;
