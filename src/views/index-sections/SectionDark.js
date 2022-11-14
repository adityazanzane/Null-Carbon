/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Unique One-Stop Solution</h2>
              <p className="description" style={{fontSize: "30px", fontWeight: "bold"}}>
              This calculation is used for reporting Scope 3 emissions for
              individuals flying for work purposes. The footprint of a flight
              travel is calculated based on the distance between airports
              and the travelling class of the passenger. With the origin and
              destination as inputs and following the ICAO methodology
              and EPA emissions factors, we apply appropriate rules based
              on research by IPCC.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
