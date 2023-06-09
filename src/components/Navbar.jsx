import React from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ReactComponent as Logo } from "../tracktrades_logo.svg";

function Navbar() {
  return (
    <div className=" py-3 px-16 shadow-lg border-b-2 flex justify-between">
      <div>
        <Logo />
      </div>
      <div className=" flex justify-between w-9/12">
        <div className=" flex gap-x-7 font-medium pt-1">
          <div>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 capitalize align-middle"
                  : "text-black capitalize align-middle"
              }
            >
              dashboard
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/ooptionchain"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 capitalize align-middle"
                  : "text-black capitalize align-middle"
              }
            >
              option chain
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/strategy"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 capitalize align-middle"
                  : "text-black capitalize align-middle"
              }
            >
              strategy builder
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/positions"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 capitalize align-middle"
                  : "text-black capitalize align-middle"
              }
            >
              positions
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/orderbook"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 capitalize align-middle"
                  : "text-black capitalize align-middle"
              }
            >
              order book
            </NavLink>
          </div>
        </div>
        <div className=" flex gap-x-7">
          <div>
            <p className=" leading-tight text-right uppercase text-xs text-gray-500">
              nifty
            </p>
            <div className=" flex gap-x-2">
              <sub className=" pt-3 text-green-600">0.35%</sub>
              <p>18,245.32</p>
            </div>
          </div>
          <div>
            <p className=" leading-tight text-right uppercase text-xs text-gray-500">
              Banknifty
            </p>
            <div className=" flex gap-x-2">
              <sub className=" pt-3 text-green-600">0.7%</sub>
              <p>39,6156.1</p>
            </div>
          </div>
          <div>
            <p className=" leading-tight text-right text-xs uppercase text-gray-500">
              India Vix
            </p>
            <div className=" flex gap-x-2">
              <sub className=" pt-3 text-red-500">-10.9%</sub>
              <p>12.12</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center pt-2">
        <p>Profile</p>
        <div>
          <span>
            <MdKeyboardArrowDown size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
