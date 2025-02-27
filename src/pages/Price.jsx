import React from "react";
import Tab from "../components/Tab";

function Price() {
  return (
    <div className=" w-full white h-full">
      <div className="max-w-[1920px] mx-auto">
        <div className=" w-full h-[80%] px-[142px] py-32">
          <div className="w-full rounded-3xl">
            <div className="flex gap-3 justify-center w-2xs mx-auto bg-brown text-white rounded-3xl"></div>
            <Tab />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
