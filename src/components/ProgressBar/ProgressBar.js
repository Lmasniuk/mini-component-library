/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  return <div>
    <label>{value}%</label>
    <StyledProgressBar max={100} value={value}></StyledProgressBar>


  </div>
  
};


const StyledProgressBar = styled.progress`

`;

export default ProgressBar;
