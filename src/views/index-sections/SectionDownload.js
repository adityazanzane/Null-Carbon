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
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {

  const handleClick = (e) => {
    e.preventDefault();

    window.open(
      "mailto:raviraj.bhosale2020@vitbhopal.ac.in",
      "_blank",
    )

  }

  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title" style={{fontWeight: "bold"}}>Definition ?</h2>
              <p className="description" style={{fontSize: "20px",  color: "black"}}>
              Carbon-neutral means purchasing carbon reduction credits equivalent to emissions released, without the need for emissions reductions to have taken place. 
Net-zero means reducing emissions in line with latest climate science, and balancing remaining residual emissions through carbon removal credits
              </p>
              <h2 className="title" style={{fontWeight: "bold"}}>Types of offsets</h2>
              <p className="description" style={{fontSize: "20px",  color: "black"}}>
              Carbon-neutral involves offsetting using carbon reduction or removal projects which reduce the amount of CO2 released into the atmosphere. 
Net-zero involves offsetting using carbon removal projects which actually take CO2 out of the atmosphere.
              </p>
              <h2 className="title" style={{fontWeight: "bold"}}>Scope</h2>
              <p className="description" style={{fontSize: "20px",  color: "black"}}>
              Carbon neutrality only covers direct emissions (scopes 1 and 2), with optional additions of indirect emissions (scope 3).
Net-zero must cover direct and indirect emissions (scopes 1, 2 and 3).
              </p>
              <h2 className="title" style={{fontWeight: "bold"}}>Existing standard and certification</h2>
              <p className="description" style={{fontSize: "20px",  color: "black"}}>
              Carbon-neutral has an existing standard. PAS 2060 is the only recognised international standard for carbon-neutrality. Certification of this exists via bodies such as the Carbon Trust, NQA and ControlUnion.
The SBTi Corporate Net-Zero Standard has been developed to provide guidance and tools for companies to set science-based net-zero targets. The Standard also includes an SME Pathway, to make net-zero more accessible to smaller organisations with limited resources.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                href="https://www.eajournals.org/wp-content/uploads/Carbon-Footprint-Reduction-Strategies-for-Different-Sectors-of-the-Economy.pdf"
                target="_blank"
              >
                Check Out Some Research papers
              </Button>
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title" style={{fontWeight: "bold"}}>Want more?</h2>
              <p className="description" style={{fontSize: "20px",  color: "black"}}>
                
Carbon footprint reduction strategy for household:
Carbon is emitted by household through the usage of energy such as electricity and gas. However, during the design and construction of houses, contractors can reduce household emissions through energy efficient design. In addition, the use of renewable and low-carbon energy sources by householders can also reduce their carbon footprint.The most cost- effective renewable energy source for household is a medium or large-scale wind turbine. Roof mounted photovoltaic panels and biomass heating are not cost effective choices. In the UK for instance, new housing developments are required to meet Part L regulations on energy efficiency. This regulation provides standards concerned with domestic energy usage for lighting, heating and hot water. Contractors and buildings are expected to meet the part L regulations in order to reduce the CO2 emissions of (Broer and Titheridge, 2010). The bulk of the average household’s energy use goes towards water and space heating in the UK. Solar Water Heating is a renewable technology that can make dramatic financial and carbon emission savings. It offers a quicker payback (The Renewable Energy Centre, nd).
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for letting us put our proposal!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href="mailto:raviraj.bhosale2020@vitbhopal.ac.in"
                id="tooltip840791273"
                onClick={handleClick}
              >
                <i className="fa fa-google" /> Gmail
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                raviraj.bhosale2020@vitbhopal.ac.in
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="github-bg"
                href="https://github.com/trinityhunter/null-carbon.git"
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-github" /> Star
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
