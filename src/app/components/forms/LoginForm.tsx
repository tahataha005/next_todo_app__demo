import { useLogic } from "@/app/logic";
import Button from "@/lib/ui/base/buttons/BaseButton";
import Input from "@/lib/ui/base/inputs/BaseInput";
import React from "react";

export type Credentials = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { handleChange, login } = useLogic();

  return (
    <div className="flex column center full-width">
      <Input
        icon="email"
        label="Email"
        onChange={(e) => {
          handleChange("email", e.target.value);
        }}
      />
      <Input
        icon="password"
        type="password"
        label="Password"
        onChange={(e) => {
          handleChange("password", e.target.value);
        }}
      />
      <Button
        text="Login"
        onClick={async () => {
          await login();
        }}
      />
    </div>
  );
};

export default LoginForm;
