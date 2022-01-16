import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {isColor} from "../helpers/isColor";

const SnackBarContainer = styled.div((props) => ({
  backgroundColor: props.snackbarVariant === "success" ? "green" : props.snackbarVariant === "error" ? "red" : props.backgroundColor,
  borderRadius: "10px",
  bottom: "10%",
  boxShadow: "0px 0px 10px",
  color: "black",
  left: "50%",
  padding: "20px",
  position: "fixed",
  transform: "translateX(-50%)",
  "& p": {
    color: (props.snackbarVariant === "success" || props.snackbarVariant === "error") ? "white" : props.color,
    fontSize: "24px",
    margin: 0,
  },
}));

const Snackbar = ({
                    backgroundColor = "#fff",
                    color = "#000",
                    snackbarOpen,
                    setSnackbarOpen,
                    snackbarVariant,
                    snackbarMessage,
                    timeout = 2000
                  }) => {
  // Following state is used for clearing timeout function when Snackbar props change value while Snackbar opened
  const [lastTimer, setLastTimer] = useState(0)
  // let TIME = (timeout - 500) / 1000 + "s"; // May stay for future animations.

  useEffect(() => {
    lastTimer && clearTimeout(lastTimer)
    if (snackbarOpen) {
      const timer = setTimeout(() => setSnackbarOpen(false), timeout);
      setLastTimer(timer)
    }
  }, [backgroundColor, color, snackbarOpen, setSnackbarOpen, snackbarVariant, snackbarMessage, timeout])

  return (
    snackbarOpen && (
      <SnackBarContainer
        backgroundColor={isColor(backgroundColor) && backgroundColor}
        color={isColor(color) && color}
        snackbarVariant={snackbarVariant}
      >
        <p>{snackbarMessage}</p>
      </SnackBarContainer>
    )
  );
};

Snackbar.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  setSnackbarOpen: PropTypes.func.isRequired,
  snackbarMessage: PropTypes.string.isRequired,
  snackbarOpen: PropTypes.bool.isRequired,
  snackbarVariant: PropTypes.string,
  timeout: PropTypes.number,
};

export default Snackbar;
