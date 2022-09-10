import styled from "styled-components"

export const HomepageContainer = styled.section`
  height: 100%;

  .login {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin-bottom: 1rem;
    color: ${props => props.theme.grayscale.light1};
  }

  a.login-btn {
    text-decoration: none;
    color: ${props => props.theme.grayscale.light1};
    background: ${props => props.theme.grayscale.dark4};
    border: 3px solid ${props => props.theme.colors.green};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`
