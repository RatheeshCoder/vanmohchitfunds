import React, { useState, useEffect } from "react";
import { jobData } from "../../../../data/data";
import RegistrationForm from "./Form";
import openimg from "../../../../asset/imgs/jobOpenimg.png";
import closeimg from "../../../../asset/imgs/jobCloseimg.png";

const Cards = () => {
  const [filter, setFilter] = useState("all");
  const [isActive, setActive] = useState(false);
  const [isSidebarHidden, setSidebarHidden] = useState(window.innerWidth < 720);
  const jobTitles = ["all", "Coimbatore", "Karamadai", "Coonoor","Thudiyalur","Ooty"];

  const toggleActive = () => {
    setActive(!isActive);
  };

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  const filteredJobs = jobData.filter(
    (job) => filter === "all" || job.office === filter
  );

  useEffect(() => {
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 720);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Main">
      {window.innerWidth < 720 && (
        <button
          onClick={toggleSidebar}
          className="sidebar-button cta-job-button"
          style={{ backgroundColor: "white", color: "white" }}
        >
          {isSidebarHidden ? (
            <img
              src={openimg}
              alt="Show Jobs Titles"
              style={{
                width: "50px",
                marginLeft: "20px",
                transition: "transform 0.5s ease-in-out",
                transform: isSidebarHidden
                  ? "rotateY(0deg)"
                  : "rotateY(180deg)",
              }}
            />
          ) : (
            <img
              src={closeimg}
              alt="Hide Jobs Titles"
              style={{
                width: "50px",
                marginLeft: "20px",
                transition: "transform 0.5s ease-in-out",
                transform: isSidebarHidden
                  ? "rotateY(0deg)"
                  : "rotateY(180deg)",
              }}
            />
          )}
        </button>
      )}
  {!isSidebarHidden && (
  <div className={`sidenavbar ${isActive ? "active" : ""}`}>
    <div className="wrapper">
      <li
        onClick={toggleActive}
        className={`bg-[#0c52a6] brand-dropdown ${isActive ? "active" : ""}`}
      >
        JOB TITLES ↓
      </li>
      {jobTitles.map((office) => (
        <li
          className={`jobFilter ${filter === office ? "active" : ""}`}
          key={office}
          onClick={() => {
            setFilter(office);
            setActive(false);
          }}
        >
          {office === "all" ? "All Jobs" : office}
        </li>
      ))}
    </div>
  </div>
)}

      <div className="job-listings">
        {filteredJobs.map((job) => (
          <div
          key={job.id}
          className="relative flex flex-col items-stretch flex-1 p-8 border-2 rounded-xl cta-job-card"
        >
          <div>
            <h4 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium text-center text-black text-indigo-600">
              {job.title}
            </h4>
            <p className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
              {job.office}
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              {job.experience}
            </p>
          </div>
          <div className="py-8 space-y-3">
            <div className="flex items-center gap-5">
              <div className="flex flex-col">
                <p className="text-base sm:text-lg">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-end flex-1">
            <RegistrationForm />
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Cards;
