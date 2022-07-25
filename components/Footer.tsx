import React from "react";
import { Container, Footer } from "../styles/shared";

const FooterComponent = () => (
  <Footer>
    <Container>
      <span>Data provided by Marvel. © 2014 Marvel</span>
      <a href="https://github.com/ertanyakub" target="_blank" rel="noreferrer">
        Development - Ertan Yakub
      </a>
    </Container>
  </Footer>
);

export default FooterComponent;
