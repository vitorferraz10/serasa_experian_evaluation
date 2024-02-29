import styled from "styled-components";
import { TooltipTextProps } from ".";

export const TooltipContainer = styled.div`
  position: absolute;
  top: 0;
  display: inline-block;
  width: 100%;
  height: 35%;
`;

export const TooltipText = styled.div<TooltipTextProps>`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text.brand.default};
  color: white;
  text-align: center;
  border-radius: 6px;
  z-index: 1;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.3s;

  color: ${({theme}) => theme.colors.text.neutral.light_solid};
  font-size: ${({ theme }) => theme.font.size.desktop.display};
  font-family: ${({ theme }) => theme.font.family.body};
  font-weight: ${({theme}) => theme.font.weight.bold};
`;
