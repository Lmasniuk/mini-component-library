import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CustomSelect = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 1rem;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  display: flex;
  gap: 1rem;
  align-items: center;

  ${NativeSelect}:focus + & {
    outline: 2px dotted black;
    outline: 2px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={2} size={24} />
      </CustomSelect>
    </Wrapper>
  );
};

export default Select;
