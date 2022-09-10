import styled from "styled-components"

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    "header"
    "content"
    "footer";
  font-family: "Open Sans", sans-serif;
  /* To keep footer at bottom. The rest is in gatsby-browser */
  height: 100%;

  header {
    grid-area: header;

    .content {
      padding: 1rem 2rem;
    }
  }

  .content {
    grid-area: content;

    main {
      padding: 1rem 2rem;
    }
  }

  footer {
    grid-area: footer;

    .content {
      padding: 1rem 2rem;
    }
  }
`
