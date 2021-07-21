import React from "react";
import styled from "styled-components";

const ok = "green";

const UserPic = styled.div`
//  background-color: ${(props) => props.theme.backgroundColor}
  height: ${(props) => props.theme.size}px;
  width: ${(props) => props.theme.size}px;
  background-image: url(${(props) => props.theme.src});
  background-size: ${(props) => props.theme.size}px;
  margin: ${(props) => props.theme.margin}px;

  &:hover {
    color: ${(props) => props.theme.hoverColors}px;
  }
`;

const ColoredUserPic = ({ bgc, size, src, backgroundColor }) => {
  return (
    <UserPic theme={{ bgc, size, src, backgroundColor }}>
    </UserPic>
  );
};

export default ColoredUserPic;
