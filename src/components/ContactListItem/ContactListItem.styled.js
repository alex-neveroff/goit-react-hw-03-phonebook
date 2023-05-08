import styled from '@emotion/styled';
import { transitions } from 'Variables/transitions';
import { colors } from 'Variables/colors';

export const ContactsItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
`;

export const ContactName = styled.p`
  font-size: 18px;
`;

export const ContactNumber = styled.p`
  font-size: 18px;
  justify-self: center;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;
  justify-self: end;
  color: red;
  transition: color ${transitions.transition},
    box-shadow ${transitions.transition};

  &:hover,
  &:focus {
    box-shadow: 0px 0px 15px ${colors.focusShadow};
    outline: none;
  }
  &:active {
    color: ${colors.mainShadow};
  }
`;

export const Cross = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const CrossLine = styled.path`
  stroke: currentColor;
`;
