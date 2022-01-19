import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import {isColor} from "../helpers/isColor";

const ToggleSwitchWrapper = styled.div(() => ({
  position: "relative",
  marginLeft: 4,
  marginRight: 14,
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
      // background: props.switchImage ? `center/contain url(${"./img.png"}) ${props.switchColor}` : `${props.switchColor}`,
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
    background: props.switchImage ? `center/contain url(${props.switchImage}) ${props.switchColor}` : `${props.switchColor}`,
    display: "block",
    borderRadius: "50%",
    width: "26px",
    height: "26px",
    margin: "4px",
    boxShadow: "1px 3px 3px 1px rgba(0, 0, 0, 0.2)",
    transition: "0.4s",
  }
}));

const ToggleSwitch = ({backgroundChecked = "#4fbe79", backgroundUnchecked = "#bebebe", checked = false, setChecked, switchColor = "#fff", switchImage}) => {
  const handleChange = (e) => {
    setChecked(e.target.checked)
  }
  const toggleId = uuidv4()

  return (
    <>
      <ToggleSwitchWrapper>
        <ToggleSwitchInput
          backgroundChecked={isColor(backgroundChecked) && backgroundChecked}
          checked={checked}
          id={toggleId}
          onChange={handleChange}
          switchColor={isColor(switchColor) && switchColor}
          switchImage={switchImage}
          type="checkbox"
        />
        <ToggleSwitchLabel
          htmlFor={toggleId}
          backgroundUnchecked={isColor(backgroundUnchecked) && backgroundUnchecked}
          switchColor={isColor(switchColor) && switchColor}
          switchImage={switchImage}
        />
      </ToggleSwitchWrapper>
    </>
  );
};

ToggleSwitch.propTypes = {
  backgroundChecked: PropTypes.string,
  backgroundUnchecked: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
  switchColor: PropTypes.string,
  switchImage: PropTypes.string,
};

export default ToggleSwitch;
