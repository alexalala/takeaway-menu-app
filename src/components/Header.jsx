import React from 'react';
import styled from 'styled-components';

import TakeawayImage from '../assets/images/takeaway-board.svg';

const StyledHeader = styled(Header)`
    background: #f3f3f3;
    display: inline-flex;
    width: 100%;
    align-items: center;
    font-family: serif;
    color: red;
    font-size: 1.25rem;
`;

const StyledTakeaway = styled.img`
  height: 15rem;
  margin: 5rem;
  transform: rotate(-6deg);
`;

function Header(props) {
  return (
    <div className={props.className}>
      <StyledTakeaway src={TakeawayImage} alt="Cork board with takeaway flyers"/>
      <h1>takeawaymenu.app</h1>
    </div>
  )
}

export default StyledHeader;
