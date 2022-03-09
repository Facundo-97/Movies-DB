import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navigateToMovie } from '../../redux/actions/actions';

import * as Md from "react-icons/md";

import { FloatingWrapper, ButtonMenu, ActionMenu, ActionList, ListItem } from '../styles/globalstyles';

const ButtonAction = ({movie}) => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const handleSeeMore = (movie) =>{
  
    dispatch(navigateToMovie(movie));
    navigate("/movieinfo", {replace: false});

  }

  return (
    <FloatingWrapper isActive={isActive}>
    <ButtonMenu>
    {isActive ? 
    <Md.MdClear onClick={handleToggle} size={22} isActive={isActive} /> 
    : 
    <Md.MdMoreVert onClick={handleToggle} size={22} isActive={isActive} />
    }
    </ButtonMenu>
    {isActive ?
      <ActionMenu>
        <ActionList>
          <ListItem onClick={() => handleSeeMore(movie)}>See more</ListItem>
          <ListItem>Rate movie</ListItem>
          <ListItem>Add to list</ListItem>
        </ActionList>
      </ActionMenu> 
      : null}
      </FloatingWrapper>
  )
}

export default ButtonAction