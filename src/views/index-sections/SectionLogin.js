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
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <Container>
            <h1 style={{color: "wheat"}}>IMPLEMENTATION</h1>
          <Row style={{margin: "auto"}}>
            {/* <Col className="mx-auto" lg="4" md="6"> */}
              <Card className="card-register">
                <h4 className="title mx-auto">
                {/* <Form className="register-form"> */}
                  Our approach for calculating the carbon footprint of hotel stays is based
on Cornell Hotel Sustainability Benchmark Index and UK government's
GHG conversion factors published in 2022. Based on country and
optionally entered city or region in that country along with rating of the
hotel, the emission factor is calculated. Over 300 cities and regions
across 38 countries are covered. The final emission is calculated based
on number of rooms taken in the hotel and the length of the stay.
</h4>
                {/* </Form> */}
              </Card>
              <Card className="card-register" style={{marginLeft: "20px", marginRight: "20px"}}>
              <h4 className="title mx-auto">This computes the emissions from electricity used by an
organization at sites which are either owned or controlled by
it, and reported as a Scope 2 Indirect emission. Data from 90+
countries between 2020-22 from multiple sources has been
compiled. The footprints of electricity usage can be entered in
kWh or MWh.
</h4>
              </Card>
              <Card className="card-register">
                <h4 className="title mx-auto">This computes the emissions from stationary combustion fuels which
are burnt in a fixed unit or asset owned or controlled by the reporting
organization, and usually reported as a Scope 1 direct emission. The
source of data and methodology of emission factor calculation are from
the government's GHG conversion factors for company reporting and
Ministry of Business, Innovation and Employment (MBIE)'s data of 2022.
All emissions are expressed as kg of CO2 equivalent per unit.
        </h4>
              </Card>
            {/* </Col> */}
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
