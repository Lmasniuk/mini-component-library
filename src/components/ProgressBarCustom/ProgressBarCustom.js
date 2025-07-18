/* eslint-disable no-unused-vars */
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--progressBarBorderRadius": "4px",
    "--progressBoxBorderRadius": "4px",
    "--padding": "0",
  },
  medium: {
    "--height": "12px",
    "--progressBarBorderRadius": "4px",
    "--progressBoxBorderRadius": "4px",
    "--padding": "0",
  },
  large: {
    "--height": "24px",
    "--progressBarBorderRadius": "4px",
    "--progressBoxBorderRadius": "8px",
    "--padding": "4px",
  },
};

const ProgressBarCustom = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <>
      <ProgressLabel>{value}%</ProgressLabel>
      <ProgressBarContainer style={styles}>
        <ProgressBar size={size} value={value}></ProgressBar>
      </ProgressBarContainer>
    </>
  );
};

const ProgressLabel = styled.h1`
  margin-left: 7rem;
  margin-bottom: 1rem;
`;

const ProgressBarContainer = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray35};
  border-radius: var(--progressBoxBorderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const ProgressBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;

  ${(p) =>
    p.value > 98
      ? `border-radius: var(--progressBarBorderRadius) calc(var(--progressBarBorderRadius) - (100 - ${p.value}) * 0.5px)
    calc(var(--progressBarBorderRadius) - (100 - ${p.value}) * 0.5px) var(--progressBarBorderRadius);`
      : `border-radius: var(--progressBarBorderRadius) 0 0
    var(--progressBarBorderRadius);`}

  ${(p) =>
    p.size === "large"
      ? `height: calc(var(--height) - var(--padding) - var(--padding) );`
      : `height : var(--height);`}
`;
export default ProgressBarCustom;
