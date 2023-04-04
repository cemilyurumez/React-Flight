import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationMenu = styled.nav`
  display: flex;
  gap: var(--space-m);
`;

export const NavigationItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: var(--space-l);
  color: var(--gray);
  padding: var(--space-l);
  border-radius: var(--border-radius-m);
  transition: color 200ms, background-color 200ms;
  &.active,
  &:hover {
    color: var(--dark);
    background-color: var(--light);
  }
`;


export const Title = styled.p``;
