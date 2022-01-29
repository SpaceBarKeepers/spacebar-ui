import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {isColor} from "../helpers/isColor";

const AvatarContainer = styled.div(props =>({
  alignItems: "center",
  backgroundColor: props.backgroundColor,
  borderRadius: props.variant === "rounded" ? 5 : props.variant === "circle" ? "50%" : 0,
  display: "flex",
  height: props.size,
  justifyContent: "center",
  margin: 5,
  overflow: "hidden",
  width: props.size,
  "& img": {
    width: props.size,
    height: props.size,
    objectFit: "cover",
  }
}));

const Avatar = ({children, backgroundColor = "#ccc", size = 40, variant}) => {
  return (
    <AvatarContainer
      backgroundColor={isColor(backgroundColor) && backgroundColor}
      size={size}
      variant={variant && variant}
    >
      {children}
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  variant: PropTypes.string,
};

export default Avatar;
