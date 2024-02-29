import styled from "styled-components";

export const Star = styled.span<{ colorstar: "gold" | "gray" }>`
  cursor: pointer;
  color: ${(props) => props.colorstar};
  font-size: 40px;
`;
