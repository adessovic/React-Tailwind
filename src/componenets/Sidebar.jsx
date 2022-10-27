import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../data/SidebarData";

const Sidebar = () => {
  const activeLink =
    "hover:bg-blue-900 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-blue-900";
  const normalLink =
    "hover:bg-blue-900 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold";
  return (
    <>
      <section>
        <div className="text-white">
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={ ( { isActive } ) => isActive ? activeLink : normalLink } end>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
