import styled from "styled-components";

export const FlightPageContainer = styled.section``;

export const Title = styled.h1`
  font-size: var(--font-xxxl);
  span {
    font-weight: 700;
  }
`;

export const Text = styled.p`
  max-width: 75ch;
  margin-top: var(--space-m);
`;

export const FlightNotFound = styled.div`
display: flex;
align-items: center;
gap: 20px;
  color: var(--red);
  background-color: var(--light-red);
  border: 1px solid var(--red);
  border-radius: var(--border-radius-m);
  padding: var(--space-l);
  `;
