import React, { FC } from "react";

import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

type Props = {
  icon: "email" | "password" | "search";
  size: number;
  color: string;
};

const Icon: FC<Props> = ({ icon, color, size }) => {
  const getIcon = () => {
    switch (icon) {
      case "email":
        return <MdOutlineMail className={color} size={size} />;

      case "password":
        return <MdPassword className={color} size={size} />;

      case "search":
        return <CiSearch className={color} size={size} />;

      default:
        return <MdOutlineMail className={color} size={size} />;
    }
  };

  return <div className="flex center">{getIcon()}</div>;
};

export default Icon;
