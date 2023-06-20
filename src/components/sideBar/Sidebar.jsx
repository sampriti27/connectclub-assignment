import React from "react";
import { GrUpdate } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { AiFillFileExcel } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="py-4 w-full sm:w-[400px] shadow-sm h-full">
        <div className="text-xl text-[#2e2c25]  border-b-2 border-gray-300 h-[60px]">
          {" "}
          <h2 className="px-4 ml-3">Settings</h2>
        </div>
        <div className="flex flex-col mt-10">
          <div className="text-xl text-[#2e2c25] flex items-center border-b-2 border-gray-300 h-[60px] hover:bg-gray-300 cursor-pointer">
            {" "}
            <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center ml-5 mb-2 ">
              <GrUpdate />
            </div>
            <p className="px-4">Update Password</p>
          </div>
          <div className="text-xl text-[#2e2c25] flex items-center border-b-2 border-gray-300 h-[60px] hover:bg-gray-300 cursor-pointer">
            {" "}
            <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center ml-5  mb-2">
              <IoMdSettings />
            </div>
            <p className="px-4">Privacy Settings</p>
          </div>
          <div className="text-xl text-[#2e2c25] flex items-center border-b-2 border-gray-300 h-[60px] hover:bg-gray-300 cursor-pointer">
            {" "}
            <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center ml-5  mb-2">
              <AiFillFileExcel />
            </div>
            <p className="px-4">Report Error</p>
          </div>
          <div className="text-xl text-[#2e2c25] flex items-center border-b-2 border-gray-300 h-[60px] hover:bg-gray-300 cursor-pointer">
            {" "}
            <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center ml-5  mb-2">
              <MdOutlineFeedback color="grey" />
            </div>
            <p className="px-4">Feedback</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
