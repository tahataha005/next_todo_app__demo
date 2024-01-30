import Button from "@/ui/base/buttons/BaseButton";
import Input from "@/ui/base/inputs/BaseInput";
import React, { FC } from "react";

const LoginForm = () => {
  return (
    <div className="flex column center full-width">
      <Input icon="email" label="Email" onChange={(e) => {}} />
      <Input
        icon="password"
        type="password"
        label="Password"
        onChange={(e) => {}}
      />
      <Button text="Login" onClick={() => {}} />
    </div>
  );
};

export default LoginForm;
