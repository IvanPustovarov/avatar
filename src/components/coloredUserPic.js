import React from "react";
import styled from "styled-components";

const PERCENT = 50;
const DEG = 90;

const UserPic = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  background-image: url(${(props) => props.theme.src});
  background-size: ${(props) =>
    props.theme.size - (props.theme.colorWidth + props.theme.margin)}px;
  height: ${(props) => props.theme.size - props.theme.colorWidth}px;
  width: ${(props) => props.theme.size - props.theme.colorWidth}px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${PERCENT}%;
  margin: auto;
  position: absolute;
  top: ${PERCENT}%;
  left: ${PERCENT}%;
  margin: ${(props) => -(props.theme.size - props.theme.colorWidth) / 2}px 0 0
    ${(props) => -(props.theme.size - props.theme.colorWidth) / 2}px;
`;

const UserPicDiv = styled.div`
  height: ${(props) => props.over.size}px;
  width: ${(props) => props.over.size}px;
  border-radius: ${PERCENT}%;
  background-image: linear-gradient(
    ${DEG}deg,
    ${(props) => props.over.colors[0]},
    ${(props) => props.over.colors[1]}
  );
  &:hover {
    background-image: linear-gradient(
      ${DEG}deg,
      ${(props) => props.over.hoverColors[0]},
      ${(props) => props.over.hoverColors[1]}
    );
  }
  position: relative;
`;

const ColoredUserPic = ({
  size,
  src,
  backgroundColor,
  margin,
  colorWidth,
  colors,
  hoverColors,
}) => {
  return (
    <UserPicDiv over={{ size, colors, hoverColors }}>
      <UserPic
        theme={{ size, backgroundColor, src, margin, colorWidth }}
      ></UserPic>
    </UserPicDiv>
  );
};

export default ColoredUserPic;
