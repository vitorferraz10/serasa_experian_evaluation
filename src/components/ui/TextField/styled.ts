import styled from "styled-components";

export const InputTextField = styled.input`
  height: 40px;
  width: 300px;
  padding: 12px;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(221, 223, 228);
  border-radius: 8px;
  transition: border 250ms ease-in 0s, box-shadow 250ms ease-in 0s;

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.text.dark.dark_low};
  }
`;
