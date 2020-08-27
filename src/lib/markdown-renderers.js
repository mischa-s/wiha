import React from "react";
import { List, ListItem } from "@chakra-ui/core";
import styled from "@emotion/styled";

const Table = styled.table`
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


export default {
  list: function ChakraList(props) {
    return <List styleType="disc">{props.children}</List>;
  },
  listItem: function ChakraListItem(props) {
    return <ListItem>{props.children}</ListItem>;
  },
  table: function StyledTable(props) {
    return <Table>{props.children}</Table>
  }
};
