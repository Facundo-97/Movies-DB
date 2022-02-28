import React from "react";
import { useSelector } from "react-redux";
import { H3 } from "../styles/globalstyles";

import { NavBarWrapper } from "./NavBarStyles";
import SearchInput from "./SearchInput";
import SideBar from "./SideBar";

const NavBar = () => {
  const { login_succes } = useSelector((state) => state.auth);

  return (
    <NavBarWrapper>
      {login_succes && <SideBar/>}
      <H3>The Movie DB</H3>
      {login_succes && <SearchInput />}
    </NavBarWrapper>
  );
};

export default NavBar;
