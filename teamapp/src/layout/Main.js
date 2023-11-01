import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import PageContent from "./PageContent";
import Footer from "./Footer";

const Main = ({ memberList, fetchMembers }) => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col lg="9" md="9" sm="12">
            <PageContent
              memberList={memberList}
              fetchMembers={fetchMembers}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
