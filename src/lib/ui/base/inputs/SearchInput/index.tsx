"use client";

import React, { ChangeEvent, FC, useState } from "react";
import Icon from "@/lib/ui/icons";
import "./style.css";
import { motion } from "framer-motion";

type Props = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<Props> = ({ onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex column center search-input">
      <div className="flex row">
        <Icon
          icon="search"
          size={20}
          color={isFocused ? "primary-text" : "grey-text"}
        />
        <input
          className="flex center black-text input-field"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <motion.div
        className="full-rounded primary-bg search-input-line"
        initial={{ width: 0 }}
        animate={{ width: isFocused ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default SearchInput;
