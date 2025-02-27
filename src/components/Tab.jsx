import React, { useState } from "react";

function Tab() {
  const [activeTab, setActiveTab] = useState("Pickup");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="sm:flex sm:flex-col sm:align-center p-10">
        <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
          <button
            type="button"
            className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
              activeTab === "Pickup"
                ? "bg-slate-50 border-slate-50 text-slate-900 shadow-sm"
                : "border-transparent text-slate-900"
            }`}
            onClick={() => handleTabClick("Pickup")}
            aria-selected={activeTab === "Pickup"}
          >
            Pickup
          </button>
          <button
            type="button"
            className={`ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
              activeTab === "Deliver"
                ? "bg-slate-50 border-slate-50 text-slate-900 shadow-sm"
                : "border-transparent text-slate-900"
            }`}
            onClick={() => handleTabClick("Deliver")}
            aria-selected={activeTab === "Deliver"}
          >
            Deliver
          </button>
        </div>
        <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
          {/* PICKUP SMALL */}
          {activeTab === "Pickup" && (
            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold text-slate-900">
                  Small
                </h2>
                <p className="mt-2 text-base text-slate-700 leading-tight">
                  For creators with multiple ideas who want to efficiently test
                  and refine them.
                </p>
                <p className="mt-8">
                  <span className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-white text-center text-4xl font-bold tracking-tighter">
                    ₱1600
                  </span>
                </p>
                <a
                  href="/sign-up"
                  className="text-base font-medium text-slate-500 text-center block mt-2"
                >
                  6 Gallon
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      All Free features
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      5 landing pages included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      50,000 visits/mo
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1,000 conversion actions included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1% payment commission
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* PICKUP MEDIUM */}
          {activeTab === "Pickup" && (
            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold text-slate-900">
                  Medium
                </h2>
                <p className="mt-2 text-base text-slate-700 leading-tight">
                  For creators with multiple ideas who want to efficiently test
                  and refine them.
                </p>
                <p className="mt-8">
                  <span className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-white text-center text-4xl font-bold tracking-tighter">
                    ₱1800
                  </span>
                </p>
                <a
                  href="/sign-up"
                  className="text-base font-medium text-slate-500 text-center block mt-2"
                >
                  6 Gallon
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      All Free features
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      5 landing pages included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      50,000 visits/mo
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1,000 conversion actions included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1% payment commission
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* PICKUP LARGE */}
          {activeTab === "Pickup" && (
            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold text-slate-900">
                  Large
                </h2>
                <p className="mt-2 text-base text-slate-700 leading-tight">
                  For creators with multiple ideas who want to efficiently test
                  and refine them.
                </p>
                <p className="mt-8">
                  <span className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-white text-center text-4xl font-bold tracking-tighter">
                    ₱2400
                  </span>
                </p>
                <a
                  href="/sign-up"
                  className="text-base font-medium text-slate-500 text-center block mt-2"
                >
                  6 Gallon
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      All Free features
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      5 landing pages included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      50,000 visits/mo
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1,000 conversion actions included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1% payment commission
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* DELIVER SMALL */}
          {activeTab === "Deliver" && (
            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold text-slate-900">
                  Small
                </h2>
                <p className="mt-2 text-base text-slate-700 leading-tight">
                  For creators with multiple ideas who want to efficiently test
                  and refine them.
                </p>
                <p className="mt-8">
                  <span className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-white text-center text-4xl font-bold tracking-tighter">
                    ₱1800
                  </span>
                </p>
                <a
                  href="/sign-up"
                  className="text-base font-medium text-slate-500 text-center block mt-2"
                >
                  6 Gallon
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      All Free features
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      5 landing pages included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      50,000 visits/mo
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1,000 conversion actions included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1% payment commission
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* DILIVER MEDIUM */}
          {activeTab === "Deliver" && (
            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold text-slate-900">
                  Medium
                </h2>
                <p className="mt-2 text-base text-slate-700 leading-tight">
                  For creators with multiple ideas who want to efficiently test
                  and refine them.
                </p>
                <p className="mt-8">
                  <span className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-white text-center text-4xl font-bold tracking-tighter">
                    ₱1900
                  </span>
                </p>
                <a
                  href="/sign-up"
                  className="text-base font-medium text-slate-500 text-center block mt-2"
                >
                  6 Gallon
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      All Free features
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      5 landing pages included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      50,000 visits/mo
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1,000 conversion actions included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1% payment commission
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* DILIVER LARGE */}
          {activeTab === "Deliver" && (
            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
              <div className="p-6">
                <h2 className="text-xl leading-6 font-bold text-slate-900">
                  Large
                </h2>
                <p className="mt-2 text-base text-slate-700 leading-tight">
                  For creators with multiple ideas who want to efficiently test
                  and refine them.
                </p>
                <p className="mt-8">
                  <span className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-white text-center text-4xl font-bold tracking-tighter">
                    ₱2600
                  </span>
                </p>
                <a
                  href="/sign-up"
                  className="text-base font-medium text-slate-500 text-center block mt-2"
                >
                  6 Gallon
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      All Free features
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      5 landing pages included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      50,000 visits/mo
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1,000 conversion actions included
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-base text-slate-700">
                      1% payment commission
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tab;
