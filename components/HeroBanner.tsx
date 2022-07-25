import React from "react";
import Link from "next/link";
import { Hero, Button, Container } from "../styles/shared";

type Props = {
  background: string;
  title?: string;
  description?: string;
  button?: { url: string; label: string };
};

const HeroBanner = ({ background, title, description, button }: Props) => {
  return (
    <Hero background={background}>
      <Container>
        {title && <h2>{title}</h2>}
        <p>{description}</p>
        {button && (
          <Link href={button.url}>
            <Button>
              <span>{button.label}</span>
            </Button>
          </Link>
        )}
      </Container>
    </Hero>
  );
};

export default HeroBanner;
