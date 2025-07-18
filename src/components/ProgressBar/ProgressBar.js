/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--progressBarBorderRadius": "4px",
    "--progressBoxBorderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--progressBarBorderRadius": "4px",
    "--progressBoxBorderRadius": "4px",
  },
  large: {
    "--height": "24px",
    "--progressBarBorderRadius": "4px",
    "--progressBoxBorderRadius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <div>
      <ProgressLabel>{value}%</ProgressLabel>
      <StyledProgressBar
        max={100}
        value={value}
        style={styles}
      ></StyledProgressBar>
    </div>
  );
};

const ProgressLabel = styled.h1`
  margin-left: 5rem;
  margin-bottom: 1rem;
`;

const StyledProgressBar = styled.progress`
  appearance: none;
  width: 70%;
  height: var(--height);

  &::-webkit-progress-bar {
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--progressBoxBorderRadius);
    background-color: ${COLORS.transparentGray35};
    padding: var(--padding);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--progressBarBorderRadius) 0 0
      var(--progressBarBorderRadius);
  }
`;

export default ProgressBar;
