import styled from "styled-components"

export const FooterContainer = styled.footer`
  color: ${props => props.theme.grayscale.light1};
  background: ${props => props.theme.grayscale.dark2};

  a {
    color: ${props => props.theme.grayscale.light2};
  }
`
