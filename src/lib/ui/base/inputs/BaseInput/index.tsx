import React, { ChangeEvent, FC, useRef, useState } from "react";
import "./style.css";
import Icon from "@/lib/ui/icons";

type Props = {
  label: string;
  type?: "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: "email" | "password";
};

const Input: FC<Props> = ({ label, onChange, type = "text", icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`flex column rounded white-bg full-width input ${
        (isFocused || isFilled) && "input-focused"
      }`}
    >
      <label
        onClick={() => inputRef.current?.focus()}
        className={`input-label ${(isFocused || isFilled) && "label-focused"} ${
          isFocused ? "primary-text" : "grey-text"
        }`}
      >
        {label}
      </label>
      <div className="flex row">
        <Icon size={20} icon={icon} color="primary-text" />
        <input
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="full-width input-field"
          type={type}
          onChange={(e) => {
            onChange(e);
            setIsFilled(!!e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Input;
