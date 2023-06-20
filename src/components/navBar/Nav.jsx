import React, { useState } from "react";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import userImg from "../../assets/userImg.png";
import Search from "../searchBar/Search";

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl text-[#406072] cursor-pointer">
          CONNECTCLUB
        </div>

        <div className="flex justify-between gap-2 items-center">
          <BsSearch
            size={24}
            color="#034e7c"
            className="cursor-pointer"
            onClick={handleSearch}
          />

          <IoMdNotifications
            size={24}
            color="#034e7c"
            className="cursor-pointer"
          />
          <div className="flex items-center gap-1">
            <div className="w-[30px] h-[30px] rounded-lg">
              <img src={userImg} alt="avatar" className="cursor-pointer" />
            </div>
            <BsChevronDown size={24} color="grey" className="cursor-pointer" />
          </div>
        </div>
      </div>
      {showSearch && (
        <div className="w-full h-full sm:w-[500px] sm:h-20 m-auto p-2">
          <Search />
        </div>
      )}
    </>
  );
};

export default Nav;
