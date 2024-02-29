import styled from "styled-components";

export const Star = styled.span<{ colorStar: "gold" | "gray" }>`
  cursor: pointer;
  color: ${(props) => props.colorStar};
`;
