import React, { useState } from "react";
import Header from "../components/header";
import Cities from "../components/cities";

const City = () => {
  return (
    <>
      <div className="div-container">
      <Header/>
      <Cities/>
      </div>
    </>
  );
};

export default City;