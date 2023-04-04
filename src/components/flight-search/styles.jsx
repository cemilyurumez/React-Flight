import styled from "styled-components";



export const FlightSearch = styled.div`

    width: 100%;
    flex-wrap: wrap;
    border: 1px solid var(--light);
    border-radius: var(--border-radius-m);
    padding: var(--space-m);
`;

export const SearchForm = styled.form`
  display: flex;
  gap: var(--space-m);
`;

export const Column = styled.div`
    width: 100%;
    max-width: 33%;
    padding: var(--space-m);
    text-align: left;
    button{
      width: 100%;
      height: 100%;
    }
`;

export const Label = styled.h6`
  font-size: var(--font-xl);
  font-weight: 700;
`;

export const InputWrapper = styled.div`
  margin-top: var(--space-m);
  select, input{
    display: block;
    padding: 5px 10px;
    border: 1px solid var(--light);
    border-radius: var(--border-radius-m);
    width: 100%;
    height: 40px;
    &:focus, &:hover{
      outline: none;
      box-shadow: none;
    }

  }
`;
