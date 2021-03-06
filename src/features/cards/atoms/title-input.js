import styled from "styled-components"

export const TitleInput = styled.input`
  box-sizing: border-box;
  background-color: inherit;
  color: currentColor;
  outline: none;
  box-shadow: none;
  border: none;
  font-size: 1.8em;
  margin-bottom: 1rem;

  ${({ theme }) => theme.embed.card}
`
