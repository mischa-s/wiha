import React from "react";
import { List, ListItem } from "@chakra-ui/core";
import Headings from "../styles/headings";
import Table from '../styles/table'

const { Title, Title1, Title2, Title3, Headline, Subheadline } = Headings

const HeadingResolver = ({ level, children }) => {
  const componentsByLevel = [
    Title,
    Title1,
    Title2,
    Title3,
    Headline,
    Subheadline
  ];
  const ResolvedComponent = componentsByLevel[level - 1];
  return <ResolvedComponent>{children}</ResolvedComponent>;
};

export default {
  list: function ChakraList(props) {
    return <List styleType="disc">{props.children}</List>;
  },
  listItem: function ChakraListItem(props) {
    return <ListItem>{props.children}</ListItem>;
  },
  table: function StyledTable(props) {
    return <Table>{props.children}</Table>
  },
  heading: HeadingResolver
};
