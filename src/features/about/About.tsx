import { Container, Header, Segment } from "semantic-ui-react";

export default function About() {
  return (
    <Container>
      <Segment>
        <Header as="h1">About this project</Header>
        <p>
          This application is created by following the instructions from Neil
          Cummings' course. It does not contain any of my original content. The
          main purpose of this project is to help me learn how to implement
          various technologies such as Firebase, React, and Redux, as
          demonstrated in the course.
        </p>
        <p>
          I plan to use Firebase and Angular in the future to build my own
          applications with original content. This project serves as a
          foundation for understanding the underlying concepts and technologies.
        </p>
        <p>
          About me: I am a software engineer based in New Zealand. If you have
          any questions or inquiries, feel free to contact me:
        </p>
        <p>
          Email:{" "}
          <a href="mailto:shentiexiong@gmail.com">shentiexiong@gmail.com</a>
        </p>
        <p>Phone: +64 22 122 0936</p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/SimonS2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/SimonS2019
          </a>
        </p>
        <p>Date: 25/10/2024</p>
      </Segment>
    </Container>
  );
}
