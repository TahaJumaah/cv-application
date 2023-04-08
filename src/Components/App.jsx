import Information from "./Information";
import Preview from "./Preview";
import { Children, useState } from "react";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profile: "",
    schoolName: "",
    graduationYear: "",
    schoolDescription: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });

  return (
    <>
      <Information
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <Preview personalInfo={personalInfo} />
    </>
  );
}
