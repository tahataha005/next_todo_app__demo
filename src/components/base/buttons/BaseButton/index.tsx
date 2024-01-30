import React, { FC } from "react";
import "./style.css";

type Props = {
  text: string;
  color?: "primary-bg" | "secondary-bg";
  onClick: () => void;
  textColor?: "white-text" | "black-text";
};

const Button: FC<Props> = ({
  text,
  color = "primary-bg",
  textColor = "white-text",
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={`flex center full-width full-rounded button ${color} ${textColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
