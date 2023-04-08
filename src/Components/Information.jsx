import { useState } from "react";
import App from "./App";
export default function Information({ personalInfo, setPersonalInfo }) {
  return (
    <div className="left">
      <h1>Information</h1>
      <input
        onChange={(e) => {
          setPersonalInfo({ ...personalInfo, name: e.target.value });
          console.log(personalInfo);
        }}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setPersonalInfo({ ...personalInfo, email: e.target.value });
        }}
        type="text"
        placeholder="Email"
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => {
          setPersonalInfo({ ...personalInfo, phone: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => {
          setPersonalInfo({ ...personalInfo, address: e.target.value });
        }}
      />
    </div>
  );
}
