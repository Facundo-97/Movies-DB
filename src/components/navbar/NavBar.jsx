import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Md from "react-icons/md";

import { logoutUser } from "../../redux/actions/auth";


import {
  H3,
  MenuWrapper,
  NavBarWrapper,
  UserImg,
  FloatMenu,
  UlMenu,
  MenuItem,
  LogoutButton,
} from "../styles/globalstyles";

const NavBar = () => {
  const { login_succes, user_data } = useSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/", { replace: true });
  };
  const handleMenu = () => {
      setShowMenu(!showMenu);
  }
  useEffect( () => {
    setShowMenu(false);
  },[navigate])

  const hanldeNavigate = (path) =>{
    navigate(`/${path}`, {replace: false});
  }


  return (
    <NavBarWrapper>
      <H3 onClick={() => hanldeNavigate("main")}>The Movie DB</H3>
      {login_succes && (
        <MenuWrapper >
          <UserImg onClick={handleMenu}/>
          <H3 onClick={handleMenu}>{user_data.username}</H3>
          {showMenu && 
          <FloatMenu showMenu={showMenu}
          >
            <UlMenu>
              <MenuItem>
              Account
              <Md.MdOutlineAccountCircle size={18}/>
              </MenuItem>
              <MenuItem onClick={() => hanldeNavigate("search")}>
              Search
              <Md.MdSearch size={18}/>
              </MenuItem>
              <MenuItem>
              My lists
              <Md.MdBookmarkAdd size={18}/>
              </MenuItem>
              <MenuItem>
              Rated 
              <Md.MdStarRate size={18}/>
              </MenuItem>
              <LogoutButton onClick={handleLogout}>
                Logout
              </LogoutButton>
            </UlMenu>
          </FloatMenu>
          }
        </MenuWrapper>
      )}
    </NavBarWrapper>
  );
};

export default NavBar;
