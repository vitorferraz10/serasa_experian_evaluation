import styled from "styled-components";

export const Button = styled.button<{ size?: "large" | "medium" | "small" }>`
  width: ${({ size }) =>
    size === "large" ? "300px" : size === "small" ? "100px" : "200px"};
  padding: 10px 20px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text.dark.dark_high};
  border: 2px solid ${({theme}) => theme.colors.text.dark.dark_high};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.desktop.body_m};
  font-family: ${({ theme }) => theme.font.family.body};
  font-weight: ${({theme}) => theme.font.weight.bold};
  transition: 0.4s;

  &:hover, &:focus {
    filter: brightness(0.9);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
