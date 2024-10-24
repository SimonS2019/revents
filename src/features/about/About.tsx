import { Container, Header, Segment } from 'semantic-ui-react';

export default function About() {
    return (
        <Container>
            <Segment>
                <Header as='h1'>About Us</Header>
                <p>
                    Welcome to Re-vents! We are a platform dedicated to organizing and managing events.
                    Our mission is to make event management seamless and efficient for everyone.
                </p>
                <p>
                    Whether you are planning a small gathering or a large conference, Re-vents provides
                    the tools you need to ensure your event is a success. Thank you for choosing Re-vents!
                </p>
            </Segment>
        </Container>
    );
}