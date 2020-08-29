import styled from "@emotion/styled";

export default styled.table`
  width: 50em;
  max-width: 100%;
  overflow-x: scroll;
  margin: 1rem 0;

  th {
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #fef001;
    text-transform: uppercase;
  }

  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
`;