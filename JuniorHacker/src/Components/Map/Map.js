import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Map() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <iframe
              width="100%"
              height="270"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Prolongaci%C3%B3n%20calle%20Lamar%20s/n%20%E2%80%93%20Calca%20%E2%80%93%20Calca%20%E2%80%93%20Cusco+(My%20Business%20Name)
         &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="http://www.gps.ie/"></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Map;
