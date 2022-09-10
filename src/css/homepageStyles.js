import styled from "styled-components"

export const HomepageContainer = styled.section`
  h1 {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.grayscale.light1};
    background: ${props => props.theme.colors.linkDark};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`
