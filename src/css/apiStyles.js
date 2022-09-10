import styled from "styled-components"

export const ResponseContainer = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 2rem;

  aside {
    grid-column: 1;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .response-content {
    grid-column: 2;

    .current-song {
      display: flex;
      gap: 1rem;

      ul {
        list-style-type: none;
      }

      &__info {
        display: flex;
        flex-direction: column;

        .artist {
          flex: 1;
        }
        .album {
          justify-self: flex-end;
        }
        span {
          font-size: 10pt;
          color: ${props => props.theme.grayscale.light2};
        }
      }
    }

    .recently-played {
      ul {
        margin-left: 2rem;
      }
    }
  }
`

export const Button = styled.button`
  cursor: pointer;
  color: ${props => props.theme.grayscale.light1};
  background: ${props => props.theme.colors.green};
  padding: 0.25rem;
`
