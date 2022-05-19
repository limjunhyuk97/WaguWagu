import { useState } from "react";
import Input from "@Atoms/Input";

import { Button } from "@Atoms/Buttons";

import CheckBox from "@Atoms/CheckBox/";

const Login = () => {
  const [sustainLoginChecked, setSustainLoginChecked] = useState(false);

  const handleCheckBoxChange = (event) => {
    console.log(event.target.checked);
    setSustainLoginChecked(event.target.checked);
  };

  return (
    <>
      <div>Login Page</div>

      <label>
        <CheckBox
          checked={sustainLoginChecked}
          onChange={handleCheckBoxChange}
        />
        <span style={{ marginLeft: 8 }}>Label Text</span>
      </label>
    </>
  );
};

export default Login;
