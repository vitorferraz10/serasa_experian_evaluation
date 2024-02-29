import styled from 'styled-components'

export const Button = styled.button`
width: 200px;
  padding: 10px 20px;
  background-color: #fff;
  color: ${({theme}) => theme.colors.text.brand.default};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: ${({theme}) => theme.font.size.desktop.body_m};
  font-family: ${({theme}) => theme.font.family.body};

  &:hover {
    filter: brightness(0.5);
  }
`