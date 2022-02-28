import React, { useState } from "react";
import * as Md from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/actions/auth";

/* ----- STYLE IMPORTS ----- */
import { H1, H2, H3, H4, H5 } from "../styles/globalstyles";
import {
  SideBarWrapper,
  NavItemsWrapper,
  MenuToggleWrap,
  UL,
  LI,
  UserImg,
  SeccondaryButton,
} from "./SideBarStyles";

/* ----- COMPONENT IMPORTS ----- */

const SideBar = () => {

  const [toggleIcon, setToggleIcon] = useState(false);
  const [expandSideBar, setExpandSideBar] = useState(false);

  const { user_data } = useSelector((state) => state.auth);
  const { username } = user_data;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/", { replace: true });
  };
  
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    setExpandSideBar(!expandSideBar);
  }; 

  return (
    <SideBarWrapper isexpanded={expandSideBar}>
      <MenuToggleWrap isexpanded={expandSideBar}>
        {toggleIcon ? (
          <Md.MdOutlineArrowForwardIos onClick={handleToggleIcon} size={22} />
        ) : (
          <Md.MdOutlineArrowBackIosNew onClick={handleToggleIcon} size={22} />
        )}
      </MenuToggleWrap>
      <NavItemsWrapper isexpanded={expandSideBar}>
        {expandSideBar && (
          <UL>
            <H2>Menu</H2>
            <LI>
              <UserImg />
              <H3>{username}</H3>
            </LI>
            <LI>
              <H3>My lists</H3>
            </LI>
            <LI>
              <H3>Logout</H3>
              <SeccondaryButton onClick={handleLogout}>Logout</SeccondaryButton>
            </LI>
          </UL>
        )}
      </NavItemsWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;
