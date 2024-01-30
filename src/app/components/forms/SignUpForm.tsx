import Button from "@/components/base/buttons/BaseButton";
import Input from "@/ui/base/inputs/BaseInput";
import React, { FC } from "react";

type Props = {
  loginSwitch: () => void;
};

const SignUpForm: FC<Props> = ({ loginSwitch }) => {
  return (
    <div className="flex column center full-width">
      <div className="flex row">
        <Input icon="email" label="First name" onChange={(e) => {}} />
        <Input icon="email" label="Last name" onChange={(e) => {}} />
      </div>
      <Input icon="email" label="Email" onChange={(e) => {}} />
      <div className="flex row">
        <Input
          icon="password"
          type="password"
          label="Password"
          onChange={(e) => {}}
        />
        <Input
          icon="password"
          type="password"
          label="Confirm"
          onChange={(e) => {}}
        />
      </div>
      <Button text="Sign Up" onClick={() => {}} />
      <p>
        Already have an account?{" "}
        <span className="primary-text" onClick={() => loginSwitch()}>
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;
