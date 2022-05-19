import { useState } from "react";
import InputFrame from "@Organisms/Login";

const Login = () => {
  const [login, setLogin] = useState(false);

  const handleCheckChange = (e) => {
    setLogin(e.target.checked);
  };

  return (
    <InputFrame
      sustainLoginCheck={login}
      handleCheckChange={handleCheckChange}
    ></InputFrame>
  );
};

export default Login;
