import React from "react";
import { navigate } from "gatsby-link";
import styled from "@emotion/styled";
import {
  Flex,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";

import Layout from "../../components/Layout";
// import { GoogleMap } from "../../components/Map";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50em;
  align-items: left;
  max-width: 100%;
  margin: 2em auto;

  p {
    padding: 0.75em 0;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// const Index = (props) => (
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <ContentWrapper>
          <Heading
            as="h1"
            mb="5"
            size="xl"
            bg="blackAlpha.800"
            color="brightYellow"
            p={2}
          >
            Contact
          </Heading>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input type="input" id="name" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input type="email" id="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                className="textarea"
                name={"message"}
                onChange={this.handleChange}
                id={"message"}
                required={true}
              />
            </FormControl>
            <Flex mt='4' justify={"center"}>
              <Button size="lg" variant="outline" type="submit">
                Send
              </Button>
            </Flex>
          </form>
          {/* <GoogleMap /> */}
        </ContentWrapper>
      </Layout>
    );
  }
}
