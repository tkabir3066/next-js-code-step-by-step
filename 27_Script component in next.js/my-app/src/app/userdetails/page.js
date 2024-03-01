"use client";
import Script from "next/script";
import React from "react";

const Page = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file is loaded");
        }}
      />
      <h1>Get user geolocation</h1>
    </div>
  );
};

export default Page;
