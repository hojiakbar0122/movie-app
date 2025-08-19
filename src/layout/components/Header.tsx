import { memo} from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/header-logo.svg";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 px-60 ">
      <img src={`${logo}`} alt="" />
      <div className="flex gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/movie"}>Movie</NavLink>
        <NavLink to={"/search"}>Search</NavLink>
      </div>
      <div className="flex gap-4">
        <select name="" id=""></select>
        <button>login</button>
      </div>
    </div>
  );
};

export default memo(Header);
