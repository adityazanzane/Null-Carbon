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
import styles from './color.css';

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Link } from "react-router-dom";

const items = [
  {
    src: require("assets/img/philip-myrtorp-iiqpxCg2GD4-unsplash-e1615904176937-1800x0-c-center.jpg"),
    altText: "Flights Travel Estimate",
    caption: "Flights Travel Estimate",
  },
  {
    src: require("assets/img/light-bulb-idea-self-employed-incidence.jpg"),
    altText: "Electricity usage Estimate",
    caption: "Electricity usage Estimate",
  },
  {
    src: require("assets/img/9c8c6adcfbd6097bad2a4b397707c6a5.jpg"),
    altText: "Hotel Stay Estimate",
    caption: "Hotel Stay Estimate",
  },
  {
    src: require("assets/img/cars-diesel-driver-driving.jpg"),
    altText: "Fuel Consumption Estimate",
    caption: "Fuel Consumption Estimate",
  },
  {
    src: require("assets/img/What-is-an-emission-control-system-scaled.jpg"),
    altText: "Vehicles Estimate by Model",
    caption: "Vehicles Estimate by Model",
  },
  {
    src: require("assets/img/maxresdefault.jpg"),
    altText: "Vehicles Estimate by Type",
    caption: "Vehicles Estimate by Type",
  },
];



function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <h1 style={{fontWeight: "bold"}}>CARBON EMISSION ESTIMATIONS FOR ORGANIZATIONS</h1>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        {/* <h3>jhvj</h3> */}
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          className={styles.carouselCaption}
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
