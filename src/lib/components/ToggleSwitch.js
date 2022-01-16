import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {isColor} from "../helpers/isColor";

const ToggleSwitchWrapper = styled.div(props => ({
  position: "relative",
}));

const ToggleSwitchInput = styled.input(props => ({
  opacity: 0,
  zIndex: 1,
  borderRadius: "15px",
  width: "42px",
  height: "26px",
  "&:checked + label": {
    background: props.backgroundChecked,
    "&:after": {
      content: "",
      display: "block",
      borderRadius: "50%",
      width: "26px",
      height: "26px",
      marginLeft: "28px",
      transition: "0.4s",
    }
  }
}));

const ToggleSwitchLabel = styled.label(props => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "60px",
  height: "34px",
  borderRadius: "34px",
  background: props.backgroundUnchecked,
  cursor: "pointer",
  "&:after": {
    content: "''",
    display: "block",
    borderRadius: "50%",
    width: "26px",
    height: "26px",
    margin: "4px",
    background: props.switchColor,
    boxShadow: "1px 3px 3px 1px rgba(0, 0, 0, 0.2)",
    transition: "0.4s",
  }
}));

const ToggleSwitch = ({backgroundChecked = "#4fbe79", backgroundUnchecked = "#bebebe", switchColor = "#fff"}) => {
  return (
    <>
      <ToggleSwitchWrapper>
        <ToggleSwitchInput
          backgroundChecked={isColor(backgroundChecked) && backgroundChecked}
          id="toggle"
          type="checkbox"
        />
        <ToggleSwitchLabel
          htmlFor="toggle"
          backgroundUnchecked={isColor(backgroundUnchecked) && backgroundUnchecked}
          switchColor={isColor(switchColor) && switchColor}
        />
      </ToggleSwitchWrapper>
    </>
  );
};

ToggleSwitch.propTypes = {
  backgroundChecked: PropTypes.string.isRequired,
  backgroundUnchecked: PropTypes.string.isRequired,
  switchColor: PropTypes.string.isRequired,
};

export default ToggleSwitch;
