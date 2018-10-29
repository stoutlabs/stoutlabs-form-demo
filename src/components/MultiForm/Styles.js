import styled from "styled-components";

const StyledMultiFormContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;

  div.services_container {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  div.services_box {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    max-width: calc(50% - 2rem);
    background: #ddd;

    &.active-group {
      background: #fff;
    }
  }
`;

export default StyledMultiFormContainer;
