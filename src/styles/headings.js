import React from "react";
import { Heading } from "@chakra-ui/core";

export default {
  Title: ({children}) => <Heading as="h1"mb="5" size="xl" bg="blackAlpha.800" color="brightYellow"p={2}>{children}</Heading>,
  Title1: ({children}) => <Heading as="h2" my="3" size="xl">{children}</Heading>,
  Title2: ({children}) => <Heading as="h3"my="3" size="lg">{children}</Heading>,
  Title3: ({children}) => <Heading as="h4"my="2" size="md">{children}</Heading>,
  Headline: ({children}) => <Heading as="h5"my="1" size="sm">{children}</Heading>,
  Subheadline: ({children}) => <Heading as="h6"my="1" size="xs">{children}</Heading>,
};

