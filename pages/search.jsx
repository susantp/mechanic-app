import {Card, Container, Row, Text} from "@nextui-org/react";
import styles from "../styles/Home.module.css";

const SearchPage = () => {

    return (
        <Container>
            <Row justify={`center`} align={`center`}>
                <Card>
                    <Card.Body>
                        <Text>Service 1</Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}
export default SearchPage