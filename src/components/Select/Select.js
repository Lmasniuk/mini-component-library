import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 2rem;
`;

const CustomSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  position: absolute;
  top: 2rem;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <CustomSelect>
        {value}
        <Icon id="chevron-down" />
      </CustomSelect>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </>
  );
};

export default Select;
