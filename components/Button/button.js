"use client";

import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className=""
      >
        {name}
      </button>
    </>
  );
};

export default Button;
