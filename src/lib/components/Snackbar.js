import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

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

  function isColor(strColor) {
    const regHex = /^#([0-9a-f]{3}){1,2}$/i;
    const regRgb = /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/gm
    const regRgba = /^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/gm
    const regHsl = /^hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*[)]$/gm
    const regHsla = /^hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/gm
    const s = new Option().style;
    s.color = strColor;
    return regHex.test(strColor)
      ? true : regRgb.test(strColor)
        ? true : regRgba.test(strColor)
          ? true : regHsl.test(strColor)
            ? true : regHsla.test(strColor)
              ? true : s.color === strColor;
  }

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
