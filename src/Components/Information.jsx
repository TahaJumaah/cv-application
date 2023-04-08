import { useState } from "react";
import App from "./App";
export default function Information({ personalInfo, setPersonalInfo }) {
  return (
    <div className="left">
      <div className="personal-information">
        <h1>Information</h1>
        <input
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, name: e.target.value });
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
          type="tel"
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

        <textarea
          placeholder="Profile Info"
          name="Profile Info"
          id=""
          cols="21"
          rows="5"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, profile: e.target.value });
          }}
        ></textarea>
      </div>
      <div className="education-information">
        <h2>Education</h2>
        <label htmlFor="school-name">School Name</label>
        <input
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, schoolName: e.target.value });
          }}
          id="school-name"
          placeholder="School Name"
          type="text"
        />
        <label htmlFor="graduation-year">Graduation Year</label>
        <input
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              graduationYear: e.target.value,
            });
          }}
          type="month"
          name="graduation year"
          id="graduation-year"
        />
        <label htmlFor="school-description">School Description</label>
        <textarea
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              schoolDescription: e.target.value,
            });
          }}
          name="school-description"
          id="school-description"
          cols="21"
          rows="5"
        ></textarea>
      </div>
      <div className="skills-information">
        <h2>Skills</h2>
        <label htmlFor="skill1">Skill 1</label>
        <input
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, skill1: e.target.value });
          }}
          type="text"
          id="skill1"
        />

        <label htmlFor="skill2">Skill 2</label>
        <input
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, skill2: e.target.value });
          }}
          type="text"
          id="skill2"
        />

        <label htmlFor="skill3">Skill 3</label>
        <input
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, skill3: e.target.value });
          }}
          type="text"
          id="skill3"
        />
      </div>
    </div>
  );
}
