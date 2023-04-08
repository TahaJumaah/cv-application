import { useState } from "react";

export default function Preview({ personalInfo }) {
  return (
    <div className="right">
      <h1 className="name">{personalInfo.name}</h1>

      <div className="details">
        <div className="contact-details">
          <p>
            Email: <br /> {personalInfo.email}
          </p>
          <p>
            Phone: <br /> {personalInfo.phone}
          </p>
          <p>
            Address: <br /> {personalInfo.address}
          </p>
        </div>
        <div className="profile-details">
          <p>{personalInfo.profile}</p>
        </div>
      </div>
      <div className="education-skills">
        <div className="education">
          <h2>Education</h2>

          <span className="school-name">{personalInfo.schoolName} | </span>
          <span className="year">{personalInfo.graduationYear}</span>
          <span className="school-description">
            <br />
            {personalInfo.schoolDescription}
          </span>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>{personalInfo.skill1}</li>
            <li>{personalInfo.skill2}</li>
            <li>{personalInfo.skill3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
