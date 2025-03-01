import React from "react";
import Tab from "../components/Tab";

function Price() {
  return (
    <div>
      <section className=" w-full white h-full">
        <div className="container">
          <div className=" w-full h-[80%] ">
            <div className="w-full rounded-3xl">
              <div className="flex gap-3 justify-center w-2xs mx-auto bg-brown text-white rounded-3xl"></div>
              <Tab />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Price;
