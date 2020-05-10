import React from "react";
import { List, ListItem } from "@chakra-ui/core";

export default {
  list: function ChakraList(props) {
    return <List styleType="disc">{props.children}</List>;
  },
  listItem: function ChakraListItem(props) {
    return <ListItem>{props.children}</ListItem>;
  },
};
