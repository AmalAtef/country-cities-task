import React, { useState } from "react";

import Header from "../components/header";

import Countries from "../components/counties";

const Country = () => {
  return (
    <>
      <div className="div-container">
      <Header/>
      <Countries/>
      </div>
    </>
  );
};

export default Country;
