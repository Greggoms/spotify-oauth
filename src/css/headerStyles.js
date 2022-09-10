import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${props => props.theme.grayscale.dark2};

  h1 {
    a {
      font-size: 20pt;
      text-decoration: none;
      color: ${props => props.theme.grayscale.light1};
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${props => props.theme.grayscale.light2};
    }
  }
`
