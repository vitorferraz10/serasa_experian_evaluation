import styled from "styled-components";

export const Star = styled.span<{ color: "gold" | "gray" }>`
  cursor: pointer;
  color: ${(props) => props.color};
  font-size: 40px;
`;
